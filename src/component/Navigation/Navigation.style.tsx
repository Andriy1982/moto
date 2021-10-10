import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const activeClassName = 'nav-item-active';

export const Menu = styled.menu`
  display: flex;
  flex-direction: column;
  ${({theme}) => theme.mediaQueries.sm} {
    padding-top: 20px;
  }
`;

export const Title = styled.h2`
  display: none;
  margin-bottom: 48px;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: ${({theme}) => theme.text.default};
  text-align: center;
  ${({theme}) => theme.mediaQueries.sm} {
    display: initial;
  }
`;

export const Nav = styled.nav`
  display: flex;
  border: 1px solid ${({theme}) => theme.border.gray};
  border-bottom: none;
  border-radius: 30px 30px 0 0;
  background-color: ${({theme}) => theme.background.dark};

  ${({theme}) => theme.mediaQueries.sm} {
    border: none;
    width: 100%;
    height: 100%;
    display: initial;
  }
`;

export const List = styled.ul`
  flex: 1 1 auto;
  display: flex;
  justify-content: space-around;
  ${({theme}) => theme.mediaQueries.sm} {
    flex-direction: column;
  }
`;

export const Item = styled.li`
  margin-top: 13px;
  margin-bottom: 13px;
  display: flex;
  flex: 1 1 100%;
  justify-content: center;

  ${({theme}) => theme.mediaQueries.sm} {
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 46px;
    }
  }
`;

const getLinkTransition = (property: 'fill' | 'color') =>
  `transition: ${property} 0.4s ease-in-out;`;

export const StyledNavLinkTitle = styled(NavLink)`
  text-align: center;
`;

export const StyledNavLink = styled(NavLink).attrs({activeClassName})`
  svg path {
    ${getLinkTransition('fill')}
    fill: ${({theme}) => theme.icon.gray};
  }

  svg {
    width: 20px;
    height: 20px;
    margin-bottom: 7px;

    ${({theme}) => theme.mediaQueries.sm} {
      width: 35px;
      height: 35px;
      margin-bottom: 10px;
    }
  }

  span {
    ${getLinkTransition('color')}
    color: ${({theme}) => theme.text.light};
    text-align: center;
    font-size: 10px;
    line-height: 12px;
    ${({theme}) => theme.mediaQueries.sm} {
      font-size: 14px;
      line-height: 16px;
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &:hover {
    svg path {
      fill: ${({theme}) => theme.icon.primary};
    }
    span {
      color: ${({theme}) => theme.text.primary};
    }
  }

  &.${activeClassName} {
    svg path {
      fill: ${({theme}) => theme.icon.primary};
    }
    span {
      color: ${({theme}) => theme.text.primary};
    }
  }
`;
