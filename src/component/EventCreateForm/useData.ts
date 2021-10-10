import {useCallback, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch, useSelector} from 'react-redux';
//app
import {DaDataService, ItemAddress2} from '@app/services/daData';
import {Event, eventActions} from '@app/bus/event';
import {uiSelectors} from '@app/bus/ui';
//local
import {schema} from './validate';
import {useToasts} from 'react-toast-notifications';
import {useHistory} from 'react-router-dom';

export const useData = ({mapRef}: {mapRef: React.RefObject<any>}) => {
  const dispatch = useDispatch();
  const {addToast} = useToasts();
  const history = useHistory();

  const initDate = new Date();
  initDate.setMinutes(initDate.getMinutes() + 2);

  const [time, setTime] = useState<number>(initDate.getTime());
  const [date, setDate] = useState<number>(initDate.getTime());
  const [daDataAddress, setDaDataAddress] = useState<ItemAddress2[]>([]);
  const [mapLocation, setMapLocation] = useState<[number, number]>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const isLoading = useSelector(uiSelectors.getLoading('create_event'));

  const {
    control,
    setValue,
    register,
    unregister,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<Event.ReqCreateData>({
    defaultValues: {
      name: '',
      description: '',
    },
    resolver: yupResolver(schema),
  });

  const getCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (mapRef.current && !mapLocation) {
            mapRef.current.setCenter([position.coords.latitude, position.coords.longitude], 18);
          }
        },
        () => {},
      );
    }
  }, [mapLocation]);

  useEffect(() => {
    register('city');
    register('textAddress');
    register('location');
    register('date');
    register('timeZone');

    return () => {
      unregister('city');
      unregister('textAddress');
      unregister('location');
      unregister('date');
      unregister('timeZone');
    };
  }, []);

  useEffect(() => {
    if (date && time) {
      const dateData = new Date(date);
      const timeData = new Date(time);
      const day = dateData.getDate();
      const month = dateData.getMonth();
      const year = dateData.getFullYear();
      const hours = timeData.getHours();
      const minutes = timeData.getMinutes();

      const newDate = new Date(year, month, day, hours, minutes, 0, 0);

      setValue('date', newDate.getTime());
      setValue('timeZone', (-1 * newDate.getTimezoneOffset()) / 60);
    }
  }, [date, time]);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      return;
    }
    setSelectedFile(e.target.files[0]);
    handleUploadSubstrate(e.target.files[0]);
  };

  const handleChangeAddress = (data: {
    address: string;
    city: string;
    location: [number, number] | null;
  }) => {
    console.log(data);
    setValue('textAddress', data.address);
    setValue('city', data.city);
    setDaDataAddress([]);
    if (data.location) {
      setValue('location', data.location);
      setMapLocation(data.location);
    }
  };

  const handleUploadSubstrate = (file: any) => {
    console.log(file);
    register('substrate');
    setValue('substrate', {file: file}, {shouldValidate: true});
  };

  const onSubmit = (data: Event.ReqCreateData) => {
    console.log(data);
    dispatch(eventActions.createAsync({...data, success: history.push, error: addToast}));
  };

  const handleChangeLocation = useCallback(async ({lat, lon}: {lat: number; lon: number}) => {
    if (lat && lon) {
      const items: ItemAddress2[] = await DaDataService.fetchAddress({
        lat: `${lat}`,
        lon: `${lon}`,
        radius_meters: 100,
      });
      setMapLocation([lat, lon]);
      setDaDataAddress(items);
    }
  }, []);

  const onSelectAddress = (item: ItemAddress2) => {
    if (mapLocation) setValue('location', mapLocation);
    setValue('textAddress', item.value);
    setValue('city', item.data.city || item.data.region);
    setDaDataAddress([]);
  };

  const substrate = watch('substrate');
  const textAddress = watch('textAddress');

  return {
    time,
    date,
    control,
    errors,
    isLoading,
    substrate,
    textAddress,
    daDataAddress,
    mapLocation,
    onSelectAddress,
    handleUploadSubstrate,
    handleChangeAddress,
    handleChangeLocation,
    onSubmit: handleSubmit(onSubmit),
    getCurrentLocation,
    setTime,
    setDate,
    preview,
    onSelectFile,
  };
};
