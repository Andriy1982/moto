import styled from 'styled-components';
import MaskedInputText from 'react-maskedinput';

interface IStyleProps {
  error?: boolean;
}

export const Label = styled.label<IStyleProps>`
  /* color: ${({error}) => (error ? 'red' : 'green')}; */
  color: ${({theme}) => theme.text.light};
  font-size: 14px;
  line-height: 20px;
  /* margin-bottom: 10px; */
`;

export const Input = styled.input<IStyleProps>`
  width: 100%;
  font-size: 18px;
  line-height: 25px;
  color: ${({theme}) => theme.text.default};
  padding: 2px 0;
  /* margin-bottom: 16px; */
  background-color: transparent;
  border: none;
  outline: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const MaskedInput = styled(MaskedInputText)`
  width: 100%;
  font-size: 18px;
  line-height: 25px;
  color: ${({theme}) => theme.text.default};
  padding: 2px 0;
  /* margin-bottom: 16px; */
  background-color: transparent;
  border: none;
  outline: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const Span = styled.span`
  position: absolute;
  bottom: 0;
  color: ${({theme}) => theme.text.danger};
`;

export const InputWrapper = styled.div<IStyleProps>`
  position: relative;
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  border-color: ${({error, theme}) => (error ? theme.background.danger : 'transparent')};
  ${({theme}) => `border-bottom: 1px solid ${theme.background.light}`};
  border-bottom: 1px solid
    ${({error, theme}) => (error ? theme.background.danger : theme.background.light)};
  /* flex-direction: column; */
`;

// export const ButtonIcon = styled.button`
//   width: 20px;
//   height: 20px;
//   position: absolute;
//   right: 0;
//   top: 24px;
//   background-color: transparent;
//   border: none;
// `;

export const Container = styled.div<IStyleProps>`
  position: relative;
  display: flex;
  flex-direction: column;
`;
