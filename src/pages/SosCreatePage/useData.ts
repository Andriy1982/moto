import {useCallback, useEffect, useState} from 'react';
import {sosActions, sosSelectors} from '@app/bus/sos';
import {useDispatch, useSelector} from 'react-redux';
import {userSelectors} from '@app/bus/user';
import {useToasts} from 'react-toast-notifications';

export const useData = () => {
  const dispatch = useDispatch();
  const {addToast} = useToasts();

  const sos = useSelector(sosSelectors.getCurrent);
  const role = useSelector(userSelectors.getCurrentRole);
  const [note, setNote] = useState('');
  const [location, setLocation] = useState<[number, number] | null>();

  const getCurrentLocation = useCallback(() => {
    if (role !== 'guest' && !sos) {
      setLocation(null);
      if (!navigator.geolocation) {
        addToast('Не удалось определить Вашу локацию. Проверьте доступность GPS', {
          appearance: 'error',
          autoDismiss: true,
        });
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation([position.coords.latitude, position.coords.longitude]);
          },
          () => {
            addToast('Не удалось определить Вашу локацию. Проверьте доступность GPS', {
              appearance: 'error',
              autoDismiss: true,
            });
          },
        );
      }
    }
  }, [role, sos]);

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  const saveLocal = useCallback(() => {
    if (sos && sos.id) {
      localStorage.setItem('sos', sos.id);
    }
  }, [sos]);

  const fetchLocal = useCallback(async () => {
    const id = localStorage.getItem('sos');

    if (id) {
      dispatch(sosActions.fetchCurrentAsync({id}));
    }
  }, []);

  useEffect(() => {
    if (role === 'guest') {
      addToast('Чтобы воспользоваться функцией, пожалуйста, авторизуйтесь', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  }, [role]);

  useEffect(() => {
    saveLocal();
  }, [saveLocal]);

  useEffect(() => {
    fetchLocal();
  }, [fetchLocal]);

  useEffect(() => {
    if (sos && sos.description) {
      setNote(sos.description);
    }
  }, [sos]);

  const onCancel = () => {
    if (sos && sos.id) {
      setNote('');
      dispatch(
        sosActions.deleteAsync({
          id: sos.id,
          toast: addToast,
        }),
      );
      localStorage.removeItem('sos');
    }
  };

  const onCreate = useCallback(() => {
    if (location) {
      const date = new Date();
      dispatch(
        sosActions.createAsync({
          location,
          city: 'unknow',
          timeZone: (-1 * date.getTimezoneOffset()) / 60,
          toast: addToast,
        }),
      );
    }
  }, [location]);

  const onChange = useCallback(async () => {
    if (note) {
      if (sos && sos.id) {
        dispatch(
          sosActions.changeAsync({
            id: sos.id,
            description: note,
            toast: addToast,
          }),
        );
      }
    }
  }, [note, sos]);

  const isActive = !!sos?.id && !!note;

  return {
    role,
    location,
    sos,
    isActive,
    note,
    setNote,
    onCreate,
    onChange,
    onCancel,
  };
};
