import {createSlice} from '@reduxjs/toolkit';
// Local
import {types} from './types';
import type {SupportActionTypes, SupportState} from './types';
import type {Support} from './namespace';
import {Ui} from '../ui';

const initialState: SupportState = {};

const slice = createSlice({
  name: 'Support',
  initialState,
  reducers: {},
});

export default slice.reducer;

// Action Creators Async
export const supportActions = {
  // Save
  ...slice.actions,
  // Async
  createAsync: (payload: Support.ReqDataCreate & Ui.Callback): SupportActionTypes => ({
    type: types.CREATE_ITEM,
    payload,
  }),
};
