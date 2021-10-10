import React from 'react';
import {Sos} from '@app/component/Sos';
import TextFiled from '@app/component/TextFiled';
import {useData} from './useData';
import {Container, InfoText, Form, ButtonSend} from './style';
import {SendIcon} from '@app/component/Icons/Send';
import {useTheme} from 'styled-components';
import {OutlineButton} from '@app/component/Buttons';

export const SosCreatePage = () => {
  const {role, location, sos, isActive, note, setNote, onCreate, onChange, onCancel} = useData();
  const theme = useTheme();

  return (
    <Container>
      <InfoText>Пожалуйста, пользуйтесь функцией только в случае крайней необходимости</InfoText>
      <Sos disabled={!!(sos && sos.id) || !location || role === 'guest'} onClick={onCreate} />
      {!sos && !location && role !== 'guest' ? (
        <InfoText>
          {`Определяем Ваше место положение
Пожалуйста подождите...`}
        </InfoText>
      ) : !(sos && sos.id) && role !== 'guest' ? (
        <InfoText>{`Удерживайте кнопку, чтобы активировать`}</InfoText>
      ) : null}
      {sos && sos.id && (
        <>
          <Form
            onSubmit={(e) => {
              onChange();
              e.preventDefault();
            }}>
            <TextFiled
              onChange={(e) => setNote(e.target.value)}
              value={note}
              placeholder="Уточните что случилось?"
            />
            <ButtonSend disabled={!isActive}>
              <SendIcon size={20} fill={isActive ? theme.icon.default : theme.icon.light} />
            </ButtonSend>
          </Form>
          <OutlineButton marginTop="25px" marginBottom="25px" onClick={onCancel}>
            Отменить вызов
          </OutlineButton>
        </>
      )}
    </Container>
  );
};
