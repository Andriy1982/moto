import {RootState} from '@app/store/rootReducer';

export const getCurrent = (state: RootState) => state.user.current;
export const getCurrentRole = (state: RootState) => state.user.current?.role || 'guest';

export const getDetail = (state: RootState) => state.user.detail;
export const getCurrentId = (state: RootState) => state.user.current?.id;
