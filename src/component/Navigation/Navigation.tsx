import React from 'react';
import {useTranslation} from 'react-i18next';
import {matchPath} from 'react-router';
//app
import {ReactComponent as Events} from '@assets/images/web/menu/events.svg';
import {ReactComponent as Sos} from '@assets/images/web/menu/sos.svg';
import {ReactComponent as Partners} from '@assets/images/web/menu/partners.svg';
import {ReactComponent as Profile} from '@assets/images/web/menu/profile.svg';
import {Routes} from '@app/routes';

//style
import {Nav, List, Item, StyledNavLink, StyledNavLinkTitle, Menu, Title} from './Navigation.style';

const Navigation: React.FC = () => {
  const {t} = useTranslation();
  const checkActiveHome = (match: any, location: any) => {
    if (match) return true;
    if (location && location.pathname) {
      const matched = matchPath(location.pathname, {
        path: [Routes.EVENT_DETAIL, Routes.SOS_DETAIL, Routes.USER],
        exact: true,
        strict: false,
      });

      if (matched) return true;
    }
    return false;
  };

  const checkActiveProfile = (match: any, location: any) => {
    if (match)
      if (location && location.pathname) {
        const matched = matchPath(location.pathname, {
          path: [Routes.USER],
          exact: true,
          strict: false,
        });

        if (matched) return false;

        return true;
      }
    return false;
  };
  return (
    <Menu>
      <StyledNavLinkTitle to="/">
        <Title>{t('app.name')}</Title>
      </StyledNavLinkTitle>
      <Nav>
        <List>
          <Item>
            <StyledNavLink to={Routes.HOME} exact isActive={checkActiveHome}>
              <Events />
              <span>{t('tabs.events')}</span>
            </StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink exact to={Routes.SOS_CREATE}>
              <Sos />
              <span>{t('tabs.sos')}</span>
            </StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to={Routes.PARTNERS}>
              <Partners />
              <span>{t('tabs.partners')}</span>
            </StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to={Routes.PROFILE} isActive={checkActiveProfile}>
              <Profile />
              <span>{t('tabs.profile')}</span>
            </StyledNavLink>
          </Item>
        </List>
      </Nav>
    </Menu>
  );
};

export default Navigation;
