import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 40px;
`;

export const InfoText = styled.div`
  max-width: 512px;
  font-size: 24px;
  color: ${({theme}) => theme.text.gray};
  text-align: center;
  margin: 40px 0;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  width: 100%;
  margin-top: 65px;
`;

export const ButtonSend = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 43px;
  border-radius: 43px;
  margin-left: 12px;
  border: none;
  background-color: ${({theme, disabled}) =>
    disabled ? theme.background.dark : theme.background.primary};

  &:active {
    opacity: 0.75;
  }
`;
