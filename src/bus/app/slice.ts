import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
// Local
import {types} from './types';
import type {AppActionTypes, AppState} from './types';

const initialState: AppState = {
  intro: false,
  initialize: false,
  categories: [],
  cities: [],
};

const slice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    saveIntro: (state: AppState, action: PayloadAction<boolean>) => {
      state.intro = action.payload;
    },
    saveCities: (state: AppState, action: PayloadAction<string[]>) => {
      state.cities = action.payload;
    },
    saveCategories: (state: AppState, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    saveInitialize: (state: AppState, action: PayloadAction<boolean>) => {
      state.initialize = action.payload;
    },
  },
});

export default slice.reducer;

// Action Creators Async
export const appActions = {
  // Save
  ...slice.actions,
  // Async
  fetchIntroAsync: (): AppActionTypes => ({
    type: types.FETCH_INTRO,
  }),
  fetchCategoriesAsync: (): AppActionTypes => ({
    type: types.FETCH_CATEGORIES,
  }),
  fetchCitiesAsync: (): AppActionTypes => ({
    type: types.FETCH_CITIES,
  }),
  changeIntroAsync: (payload: boolean): AppActionTypes => ({
    type: types.CHANGE_INTRO,
    payload,
  }),
  bootstrapAsync: (): AppActionTypes => ({
    type: types.BOOTSTRAP,
  }),
};
