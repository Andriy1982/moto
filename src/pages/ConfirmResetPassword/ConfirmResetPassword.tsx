import React from 'react';
import {useTranslation} from 'react-i18next';
import {useLocation} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
//app
import OutlineFiled from '@app/component/OutlineFiled';
import {SubmitButton} from '@app/component/Buttons';

//style
import {
  Container,
  Form,
  Title,
  Description,
  BackgroundWrapper,
} from '@app/component/RegisterForm/RegisterForm.style';

//local
import {useData} from './useData';
import {Controller} from 'react-hook-form';
// import {Routes} from '@/navigation';

export const ConfirmResetPassword: React.FC = () => {
  const {t} = useTranslation();

  const {state} = useLocation<{
    login?: string;
    code?: string;
  }>();

  const {
    errors,
    control,
    isShowPassword,
    isShowConfirmPassword,
    onSubmit,
    toggleShowPassword,
    toggleShowConfirmPassword,
  } = useData(state);

  return (
    <Container>
      <BackgroundWrapper></BackgroundWrapper>
      <Form onSubmit={onSubmit}>
        <NavLink to="/">
          <Title>{t('app.name')}</Title>
        </NavLink>
        <Description>{t('auth.subtitle.reset_password')}</Description>
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
        <SubmitButton type="submit" text={t('button.confirm')} />
      </Form>
    </Container>
  );
};
