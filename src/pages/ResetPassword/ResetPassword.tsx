import React from 'react';
import {useTranslation} from 'react-i18next';
import {NavLink} from 'react-router-dom';
//app
import OutlineFiled from '@app/component/OutlineFiled';
import {SubmitButton} from '@app/component/Buttons';
import ENV from '@app/configs';
import {getRawValuePhone} from '@app/helpers/getRawValuePhone';
import {
  Container,
  Form,
  Title,
  Description,
  BackgroundWrapper,
} from '@app/component/LoginForm/LoginForm.style';

//local
import {useData} from './useData';
import {Controller} from 'react-hook-form';
import {TextError} from '@app/component/RegisterForm/RegisterForm.style';

export const ResetPassword = () => {
  const {t} = useTranslation();
  const {control, errors, onSubmit, serverError} = useData();

  return (
    <Container>
      <BackgroundWrapper></BackgroundWrapper>
      <Form onSubmit={onSubmit}>
        <NavLink to="/">
          <Title>{t('app.name')}</Title>
        </NavLink>
        <Description>{t('auth.subtitle.reset_password')}</Description>
        <Controller
          control={control}
          name="login"
          render={({field}) => (
            <OutlineFiled
              {...field}
              type="tel"
              label={t('form.label.phone')}
              error={errors.login && t(`form.error.${errors.login.message}`)}
              iconRight={{name: 'phone'}}
              mask={ENV.PHONE_MASK}
              getRaw={getRawValuePhone}
            />
          )}
        />
        {serverError && <TextError>{t(`form.error.${serverError}`)}</TextError>}
        <SubmitButton type="submit" text={t('button.send_code')} />
      </Form>
    </Container>
  );
};
