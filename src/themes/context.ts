import {createContext} from 'react';

//themes
import {Pallete} from './palletes';
import * as palletes from './palletes';
import {TIconNames} from '@app/component/Icons';

import SnowImage from './images/snowmobile.png';
import AtvImage from './images/atv.png';
import ChopperImage from './images/chopper.png';
import SportImage from './images/sport.png';
import UrbanImage from './images/urban.png';

export enum ThemesName {
  DARK = 'dark',
}

export enum Fonts {
  regular = 'Play-Regular',
  bold = 'Play-Bold',
}

type ThemesItem = {
  pallete: Pallete;
  name: ThemesName;
  fonts: typeof Fonts;
};

type Themes = {
  dark: ThemesItem;
};

export const themes: Themes = {
  dark: {
    pallete: palletes[ThemesName.DARK],
    name: ThemesName.DARK,
    fonts: Fonts,
  },
};

export enum MottoType {
  snowmobile = 'snowmobile',
  urban = 'urban',
  chopper = 'chopper',
  atv = 'atv',
  sport = 'sport',
}

export type MottoTheme = {
  icon: TIconNames;
  t: keyof typeof MottoType;
  source: string;
};

type Motto = Record<MottoType, MottoTheme>;

export const mottoThemes: Motto = {
  urban: {
    icon: 'moto',
    t: MottoType.urban,
    source: UrbanImage,
  },
  sport: {
    icon: 'moto',
    t: MottoType.sport,
    source: SportImage,
  },
  chopper: {
    icon: 'moto',
    t: MottoType.chopper,
    source: ChopperImage,
  },
  atv: {
    icon: 'atv',
    t: MottoType.atv,
    source: AtvImage,
  },
  snowmobile: {
    icon: 'snowmobile',
    t: MottoType.snowmobile,
    source: SnowImage,
  },
};

export const ThemeContext = createContext(themes[ThemesName.DARK]);

export const MottoThemeContext = createContext<MottoTheme>({
  icon: 'moto',
  t: MottoType.urban,
  source: UrbanImage,
});
