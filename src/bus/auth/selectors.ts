import {RootState} from '@app/store/rootReducer';

export const getAuthenticated = (state: RootState) => state.auth.token;
export const getDeviceId = (state: RootState) => state.auth.deviceId;
