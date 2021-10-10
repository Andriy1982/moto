import React from 'react';
import ReactCodeInput from 'react-code-input';
import {useTranslation} from 'react-i18next';
import {Redirect, useLocation} from 'react-router-dom';
import {Controller} from 'react-hook-form';
//app
import {CountDownTimer} from '../CountDownTimer';
import pallete from '@app/themes/palletes/dark.pallete';

//style
import {Container, Title, Description, Text, Button, props} from './ConfirmCode.style';
import {SubmitButton} from '../Buttons/SubmitButton';
import {useData} from './useData';
import {Routes} from '@app/routes';

const ConfirmCode: React.FC = () => {
  const {t} = useTranslation();

  const {state} = useLocation<{
    login?: string;
    id?: string;
  }>();

  const {control, serverError, onSubmit, onEndTimer, isCanSendCode, onSubmitCode} = useData(state);

  if (!state.login) return <Redirect to={Routes.PROFILE} />;

  return (
    <Container>
      <Title>{t('auth.title.confirm_code')}</Title>
      <div style={{maxWidth: '468px', marginBottom: '40px'}}>
        <Description>{t('auth.subtitle.confirm_code')}</Description>
      </div>
      <Controller
        control={control}
        name="code"
        render={({field, fieldState: {error}}) => (
          <>
            <ReactCodeInput
              {...field}
              name="code"
              inputMode="numeric"
              type="text"
              fields={5}
              {...props}
            />
            {(!!error && (
              <Text style={{color: pallete.text.danger}}>
                {t('form.error.invalid_confirm_code')}
              </Text>
            )) ||
              (serverError && (
                <Text style={{color: pallete.text.danger}}>{t(`form.error.${serverError}`)}</Text>
              ))}
          </>
        )}
      />

      <SubmitButton type="button" text={t('button.confirm')} onClick={onSubmit} />
      {isCanSendCode ? (
        <>
          <Text>Получить новый код </Text>
          <Button onClick={onSubmitCode}>отправить</Button>
        </>
      ) : (
        <>
          <Text>Получить новый код можно через</Text>
          <CountDownTimer minutes={0} seconds={45} onEnded={onEndTimer} />
        </>
      )}
    </Container>
  );
};
export default ConfirmCode;
