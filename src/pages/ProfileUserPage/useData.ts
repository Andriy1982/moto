import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useFieldArray, useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {debounce} from 'lodash';
//app
import {User, userSelectors, userActions} from '@app/bus/user';
import {authActions} from '@app/bus/auth';
import {yupResolver} from '@hookform/resolvers/yup';
//local
import {themesActions, themesSelectors} from '@app/bus/themes';
import {useMottoTheme} from '@app/hooks';
import {uiActions} from '@app/bus/ui';
import {schema} from './validate';

type TForm = User.PayloadChangeUser;

export const useData = () => {
  const dispatch = useDispatch();

  const prevGarage = useRef<any>(null);

  const [isOpenChangeTheme, setIsOpenChangeTheme] = useState(false);

  const user = useSelector(userSelectors.getCurrent);
  const canEdit = useRef<boolean>(false);
  const themeType = useSelector(themesSelectors.getType);

  const avatar = user?.avatar;

  const {t: theme} = useMottoTheme();

  const defaultValues: TForm = useMemo(() => {
    return {
      id: user?.id as string,
      name: user?.name || '',
      city: user?.address.city || '',
      garage: user?.garage || [],
      description: user?.description || '',
      pushOfEvents: user?.settings.pushOfEvents,
      pushOfSos: user?.settings.pushOfSos,
      theme: user?.settings.theme || theme,
      radiusOfSosRequest: user?.settings.radiusOfSosRequest || radiusOfSosItems[0].value,
      radiusOfEventRequest: user?.settings.radiusOfEventRequest || radiusOfSosItems[0].value,
      contacts: [
        {
          type: 'facebook',
          link: user?.contacts.find((e) => e.type === 'facebook')?.link || '',
        },
        {
          type: 'whatsapp',
          link: user?.contacts.find((e) => e.type === 'whatsapp')?.link || '',
        },
        {
          type: 'telegram',
          link: user?.contacts.find((e) => e.type === 'telegram')?.link || '',
        },
        {
          type: 'vk',
          link: user?.contacts.find((e) => e.type === 'vk')?.link || '',
        },
        {
          type: 'instagram',
          link: user?.contacts.find((e) => e.type === 'instagram')?.link || '',
        },
      ],
    };
  }, [user, theme]);

  const {
    control,
    formState: {errors},
    setValue,
    register,
    unregister,
    handleSubmit,
  } = useForm<TForm>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const {
    fields: garageFields,
    append: appendGarageField,
    remove: removeGarageField,
  }: any = useFieldArray({
    control,
    name: 'garage',
  });

  const {fields: contactsFields}: any = useFieldArray({
    control,
    name: 'contacts',
  });

  useEffect(() => {
    if (prevGarage.current !== null && prevGarage.current !== garageFields) {
      handleSubmit(onSubmit)();
    }
    prevGarage.current = garageFields;
  }, [garageFields]);

  useEffect(() => {
    register('id');
    register('avatar');
    register('theme');

    return () => {
      unregister('id');
      unregister('avatar');
      unregister('theme');
    };
  }, [register, unregister]);

  const onSubmit = useCallback(
    debounce((data: TForm) => {
      if (canEdit.current) {
        if (!data.garage) data.garage = [];
        console.log('User', data);
        dispatch(userActions.changeAsync(data));
      }
    }, 4000),
    [dispatch, defaultValues],
  );

  if (Object.keys(errors).length > 0) {
    canEdit.current = false;
  } else {
    canEdit.current = true;
  }

  const handleChangeTheme = (v: any) => {
    setValue('theme', v);
    handleSubmit(onSubmit)();
    dispatch(themesActions.changeTypeAsync(v));
  };

  const handleChange = (onChange: (v: any) => void) => {
    return (v: any) => {
      onChange(v);
      handleSubmit(onSubmit)();
    };
  };

  const handleUploadAvatar = (file: File) => {
    setValue('avatar', {file: file});
    handleSubmit(onSubmit)();
  };

  const onLogout = () => {
    dispatch(authActions.logoutAsync());
  };

  const openLinkSubscribe = () => {
    dispatch(uiActions.openLink('https://ridersapp.ru/pay'));
  };

  return {
    avatar,
    control,
    errors,
    contactsFields,
    garageFields,
    handleUploadAvatar,
    appendGarageField,
    removeGarageField,
    handleChange,
    onLogout,
    isOpenChangeTheme,
    setIsOpenChangeTheme,
    themeType,
    handleChangeTheme,
    openLinkSubscribe,
    register,
    handleSubmit,
  };
};

export const radiusOfSosItems = [
  {
    value: 5000,
    label: '5 км',
  },
  {
    value: 10000,
    label: '10 км',
  },
  {
    value: 15000,
    label: '15 км',
  },
  {
    value: 20000,
    label: '20 км',
  },
];
