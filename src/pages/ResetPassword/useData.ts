import {Auth, authActions} from '@app/bus/auth';
import {uiSelectors} from '@app/bus/ui';
import {useCallback} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {yupResolver} from '@hookform/resolvers/yup';
import {useHistory} from 'react-router-dom';
import {Routes} from '@app/routes';
import {useToasts} from 'react-toast-notifications';

//local
import {schema} from './validation';

export const useData = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {addToast} = useToasts();

  const isLoading = useSelector(uiSelectors.getLoading('reset_password_start'));
  const serverError = useSelector(uiSelectors.getError('reset_password_start'));
  const {
    control,
    register,
    reset,
    formState: {errors},
    handleSubmit,
  } = useForm<Auth.ReqStartResetPassword>({
    defaultValues: {
      login: '',
    },
    resolver: yupResolver(schema),
  });

  const successCallback = (state: any) => {
    history.push(Routes.CONFIRM_CODE, state);
    reset();
  };

  const onSubmit = useCallback((data) => {
    dispatch(
      authActions.resetPasswordStartAsync({...data, navigate: successCallback, toast: addToast}),
    );
  }, []);

  return {
    control,
    errors,
    isLoading,
    register,
    serverError,
    onSubmit: handleSubmit(onSubmit),
  };
};
