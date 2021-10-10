export enum types {
  //Async
  FETCH_INTRO = 'APP/FETCH_INTRO',
  END_FETCH_INTRO = 'APP/END_FETCH_INTRO',
  CHANGE_INTRO = 'APP/CHANGE_INTRO',
  BOOTSTRAP = 'APP/BOOTSTRAP',
  FETCH_CATEGORIES = 'APP/FETCH_CATEGORIES',
  END_FETCH_CATEGORIES = 'APP/END_FETCH_CATEGORIES',
  FETCH_CITIES = 'APP/FETCH_CITIES',
  END_FETCH_CITIES = 'APP/END_FETCH_CITIES',
}

// STATE

export type AppState = {
  intro: boolean;
  initialize: boolean;
  categories: string[];
  cities: string[];
};

// ASYNC

export type FetchIntroAsync = {
  type: typeof types.FETCH_INTRO;
};

export type ChangeIntroAsync = {
  type: typeof types.CHANGE_INTRO;
  payload: boolean;
};

export type BootstrapAsync = {
  type: typeof types.BOOTSTRAP;
};

export type FetchCitiesAsync = {
  type: typeof types.FETCH_CITIES;
};

export type FetchCategoriesAsync = {
  type: typeof types.FETCH_CATEGORIES;
};

export type AppActionTypes =
  | FetchIntroAsync
  | ChangeIntroAsync
  | BootstrapAsync
  | FetchCategoriesAsync
  | FetchCitiesAsync;
