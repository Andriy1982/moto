import {RootState} from '@app/store/rootReducer';

export const getItems = (state: RootState) => state.event.items;
export const getDetail = (state: RootState) => state.event.detail;
export const getCount = (state: RootState) => state.event.count;
