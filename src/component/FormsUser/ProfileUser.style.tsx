import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 100%;
  padding-top: 45px;
  flex-basis: 316px;
  min-width: 316px;
  ${({theme}) => theme.mediaQueries.sm} {
    min-width: 230px;
  }
  ${({theme}) => theme.mediaQueries.lg} {
    min-width: 316px;
  }
`;

export const Form = styled.form`
  ${({theme}) => `
    color: ${theme.text.primary};
    background-color: ${theme.background.default};
 `};
  flex-grow: 1;
  height: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    max-width: 100%;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  width: 100%;
  & > div:first-child {
    margin-right: 36px;
  }
  ${({theme}) => theme.mediaQueriesMax.md} {
    flex-wrap: wrap;
    & > div:first-child {
      margin-right: 0;
      margin-bottom: 16px;
    }
  }
  ${({theme}) => theme.mediaQueriesMax.sm} {
    & > div:first-child {
      margin-bottom: 0;
    }
  }
`;

export const SettingsWrap = styled.div`
  position: relative;
  width: 100%;
  padding: 24px 0;
  border-bottom: 1px solid ${({theme}) => theme.background.darken};
  ${({theme}) => theme.mediaQueriesMax.sm} {
    background-color: ${({theme}) => theme.background.dark};
    padding: 12px 17px;
  }
`;

export const InputDescription = styled.p`
  display: none;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    display: block;
    font-size: 12px;
    line-height: 14px;
    color: ${({theme}) => theme.text.gray};
    padding: 5px 0 5px 16px;
    margin-bottom: 28px;
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: grid;
  justify-content: flex-start;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    background-color: ${({theme}) => theme.background.dark};
    padding-left: 16px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: ${({theme}) => theme.text.light};
  background-image: url('/assets/images/web/plus-button.svg');
  background-repeat: no-repeat;
  background-position: left;
  padding: 10px 0 10px 35px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  line-height: 25px;
`;

export const List = styled.ul`
  width: 100%;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  margin-bottom: 16px;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    margin-bottom: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;
