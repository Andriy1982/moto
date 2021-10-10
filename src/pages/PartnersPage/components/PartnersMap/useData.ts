import {useCallback, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {throttle} from 'lodash';
//app
import {partnerActions, partnerSelectors} from '@app/bus/partner';
import {useToasts} from 'react-toast-notifications';
import {User} from '@app/bus/user';

type Point = {
  latitude: number;
  longitude: number;
};

export const useData = () => {
  const {addToast} = useToasts();
  const dispatch = useDispatch();

  const partners = useSelector(partnerSelectors.getItems);
  const [currentPartner, setCurrentPartner] = useState<User.Partner>();

  const [location, setLocation] = useState<Point>();
  const [showMap, setShowMap] = useState<boolean>(false);
  const [radius, setRadius] = useState<number>(getM(13));

  const getCurrentLocation = useCallback(() => {
    if (!navigator.geolocation) {
      addToast('Не удалось определить Вашу локацию. Проверьте доступность GPS', {
        appearance: 'error',
        autoDismiss: true,
      });
      setShowMap(true);
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setShowMap(true);
        },
        () => {
          addToast('Не удалось определить Вашу локацию. Проверьте доступность GPS', {
            appearance: 'error',
            autoDismiss: true,
          });
          setShowMap(true);
        },
      );
    }
  }, []);

  const getItems = useCallback(() => {
    if (location) {
      dispatch(
        partnerActions.fetchItemsMapAsync({
          skip: 0,
          limit: 50,
          radiusOfView: radius,
          sortField: 'coordinates',
          ...location,
        }),
      );
    }
  }, [location, radius]);

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  useEffect(() => {
    getItems();
  }, [getItems]);

  const handleChangePosition = useCallback(
    throttle(({latitude, longitude, zoom}: Point & {zoom: number}) => {
      setLocation({latitude, longitude});
      setRadius(getM(zoom));
    }, 300),
    [],
  );

  return {
    partners,
    handleChangePosition,
    showMap,
    location,
    currentPartner,
    setCurrentPartner,
  };
};

const getM = (zoom: number) => {
  const m = (60000 / Math.pow(2, zoom)) * 6000;
  return Math.round(m);
};
