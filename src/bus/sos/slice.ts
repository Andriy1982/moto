import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
// Local
import {types} from './types';
import type {SosActionTypes, SosState} from './types';
import type {Sos} from './namespace';
import {Ui} from '../ui';

const initialState: SosState = {
  current: null,
  items: [],
  detail: null,
};

const slice = createSlice({
  name: 'Sos',
  initialState,
  reducers: {
    saveItems: (state: SosState, action: PayloadAction<Sos.ResFetchItems>) => {
      const newItems = action.payload.list.filter((item) => {
        const index = state.items.findIndex((stateItem) => stateItem.id === item.id);
        return index === -1;
      });

      state.items = [...state.items, ...newItems];
    },
    deleteItems: (state: SosState, action: PayloadAction<string[]>) => {
      if (action.payload.length > 0)
        state.items = state.items.filter((item) => !action.payload.includes(item.id));
    },
    clearItems: (state: SosState) => {
      state.items = [];
    },
    saveCurrent: (state: SosState, action: PayloadAction<Sos.ResCreate | null>) => {
      state.current = action.payload;
    },
    saveDetail: (state: SosState, action: PayloadAction<Sos.Signal>) => {
      state.detail = action.payload;
    },
    clearDetail: (state: SosState) => {
      state.detail = null;
    },
    changeSate: (state: SosState, action: PayloadAction<string[]>) => {
      if (state.detail) {
        state.detail = {
          ...state.detail,
          responderIds: action.payload,
        };
      }
    },
  },
});

export default slice.reducer;

// Action Creators Async
export const sosActions = {
  // Save
  ...slice.actions,
  // Async
  fetchItemsAsync: (payload: Sos.ReqFetchItems): SosActionTypes => ({
    type: types.FETCH_ITEMS,
    payload,
  }),
  deleteItemsAsync: (payload: Sos.ReqFetchItems): SosActionTypes => ({
    type: types.DELETED_ITEMS,
    payload,
  }),
  fetchCurrentAsync: (payload: Sos.ReqFetchDetailParams): SosActionTypes => ({
    type: types.FETCH_ITEM,
    payload,
  }),
  fetchDetailAsync: (payload: string): SosActionTypes => ({
    type: types.FETCH_DETAIL,
    payload,
  }),
  createAsync: (payload: Sos.ReqCreateData & Ui.Callback): SosActionTypes => ({
    type: types.CREATE_ITEM,
    payload,
  }),
  changeAsync: (payload: Sos.ReqChangeData & Ui.Callback): SosActionTypes => ({
    type: types.CHANGE_ITEM,
    payload,
  }),
  deleteAsync: (payload: Sos.ReqDeleteParams & Ui.Callback): SosActionTypes => ({
    type: types.DELETE_ITEM,
    payload,
  }),
  changeStateAsync: (payload: Sos.ReqChangeStateData): SosActionTypes => ({
    type: types.CHANGE_STATE,
    payload,
  }),
};
