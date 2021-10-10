import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
// Local
import {types} from './types';
import type {DomainsActionTypes, DomainsState} from './types';
import type {Domain} from './namespace';

const initialState: DomainsState = {
  items: [],
  detail: null,
  count: 0,
  loading: false,
};

const slice = createSlice({
  name: 'DomainS',
  initialState,
  reducers: {
    saveItems: (state: DomainsState, action: PayloadAction<Domain.ResFetchItems>) => {
      state.items = action.payload.items;
      state.count = action.payload.count;
    },
    saveDetail: (state: DomainsState, action: PayloadAction<Domain.Detail>) => {
      state.detail = action.payload;
    },
    createItem: (state: DomainsState, action: PayloadAction<Domain.Item>) => {
      state.items = [action.payload, ...state.items];
      state.count++;
    },
    changeItem: (state: DomainsState, action: PayloadAction<Domain.Detail>) => {
      state.items = (state.items as Domain.Item[]).map((item) =>
        item.id === action.payload.id ? action.payload : item,
      );

      if (state.detail) {
        state.detail = action.payload;
      }
    },
    deleteItem: (state: DomainsState, action: PayloadAction<number>) => {
      state.items = (state.items as Domain.Item[]).filter((item) => item.id === action.payload);
    },
    clearDetail: (state: DomainsState) => {
      state.detail = null;
    },
    toggleLoading: (state: DomainsState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export default slice.reducer;

// Action Creators Async
export const domainActions = {
  // Save
  ...slice.actions,
  // Async
  fetchItemsAsync: (payload: Domain.ReqFetchItems): DomainsActionTypes => ({
    type: types.FETCH_ITEMS,
    payload,
  }),
  fetchDetailAsync: (payload: number): DomainsActionTypes => ({
    type: types.FETCH_DETAIL,
    payload,
  }),
  createAsync: (payload: Domain.ReqCreate): DomainsActionTypes => ({
    type: types.CREATE_ITEM,
    payload,
  }),
  changeAsync: (payload: Domain.ReqChange): DomainsActionTypes => ({
    type: types.CHANGE_ITEM,
    payload,
  }),
  deleteAsync: (payload: number): DomainsActionTypes => ({
    type: types.DELETE_ITEM,
    payload,
  }),
};
