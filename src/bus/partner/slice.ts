import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
// Local
import {types} from './types';
import type {PartnerActionTypes, PartnerState} from './types';
import type {Partner} from './namespace';
import {User} from '../user';

const initialState: PartnerState = {
  items: [],
  mapItems: [],
  skip: 0,
  count: 0,
  init: false,
  detail: null,
};

const slice = createSlice({
  name: 'Partner',
  initialState,
  reducers: {
    saveItems: (state: PartnerState, action: PayloadAction<Partner.ResFetchItems>) => {
      state.count = action.payload.count;
      state.skip = action.payload.skip;
      if (action.payload.skip !== 0) {
        state.items = [...state.items, ...action.payload.list];
      } else {
        state.items = action.payload.list;
      }
    },
    saveMapItems: (state: PartnerState, action: PayloadAction<Partner.Item[]>) => {
      const newItems = action.payload.filter((item) => {
        const index = state.mapItems.findIndex((stateItem) => stateItem.id === item.id);
        return index === -1;
      });

      state.mapItems = [...state.mapItems, ...newItems];
    },
    toggleInit: (state: PartnerState, action: PayloadAction<boolean>) => {
      state.init = action.payload;
    },
    saveDetail: (state: PartnerState, action: PayloadAction<User.Partner>) => {
      state.detail = action.payload;
    },
    clearDetail: (state: PartnerState) => {
      state.detail = null;
    },
  },
});

export default slice.reducer;

// Action Creators Async
export const partnerActions = {
  // Save
  ...slice.actions,
  // Async
  fetchItemsAsync: (payload: Partner.ReqFetchItems): PartnerActionTypes => ({
    type: types.FETCH_ITEMS,
    payload,
  }),
  fetchItemsMapAsync: (payload: Partner.ReqFetchItems): PartnerActionTypes => ({
    type: types.FETCH_ITEMS_MAP,
    payload,
  }),
  fetchDetailAsync: (payload: Partner.ReqFetchDetail): PartnerActionTypes => ({
    type: types.FETCH_DETAIL,
    payload,
  }),
};
