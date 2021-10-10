import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
// Local
import {types, UserActionTypes} from './types';
import type {UserState} from './types';
import type {User} from './namespace';

const initialState: UserState = {
  current: null,
  detail: null,
};

const slice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    saveCurrent: (state: UserState, action: PayloadAction<User.User | User.Partner | null>) => {
      state.current = action.payload;
    },
    saveDetail: (state: UserState, action: PayloadAction<User.User>) => {
      state.detail = action.payload;
    },
    clearDetail: (state: UserState) => {
      state.detail = null;
    },
  },
});

export default slice.reducer;

// Action Creators Async
export const userActions = {
  // Save
  ...slice.actions,
  // Async
  fetchCurrentUserLocalAsync: (): UserActionTypes => ({
    type: types.FETCH_CURRENT_USER_LOCAL,
  }),
  createCurrentUserLocalAsync: (payload: User.User | User.Partner | null): UserActionTypes => ({
    type: types.CREATE_CURRENT_USER_LOCAL,
    payload,
  }),
  changeAsync: (payload: User.PayloadChangeUser | User.PayloadChangePartner): UserActionTypes => ({
    type: types.CHANGE_USER,
    payload,
  }),
  deletePhotoAsync: (payload: string) => ({
    type: types.DELETE_PHOTO,
    payload,
  }),
  fetchDetailUser: (payload: string) => ({
    type: types.FETCH_DETAIL,
    payload,
  }),
  registerFCMAsync: (payload: string) => ({
    type: types.REGISTER_FCM,
    payload,
  }),
};
