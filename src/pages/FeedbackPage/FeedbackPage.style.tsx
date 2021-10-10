import styled from 'styled-components';

interface IStyleProps {
  error?: boolean;
}

export const FormWrap = styled.div`
  padding: 52px 40px;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    padding: 24px 16px;
  }
`;

export const Form = styled.form`
  ${({theme}) => `
    color: ${theme.text.primary};
    background-color: ${theme.background.default};
 `};
  height: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  & > div {
    position: relative;
  }

  & span {
    bottom: -18px;
    left: 0;
  }
  & label {
    margin-bottom: 4px;
    color: ${({theme}) => theme.text.light};
    font-size: 14px;
    line-height: 20px;
  }

  & > div:not(:last-of-type) {
    margin-bottom: 22px;
  }
  ${({theme}) => theme.mediaQueriesMax.sm} {
    & > div:not(:last-of-type) {
      margin-bottom: 14px;
    }
  }
`;

export const Title = styled.h2`
  ${({theme}) => `
    color: ${theme.text.default};
 `};
  font-weight: bold;
  font-size: 36px;
  line-height: 32px;
  margin-bottom: 56px;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    margin-bottom: 22px;
    font-size: 24px;
    text-transform: uppercase;
    text-align: center;
  }
`;

export const TextWrapper = styled.div<IStyleProps>`
  background: ${({theme}) => theme.background.dark};
  border-radius: 5px;
  padding: 10px;
  border: 1px solid ${({theme, error}) => (error ? theme.border.danger : theme.border.dark)};
  width: 100%;
  color: ${({theme}) => theme.text.light_01};
  cursor: pointer;
`;
