import styled from 'styled-components';

interface IStyleProps {
  mb?: string;
  tabActive?: boolean;
  isMobile?: boolean;
}

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-bottom: 100px;
  ${({theme}) => theme.mediaQueries.sm} {
    flex-direction: row;
    padding-bottom: 0;
  }
`;

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
    padding-bottom: 60px;
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

export const Avatar = styled.img`
  color: ${({theme}) => theme.text.primary};
  order: 1;
  width: 134px;
  height: 134px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 25px;
  color: ${({theme}) => theme.text.light};
  ${({theme}) => theme.mediaQueriesMax.sm} {
    font-size: 12px;
    line-height: 14px;
    order: 5;
    padding: 5px 0 5px 16px;
    color: ${({theme}) => theme.text.gray};
  }
`;

export const Tab = styled.button<IStyleProps>`
  display: ${({isMobile}) => (isMobile ? 'none' : 'block')};
  font-size: 16px;
  line-height: 22px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border-color: transparent;
  color: ${({theme, tabActive}) => (tabActive ? theme.text.primary : theme.text.light)};
  background-color: ${({theme, tabActive}) =>
    tabActive ? theme.background.primary_01 : 'transparent'};

  &:active {
    color: ${({theme}) => theme.text.primary};
    background-color: ${({theme}) => theme.background.primary_01};
  }
  ${({theme}) => theme.mediaQueries.sm} {
    padding: 14px 0 14px 10px;
    width: 200px;
  }
  ${({theme}) => theme.mediaQueries.lg} {
    padding-left: 40px;
    width: 234px;
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
