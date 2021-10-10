import type {Themes} from './namespace';

export enum types {
  //Async
  CHANGE_THEME = 'THEMES/CHANGE_THEME',
  FETCH_THEME = 'THEMES/FETCH_THEME',
  CHANGE_TYPE_THEME = 'THEMES/CHANGE_TYPE_THEME',
  FETCH_TYPE_THEME = 'THEMES/FETCH_TYPE_THEME',
}

// STATE

export type ThemesState = {
  theme: Themes.Theme;
  type: Themes.Motto;
};

export type ChangeAsync = {
  type: typeof types.CHANGE_THEME;
  payload: Themes.Theme;
};

export type FetchAsync = {
  type: typeof types.FETCH_THEME;
};

export type ChangeTypeAsync = {
  type: typeof types.CHANGE_TYPE_THEME;
  payload: Themes.Motto;
};

export type FetchTypeAsync = {
  type: typeof types.FETCH_TYPE_THEME;
};

export type ThemesActionTypes = FetchAsync | ChangeAsync | ChangeTypeAsync | FetchTypeAsync;
