// import AsyncStorage from '@react-native-community/async-storage';

import type {Themes} from './namespace';

export const apiThemes = new (class Api {
  fetch() {
    return localStorage.getItem('theme');
  }

  change(theme: Themes.Theme) {
    return localStorage.setItem('theme', theme);
  }

  fetchType() {
    return localStorage.getItem('type');
  }

  changeType(type: Themes.Motto) {
    return localStorage.setItem('type', type);
  }
})();
