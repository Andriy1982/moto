import {combineReducers} from '@reduxjs/toolkit';

//types
import {AppState} from '@app/bus/app/types';
import {ThemesState} from '@app/bus/themes/types';
import {AuthState} from '@app/bus/auth/types';
import {UiState} from '@app/bus/ui/types';
import {UserState} from '@app/bus/user/types';
import {SosState} from '@app/bus/sos/types';
import {PartnerState} from '@app/bus/partner/types';
import {EventState} from '@app/bus/event/types';
//reducers
import {appReducer} from '@app/bus/app';
import {themesReducer} from '@app/bus/themes';
import {authReducer} from '@app/bus/auth';
import {uiReducer} from '@app/bus/ui';
import {userReducer} from '@app/bus/user';
import {sosReducer} from '@app/bus/sos';
import {partnerReducer} from '@app/bus/partner';
import {eventReducer} from '@app/bus/event';

const rootReducer = combineReducers({
  app: appReducer,
  themes: themesReducer,
  ui: uiReducer,
  auth: authReducer,
  user: userReducer,
  sos: sosReducer,
  partner: partnerReducer,
  event: eventReducer,
});

export type RootState = {
  app: AppState;
  themes: ThemesState;
  ui: UiState;
  auth: AuthState;
  user: UserState;
  sos: SosState;
  partner: PartnerState;
  event: EventState;
};

export default rootReducer;
