import {RootState} from '@app/store/rootReducer';

export const getTheme = (state: RootState) => state.themes.theme;
export const getType = (state: RootState) => state.themes.type;
