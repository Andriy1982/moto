import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {yupResolver} from '@hookform/resolvers/yup';

import {useHistory} from 'react-router-dom';

//app
import {authActions, Auth} from '@app/bus/auth';
import OutlineFiled from '@app/component/OutlineFiled';
import SwitchFiled from '@app/component/SwitchFiled';
import {uiSelectors} from '@app/bus/ui';
import ENV from '@app/configs';
import {getRawValuePhone} from '@app/helpers/getRawValuePhone';
//local
import {TForm} from './validation';
import {schema} from './validation';

//style
import {
  Container,
  Form,
  Title,
  Description,
  BackgroundWrapper,
  Text,
  LinkStyle,
  TextError,
} from './RegisterForm.style';
import {NavLink} from 'react-router-dom';
import {SubmitButton} from '@app/component/Buttons';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {Routes} from '@app/routes';

const RegisterForm = () => {
  const history = useHistory();
  const serverError = useSelector(uiSelectors.getError('sign_up'));
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [isPartner, setIsPartner] = useState(false);
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: {errors},
  } = useForm<TForm>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirm_password: '',
      role: 'user',
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (isPartner) {
      setValue('role', 'partner');
    } else {
      setValue('role', 'user');
    }
  }, [isPartner]);

  const toggleShowPassword = () => setIsShowPassword(!isShowPassword);
  const toggleShowConfirmPassword = () => setIsShowConfirmPassword(!isShowConfirmPassword);
  const successCallback = (state: any) => {
    history.push(Routes.CONFIRM_CODE, state);
    reset();
  };

  const onSubmit: SubmitHandler<Auth.ReqRegister> = (data) => {
    dispatch(authActions.registerAsync({...data, navigate: successCallback}));
  };
  return (
    <Container>
      <BackgroundWrapper />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <NavLink to="/">
          <Title>{t('app.name')}</Title>
        </NavLink>
        <Description>{t('auth.subtitle.sign_up')}</Description>
        <Controller
          name="name"
          control={control}
          render={({field}) => (
            <OutlineFiled
              {...field}
              label={t('form.label.name')}
              error={errors.name && t(`form.error.${errors.name.message}`)}
              iconRight={{name: 'user'}}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({field}) => (
            <OutlineFiled
              {...field}
              label={t('form.label.email')}
              error={errors.email && t(`form.error.${errors.email.message}`)}
              iconRight={{name: 'email'}}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({field}) => (
            <OutlineFiled
              {...field}
              type="tel"
              label={t('form.label.phone')}
              error={errors.phone && t(`form.error.${errors.phone.message}`)}
              iconRight={{name: 'phone'}}
              mask={ENV.PHONE_MASK}
              getRaw={getRawValuePhone}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({field}) => (
            <OutlineFiled
              {...field}
              name="password"
              type={!isShowPassword ? 'password' : 'text'}
              label={t('form.label.password')}
              error={errors.password && t(`form.error.${errors.password.message}`)}
              iconRight={{
                name: isShowPassword ? 'eye' : 'eye-slash',
                onPress: toggleShowPassword,
              }}
            />
          )}
        />
        <Controller
          name="confirm_password"
          control={control}
          render={({field}) => (
            <OutlineFiled
              {...field}
              type={!isShowConfirmPassword ? 'password' : 'text'}
              label={t('form.label.confirm_password')}
              error={errors.confirm_password && t(`form.error.${errors.confirm_password.message}`)}
              iconRight={{
                name: isShowConfirmPassword ? 'eye' : 'eye-slash',
                onPress: toggleShowConfirmPassword,
              }}
            />
          )}
        />
        <SwitchFiled
          label={t('form.label.is_partner')}
          value={isPartner}
          onChange={setIsPartner}
          textColour
        />
        {serverError && <TextError>{t(`form.error.${serverError}`)}</TextError>}
        <SubmitButton type="submit" text={t('button.sign_up')} />
        <Text>
          Уже зарегистрированы?
          <LinkStyle to={(location) => ({...location, pathname: `${Routes.LOGIN}`})}>
            {' '}
            Войти
          </LinkStyle>
        </Text>
      </Form>
    </Container>
  );
};

export default RegisterForm;
