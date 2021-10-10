import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
// Local
import {types} from './types';
import type {ThemesActionTypes, ThemesState} from './types';
import type {Themes} from './namespace';
import {MottoType, ThemesName} from '@app/themes/';

const initialState: ThemesState = {
  theme: ThemesName.DARK,
  type: MottoType.urban,
};

const slice = createSlice({
  name: 'Themes',
  initialState,
  reducers: {
    changeTheme: (state: ThemesState, action: PayloadAction<Themes.Theme>) => {
      state.theme = action.payload;
    },
    changeType: (state: ThemesState, action: PayloadAction<Themes.Motto>) => {
      state.type = action.payload;
    },
  },
});

export default slice.reducer;

// Action Creators Async
export const themesActions = {
  // Change
  ...slice.actions,
  //Async
  fetchThemeAsync: (): ThemesActionTypes => ({
    type: types.FETCH_THEME,
  }),
  changeThemeAsync: (payload: Themes.Theme): ThemesActionTypes => ({
    type: types.CHANGE_THEME,
    payload,
  }),
  fetchTypeAsync: (): ThemesActionTypes => ({
    type: types.FETCH_TYPE_THEME,
  }),
  changeTypeAsync: (payload: Themes.Motto): ThemesActionTypes => ({
    type: types.CHANGE_TYPE_THEME,
    payload,
  }),
};
