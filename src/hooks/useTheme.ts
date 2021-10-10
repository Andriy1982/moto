import {useContext} from 'react';
import {ThemeContext, MottoThemeContext} from '@app/themes';

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useMottoTheme = () => {
  return useContext(MottoThemeContext);
};
