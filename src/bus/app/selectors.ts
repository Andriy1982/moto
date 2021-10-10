import {RootState} from '@app/store/rootReducer';

export const getIntro = (state: RootState) => state.app.intro;
export const getInitialize = (state: RootState) => state.app.initialize;
export const getCategories = (state: RootState) => state.app.categories;
export const getCities = (state: RootState) => state.app.cities;
