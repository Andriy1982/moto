import {useState, useCallback, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch, useSelector} from 'react-redux';
//app
import {Auth, authActions} from '@app/bus/auth';
//local
import {schema} from './validation';
import {uiSelectors} from '@app/bus/ui';
import {userSelectors} from '@app/bus/user';
import {useHistory} from 'react-router-dom';

type TProps = {
  id?: string;
  login?: string;
};

export const useData = ({id, login}: TProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isCanSendCode, setIsCanSendCode] = useState(false);
  const isLoading = useSelector(uiSelectors.getLoading('code_validate'));
  const serverError = useSelector(uiSelectors.getError('code_validate'));
  const authorizedLogin = useSelector(userSelectors.getCurrent)?.phone;
  const {
    control,
    register,
    unregister,
    setValue,
    handleSubmit,
    // formState: {errors},
  } = useForm<Auth.PayloadValidateCode>({
    defaultValues: {
      code: '',
      login: login || authorizedLogin || '',
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    register('login');
    return () => {
      unregister('login');
    };
  }, []);

  useEffect(() => {
    console.log('id send', id);

    if (id) {
      register('id');
      setValue('id', id);
    } else {
      unregister('id');
      setValue('id', '');
    }
    () => {
      if (!id) unregister('id');
    };
  }, [id]);

  const onSubmitCode = useCallback(() => {
    if (isCanSendCode && (login || authorizedLogin)) {
      dispatch(
        authActions.codeSendAsync({
          login: (login as string) || (authorizedLogin as string),
        }),
      );
      setIsCanSendCode(false);
    }
  }, [isCanSendCode, login, authorizedLogin]);

  const onSubmit = useCallback(
    (data) => {
      console.log('code validate', data);
      dispatch(authActions.codeValidateAsync({...data, navigate: history.push}));
    },
    [dispatch],
  );

  return {
    control,
    isCanSendCode,
    isLoading,
    serverError,
    onSubmit: handleSubmit(onSubmit),
    onSubmitCode,
    onEndTimer: () => setIsCanSendCode(true),
  };
};
