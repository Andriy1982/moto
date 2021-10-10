import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components';
//app themes
import {MottoThemeContext, mottoThemes, MottoType, media} from '@app/themes';
import {dark} from '@app/themes/palletes';
//store
import {themesSelectors, themesActions} from '@app/bus/themes';
//@ts-ignore
import ReactBreakpoints from 'react-breakpoints';

export const ThemeLayout: React.FC = ({children}) => {
  const dispatch = useDispatch();
  const mottoType = useSelector(themesSelectors.getType);

  useEffect(() => {
    dispatch(themesActions.fetchTypeAsync());
  }, [dispatch]);

  return (
    <ThemeProvider theme={{...dark, ...media}}>
      <MottoThemeContext.Provider value={mottoThemes[mottoType] || mottoThemes[MottoType.urban]}>
        <ReactBreakpoints breakpoints={media.breakpointMap}>{children}</ReactBreakpoints>
      </MottoThemeContext.Provider>
    </ThemeProvider>
  );
};
