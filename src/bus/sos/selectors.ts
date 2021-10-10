import {RootState} from '@app/store/rootReducer';

export const getCurrent = (state: RootState) => state.sos.current;
export const getItems = (state: RootState) => state.sos.items;
export const getDetail = (state: RootState) => state.sos.detail;
