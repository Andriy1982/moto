import {Auth, authActions} from '@app/bus/auth';
import {uiSelectors} from '@app/bus/ui';
import {yupResolver} from '@hookform/resolvers/yup';
import {useEffect, useState} from 'react';
import {useCallback} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {schema} from './validation';
import {useToasts} from 'react-toast-notifications';
import {useHistory} from 'react-router-dom';

type TProps = {
  code?: string;
  login?: string;
};

export const useData = ({login, code}: TProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const isLoading = useSelector(uiSelectors.getLoading('reset_password_end'));
  const {addToast} = useToasts();

  const {
    formState: {errors},
    control,
    register,
    unregister,
    handleSubmit,
  } = useForm<Auth.ReqEndResetPassword & {confirm_password: string}>({
    defaultValues: {
      login,
      code,
      password: '',
      confirm_password: '',
      deviceId: localStorage.getItem('deviceId') || '',
      system: 'web',
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    register('login');
    register('code');
    register('system');
    register('deviceId');
    return () => {
      unregister('login');
      unregister('code');
      unregister('system');
      unregister('deviceId');
    };
  }, [register, unregister]);

  const onSubmit = useCallback((data) => {
    if (data.confirm_password) delete data.confirm_password;
    console.log(data);
    dispatch(authActions.resetPasswordEndAsync({...data, toast: addToast, navigate: history.push}));
  }, []);

  console.log(errors);

  return {
    control,
    register,
    errors,
    isLoading,
    isShowPassword,
    isShowConfirmPassword,
    toggleShowPassword: () => setIsShowPassword(!isShowPassword),
    toggleShowConfirmPassword: () => setIsShowConfirmPassword(!isShowConfirmPassword),
    onSubmit: handleSubmit(onSubmit),
  };
};
