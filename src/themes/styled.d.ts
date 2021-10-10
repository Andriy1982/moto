import {} from 'styled-components';
import {Pallete} from './palletes';
import {Media} from './mediaQueries';

interface CustomTheme extends Media, Pallete {}

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
