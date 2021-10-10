import styled from 'styled-components';

interface IStyleProps {
  error?: boolean;
  paddingLeft?: boolean;
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

export const Textarea = styled.textarea<IStyleProps>`
  background: transparent;
  width: 100%;
  border: none;
  font-size: 18px;
  line-height: 25px;
  color: ${({theme}) => theme.text.light_01};
  outline: none;
  resize: none;

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
  ${({theme}) => theme.mediaQueriesMax.sm} {
    margin-bottom: 0;
    flex-direction: row-reverse;
  }
`;

export const Container = styled.div<IStyleProps>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
