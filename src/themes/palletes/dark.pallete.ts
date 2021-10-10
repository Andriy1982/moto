import type {Pallete} from './types';

const WHITE = '#FFFFFF';
const GREEN = '#20D38F';
const GRAY_0 = '#828282';
const GRAY_1 = '#BDBDBD';
const GRAY_3 = '#8C8C8C';
const LIGHT_0 = '#F2F2F2';
const LIGHT_1 = '#E0E0E0';
const DARK_0 = '#4F4F4F';
const DARK_1 = '#28292B';
const DARK_2 = '#3D3E41';
const DANGER = '#ff6347';

const pallete: Pallete = {
  text: {
    default: WHITE,
    light: GRAY_1,
    light_01: LIGHT_0,
    gray: GRAY_0,
    dark: DARK_0,
    primary: GREEN,
    danger: DANGER,
    text: GRAY_3,
  },
  background: {
    default: DARK_1,
    primary: GREEN,
    primary_01: 'rgba(32, 211, 143, 0.1)',
    primary_04: 'rgba(32, 211, 143, 0.4)',
    gray: GRAY_0,
    light: LIGHT_1,
    light_0: LIGHT_0,
    darken: DARK_0,
    dark: DARK_2,
    danger: DANGER,
    socialButton: 'rgba(130, 130, 130, 0.3)',
  },
  icon: {
    gray: GRAY_1,
    light: GRAY_0,
    default: LIGHT_0,
    primary: GREEN,
    dark: DARK_1,
  },
  border: {
    default: LIGHT_1,
    light: LIGHT_0,
    gray: GRAY_0,
    dark: DARK_0,
    darken: DARK_1,
    danger: DANGER,
    lighten: GRAY_1,
    primary: GREEN,
  },
};

export default pallete;
