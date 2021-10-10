import styled from 'styled-components';
import {Link} from 'react-router-dom';

interface IStyleProps {
  mb?: string;
  isMobile?: boolean;
}

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    flex-direction: column;
    padding-bottom: 100px;
  }
`;

export const FormWrap = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 52px;
  display: flex;
  flex-direction: column;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    padding-top: 42px;
  }
  ${({theme}) => theme.mediaQueries.sm} {
    padding-right: 20px;
  }
`;
export const Title = styled.h2<IStyleProps>`
  ${({theme}) => `
    color: ${theme.text.default};
 `};
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: ${({mb}) => (mb ? mb : '22px')};
  ${({theme}) => theme.mediaQueriesMax.sm} {
    padding-left: 14px;
    margin-bottom: 10px;
  }
`;

export const AvatarWrap = styled.div`
  position: relative;
  width: 134px;
  height: 134px;
  border-radius: 50%;
  margin-bottom: 24px;
  border: 1px solid ${({theme}) => theme.background.light};
  ${({theme}) => theme.mediaQueriesMax.sm} {
    margin-left: auto;
    margin-right: auto;
    order: -1;
  }
`;

export const Avatar = styled.img`
  color: ${({theme}) => theme.text.primary};
  order: 1;
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
  padding-bottom: 60px;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    padding-bottom: 30px;
  }
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

export const LinkStyle = styled(Link)`
  display: block;
  width: 24px;
  height: 24px;
  position: absolute;
  right: 17px;
  top: 32px;
  background-image: url('/assets/images/web/feedback.svg');
  background-repeat: no-repeat;
  ${({theme}) => theme.mediaQueries.sm} {
    top: 17px;
  }
`;
