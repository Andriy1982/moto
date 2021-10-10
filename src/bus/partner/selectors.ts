import {RootState} from '@app/store/rootReducer';

export const getItems = (state: RootState) => state.partner.items;
export const getMapItems = (state: RootState) => state.partner.mapItems;
export const getSkip = (state: RootState) => state.partner.skip;
export const getCount = (state: RootState) => state.partner.count;
export const getInit = (state: RootState) => state.partner.init;
export const getDetail = (state: RootState) => state.partner.detail;
