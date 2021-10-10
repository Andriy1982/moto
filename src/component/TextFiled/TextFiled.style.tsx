import styled from 'styled-components';

interface IStyleProps {
  error?: boolean;
  paddingLeft?: boolean;
  isShowInput?: boolean;
  isShowLabel?: boolean;
}

export const Label = styled.label<IStyleProps>`
  color: ${({theme}) => theme.text.light};
  font-size: 14px;
  line-height: 20px;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    display: ${({isShowLabel}) => (isShowLabel ? 'block' : 'none')};
  }
`;

export const Input = styled.input<IStyleProps>`
  background: transparent;
  width: 100%;
  border: none;
  font-size: 18px;
  line-height: 25px;
  color: ${({theme}) => theme.text.light_01};
  outline: none;

  &::placeholder {
    font-size: 18px;
    line-height: 25px;
    color: ${({theme}) => theme.text.gray};
  }
  ${({theme}) => theme.mediaQueriesMax.sm} {
    margin-bottom: 0;
    border-radius: 0;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Span = styled.span`
  position: absolute;
  bottom: 0;
  color: ${({theme}) => theme.text.danger};
`;

export const InputWrapper = styled.div<IStyleProps>`
  background: ${({theme}) => theme.background.dark};
  border-radius: 5px;
  padding: 10px;
  border: 1px solid
    ${({error, theme}) => (error ? theme.background.danger : theme.background.darken)};
  width: 100%;
  display: flex;
  ${({isShowInput, theme}) => isShowInput && `width: 54px; background: ${theme.background.dark}`};
  ${({theme}) => theme.mediaQueriesMax.sm} {
    margin-bottom: 0;
    flex-direction: row-reverse;
  }
`;

export const Container = styled.div<IStyleProps>`
  position: relative;
  width: ${({isShowInput}) => (isShowInput ? 'auto' : '100%')};
  display: flex;
  flex-direction: column;
`;
