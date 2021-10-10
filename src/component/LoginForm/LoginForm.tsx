import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {yupResolver} from '@hookform/resolvers/yup';
import {Routes} from '@app/routes';

//app
import {Auth, authActions} from '@app/bus/auth';
import OutlineFiled from '@app/component/OutlineFiled';
import {SubmitButton} from '@app/component/Buttons';
import {IconComponent} from '@app/component/IconComponents';
import {uiSelectors} from '@app/bus/ui';
import ENV from '@app/configs';
import {getRawValuePhone} from '@app/helpers/getRawValuePhone';
//local
import {schema} from './validation';

//style
import {Container, Form, Title, Description, BackgroundWrapper} from './LoginForm.style';
import {Text, TextError} from '../RegisterForm/RegisterForm.style';
import {LinkToRegister, LinkForgotPas, SocialWrap, SocialLink} from './LoginForm.style';

import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {NavLink, useLocation} from 'react-router-dom';
import {parse} from 'query-string';

const LoginForm = () => {
  const {search} = useLocation();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const dispatch = useDispatch();
  const serverError = useSelector(uiSelectors.getError('sign_in'));
  const {t} = useTranslation();
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<Auth.ReqLogin>({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const params: any = parse(search);

    if (params && params.authdata && params.deviceId && params.userId) {
      dispatch(authActions.loginByServiceConfirmAsync(params));
    }
  }, [search]);

  useEffect(() => {
    console.log('errors: ', errors);
  }, [errors]);

  const toggleShowPassword = () => setIsShowPassword(!isShowPassword);

  const successCallback = () => {
    reset();
  };

  const onSubmit: SubmitHandler<Auth.ReqLogin> = (data) => {
    dispatch(authActions.loginAsync({...data, navigate: successCallback}));
  };

  const onSocialPress = (service: Auth.Service) => {
    dispatch(authActions.loginByServiceAsync(service));
  };

  return (
    <Container>
      <BackgroundWrapper></BackgroundWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <NavLink to="/">
          <Title>{t('app.name')}</Title>
        </NavLink>
        <Description>{t('auth.subtitle.sign_in')}</Description>
        <Controller
          name="login"
          control={control}
          render={({field}) => (
            <OutlineFiled
              type="tel"
              label={t('form.label.phone')}
              error={errors.login && t(`form.error.${errors.login.message}`)}
              iconRight={{name: 'phone'}}
              mask={ENV.PHONE_MASK}
              getRaw={getRawValuePhone}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({field}) => (
            <OutlineFiled
              {...field}
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
        {serverError && <TextError>{t(`form.error.${serverError}`)}</TextError>}
        <SubmitButton type="submit" text={t('button.sign_in')} />
        <LinkForgotPas to={Routes.RESTORE_PASSWORD}>Забыли пароль?</LinkForgotPas>
        <SocialWrap>
          <SocialLink onClick={() => onSocialPress('facebook')}>
            <IconComponent color="default" name="fb" size={20} />
          </SocialLink>
          <SocialLink onClick={() => onSocialPress('vk')}>
            <IconComponent color="default" name="vk" size={20} />
          </SocialLink>
          <SocialLink onClick={() => onSocialPress('instagram')}>
            <IconComponent color="default" name="instagram" size={20} />
          </SocialLink>
        </SocialWrap>

        <Text>
          Еще не имеете аккаунт?
          <LinkToRegister to={(location) => ({...location, pathname: `${Routes.REGISTER}`})}>
            Присоединиться
          </LinkToRegister>
        </Text>
      </Form>
    </Container>
  );
};

export default LoginForm;
