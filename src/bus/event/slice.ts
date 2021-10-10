import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
// Local
import {types} from './types';
import type {EventActionTypes, EventState} from './types';
import type {Event} from './namespace';
import {Ui} from '../ui';

const initialState: EventState = {
  items: [],
  detail: null,
  skip: 0,
  limit: 10,
  count: 0,
};

const slice = createSlice({
  name: 'Event',
  initialState,
  reducers: {
    saveItems: (state: EventState, action: PayloadAction<Event.ResFetchItems>) => {
      const newItems = action.payload.list.filter((item) => {
        const index = state.items.findIndex((stateItem) => stateItem.id === item.id);
        return index === -1;
      });

      state.items = [...state.items, ...newItems];
    },
    deleteItems: (state: EventState, action: PayloadAction<string[]>) => {
      state.items = state.items.filter((item) => !action.payload.includes(item.id));
    },
    clearItems: (state: EventState) => {
      state.items = [];
    },
    saveDetail: (state: EventState, action: PayloadAction<Event.Item>) => {
      state.detail = action.payload;
    },
    clearDetail: (state: EventState) => {
      state.detail = null;
    },
    changeSate: (state: EventState, action: PayloadAction<string[]>) => {
      if (state.detail) {
        state.detail = {
          ...state.detail,
          participantIds: action.payload,
        };
      }
    },
  },
});

export default slice.reducer;

// Action Creators Async
export const eventActions = {
  // Save
  ...slice.actions,
  // Async
  fetchItemsAsync: (payload: Event.ReqFetchItems): EventActionTypes => ({
    type: types.FETCH_ITEMS,
    payload,
  }),
  deleteItemsAsync: (payload: Event.ReqFetchItems): EventActionTypes => ({
    type: types.DELETED_ITEMS,
    payload,
  }),
  fetchDetailAsync: (payload: string): EventActionTypes => ({
    type: types.FETCH_DETAIL,
    payload,
  }),
  createAsync: (payload: Event.ReqCreateData & Event.CreateCallbacks): EventActionTypes => ({
    type: types.CREATE_ITEM,
    payload,
  }),
  changeStateAsync: (payload: Event.ReqChangeStateData): EventActionTypes => ({
    type: types.CHANGE_STATE,
    payload,
  }),
  deleteAsync: (payload: Event.ReqDeleteData & Ui.Callback): EventActionTypes => ({
    type: types.DELETE_ITEM,
    payload,
  }),
};
