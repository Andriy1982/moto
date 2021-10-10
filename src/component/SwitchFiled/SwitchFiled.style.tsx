import styled from 'styled-components';

interface IStyleProps {
  error?: boolean;
  isChecked?: boolean;
  textColour?: boolean;
}

export const Label = styled.label<IStyleProps>`
  background-color: ${({theme, isChecked}) =>
    isChecked ? theme.background.primary : theme.text.light};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
  ${({isChecked}) => (isChecked ? ` right: 0` : `left: 0`)}
`;

export const Description = styled.p<IStyleProps>`
  font-size: 18px;
  line-height: 25px;
  color: ${({theme, textColour}) => (textColour ? theme.background.primary : theme.text.light_01)};
`;

export const Input = styled.input<IStyleProps>`
  margin: 0;
  padding: 0;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapSwitch = styled.div`
  display: flex;
  align-items: center;
  transition: color 150ms ease-in 0;
`;

export const Switch = styled.div<IStyleProps>`
  background-color: ${({theme, isChecked}) =>
    isChecked ? theme.background.primary_04 : theme.background.dark};
  display: flex;
  flex-shrink: 0;
  align-items: center;
  position: relative;
  width: 40px;
  height: 18px;
  border-radius: 50em;
  padding: 3px 0;
  cursor: pointer;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    background-color: ${({theme, isChecked}) =>
      isChecked ? theme.background.primary_04 : theme.background.darken};
  }
`;
