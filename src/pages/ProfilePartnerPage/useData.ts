import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useFieldArray, useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {debounce} from 'lodash';
import {yupResolver} from '@hookform/resolvers/yup';

//app
import {User, userActions, userSelectors} from '@app/bus/user';
import {authActions} from '@app/bus/auth';
import {radiusOfSosItems} from '@app/pages/ProfileUserPage/useData';
import {uiActions} from '@app/bus/ui';

//local
import {schema} from './validate';
import {appSelectors} from '@app/bus/app';
import {themesActions, themesSelectors} from '@app/bus/themes';
import {sortCategories} from '@app/helpers/sortCategories';
import {useMottoTheme} from '@app/hooks';
import {format} from 'date-fns';

type TForm = User.PayloadChangePartner;

export const useData = () => {
  const dispatch = useDispatch();

  const [isOpenChangeTheme, setIsOpenChangeTheme] = useState(false);

  const categories = useSelector(appSelectors.getCategories);

  const user = useSelector(userSelectors.getCurrent) as User.Partner;
  const avatar = user?.avatar;
  const photos = user?.photos || [];
  const canEdit = useRef<boolean>(false);
  const themeType = useSelector(themesSelectors.getType);
  let userCategories = user?.categories ? [...user?.categories] : [];

  userCategories = userCategories.sort(sortCategories);

  const {t: theme} = useMottoTheme();

  const subscribeDate = useMemo(() => {
    const timeNow = new Date().getTime();

    if (
      user &&
      user.isSubscribe &&
      user.subscriptionExpiration &&
      user.subscriptionExpiration > timeNow
    ) {
      let text = 'Активно';

      try {
        text += ' до ' + format(new Date(user.subscriptionExpiration), 'dd.MM.yyyy');
      } catch (error) {
        console.log(error);
      }

      return text;
    } else {
      return 'Не активно';
    }
  }, [user]);

  const {
    control,
    formState: {errors},
    setValue,
    register,
    unregister,
    handleSubmit,
    reset,
  } = useForm<TForm>({
    defaultValues: {
      id: user?.id as string,
      name: user?.name || '',
      categories: userCategories,
      textAddress: user?.address.full || '',
      description: user?.description || '',
      city: user?.address.city || '',
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
          type: 'weblink',
          link: user?.contacts.find((e) => e.type === 'weblink')?.link || '',
        },
        {
          type: 'phone',
          link: user?.contacts.find((e) => e.type === 'phone')?.link || '',
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
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const userCategories = user?.categories ? [...user?.categories].sort(sortCategories) : [];
    reset({
      id: user?.id as string,
      name: user?.name || '',
      categories: userCategories,
      textAddress: user?.address.full || '',
      description: user?.description || '',
      city: user?.address.city || '',
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
          type: 'weblink',
          link: user?.contacts.find((e) => e.type === 'weblink')?.link || '',
        },
        {
          type: 'phone',
          link: user?.contacts.find((e) => e.type === 'phone')?.link || '',
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
    });
  }, [user]);

  const {fields: contactsFields}: any = useFieldArray({
    control,
    name: 'contacts',
  });

  useEffect(() => {
    register('id');
    register('avatar');
    register('storeCoordinates');
    register('textAddress');
    register('city');
    register('theme');

    return () => {
      unregister('id');
      unregister('avatar');
      unregister('storeCoordinates');
      unregister('textAddress');
      unregister('city');
      unregister('theme');
    };
  }, [register, unregister]);

  const onSubmit = useCallback(
    debounce((data: TForm) => {
      if (canEdit.current) {
        //@ts-ignore
        if (data.ts) delete data.ts;
        console.log('Profile:', data);
        dispatch(userActions.changeAsync({...data, id: user.id}));
      }
    }, 2000),
    [dispatch],
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

  const handleChangeCategories = (v: string[]) => {
    setValue('categories', v);
    handleSubmit(onSubmit)();
  };

  const handleChangeAddress = (data: {
    address: string;
    city: string;
    location: [number, number];
  }) => {
    setValue('textAddress', data.address);
    setValue('city', data.city);
    setValue('storeCoordinates', data.location);
    handleSubmit(onSubmit)();
  };

  const handleUploadAvatar = (file: File) => {
    setValue('avatar', {file: file}, {shouldValidate: true});
    handleSubmit(onSubmit)();
  };

  const handleUploadPhoto = (file: any) => {
    register('photos');
    if (file) {
      {
        setValue('photos', [...file], {
          shouldValidate: true,
        });
      }
    } else {
      setValue('photos', []);
    }
    handleSubmit(onSubmit)();
    unregister('photos');
  };

  const handleDeletePhoto = (uri: string) => {
    dispatch(userActions.deletePhotoAsync(uri));
  };

  const onLogout = () => {
    dispatch(authActions.logoutAsync());
  };

  const openLinkSubscribe = () => {
    dispatch(uiActions.openLink('https://ridersapp.ru/pay'));
  };

  return {
    control,
    errors,
    contactsFields,
    avatar,
    photos,
    categories,
    defaultAddress: user?.address.full || '',
    handleUploadAvatar,
    handleUploadPhoto,
    handleChange,
    handleChangeCategories,
    handleDeletePhoto,
    onLogout,
    handleChangeAddress,
    isOpenChangeTheme,
    setIsOpenChangeTheme,
    themeType,
    handleChangeTheme,
    subscribeDate,
    openLinkSubscribe,
  };
};
