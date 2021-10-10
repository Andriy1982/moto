import React, {useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
//app
import {useDispatch, useSelector} from 'react-redux';
import {
  SignInPage,
  SignUpPage,
  ConfirmCodePage,
  ProfilePartnerPage,
  ProfileUserPage,
  PartnersPage,
  PartnerDetail,
  FeedbackPage,
  SosCreatePage,
  EventsPage,
  EventCreatePage,
  ResetPassword,
  ConfirmResetPassword,
} from '@app/pages';
import {authSelectors} from '@app/bus/auth';
import {userSelectors} from '@app/bus/user';
//local
import {Routes} from './types';
import {MainLayout} from '@app/layouts';
import {EventPage} from '@app/pages/EventPage/EventPage';
import {ProfilePage} from '@app/pages/ProfilePage/ProfilePage';
import {appActions, appSelectors} from '@app/bus/app';
import {SosPage} from '@app/pages/SosPage/SosPage';
import {ErrorPage} from '@app/pages/ErrorPage/ErrorPage';

export const Router = () => {
  const dispatch = useDispatch();

  const initialized = useSelector(appSelectors.getInitialize);
  const isAuthenticated = useSelector(authSelectors.getAuthenticated);
  const role = useSelector(userSelectors.getCurrentRole);

  useEffect(() => {
    if (!initialized) dispatch(appActions.bootstrapAsync());
  }, [initialized]);

  if (!initialized) return null;

  return (
    <Switch>
      <Route exact path={[Routes.LOGIN, Routes.REGISTER]}>
        {!isAuthenticated ? (
          <Switch>
            <Route exact path={Routes.LOGIN}>
              <SignInPage />
            </Route>
            <Route exact path={Routes.REGISTER}>
              <SignUpPage />
            </Route>
          </Switch>
        ) : (
          <Redirect to={Routes.PROFILE} />
        )}
      </Route>
      <Route exact path={Routes.CONFIRM_CODE}>
        <ConfirmCodePage />
      </Route>
      <Route exact path={Routes.RESTORE_PASSWORD}>
        <ResetPassword />
      </Route>
      <Route exact path={Routes.CONFIRM_RESET_PASSWORD}>
        <ConfirmResetPassword />
      </Route>
      <MainLayout>
        <Switch>
          <Route exact path={Routes.HOME}>
            <EventsPage />
          </Route>
          <Route exact path={Routes.EVENT_CREATE}>
            <EventCreatePage />
          </Route>
          <Route exact path={Routes.EVENT_DETAIL}>
            <EventPage />
          </Route>
          <Route exact path={[Routes.PARTNERS, Routes.PARTNERS_MAP]}>
            <PartnersPage />
          </Route>
          <Route exact path={Routes.PARTNERS_DETAIL}>
            <PartnerDetail />
          </Route>
          <Route exact path={Routes.SOS_CREATE}>
            <SosCreatePage />
          </Route>
          <Route exact path={Routes.SOS_DETAIL}>
            <SosPage />
          </Route>
          <Route exact path={Routes.USER}>
            <ProfilePage />
          </Route>
          <Route exact path={[Routes.PROFILE, Routes.FEEDBACK]}>
            {isAuthenticated ? (
              <Switch>
                <Route exact path={[Routes.PROFILE]}>
                  {role === 'user' && <ProfileUserPage />}
                  {role === 'partner' && <ProfilePartnerPage />}
                </Route>
                <Route exact path={Routes.FEEDBACK}>
                  <FeedbackPage />
                </Route>
              </Switch>
            ) : (
              <Redirect to={Routes.LOGIN} />
            )}
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </MainLayout>
    </Switch>
  );
};
