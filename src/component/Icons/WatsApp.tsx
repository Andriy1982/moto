import React from 'react';

import {TIconProps} from './type';

export const WatsAppIcon: React.FC<TIconProps> = ({size, fill, ...props}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill={fill as string} {...props}>
      <path d="M13.0033 0H12.9967C5.82888 0 0 5.8305 0 13C0 15.8438 0.9165 18.4795 2.47487 20.6196L0.85475 25.4491L5.85162 23.8518C7.90725 25.2135 10.3594 26 13.0033 26C20.1711 26 26 20.1679 26 13C26 5.83213 20.1711 0 13.0033 0ZM20.5676 18.3576C20.254 19.2433 19.0093 19.9778 18.0164 20.1923C17.3371 20.3369 16.4499 20.4523 13.4631 19.214C9.64275 17.6313 7.1825 13.7491 6.99075 13.4973C6.80713 13.2454 5.447 11.4416 5.447 9.57613C5.447 7.71063 6.39438 6.80225 6.77625 6.41225C7.08988 6.09213 7.60825 5.94588 8.1055 5.94588C8.26637 5.94588 8.411 5.954 8.541 5.9605C8.92288 5.97675 9.11462 5.9995 9.3665 6.60238C9.68013 7.358 10.4439 9.2235 10.5349 9.41525C10.6275 9.607 10.7201 9.867 10.5901 10.1189C10.4683 10.3789 10.361 10.4943 10.1692 10.7153C9.9775 10.9363 9.7955 11.1053 9.60375 11.3425C9.42825 11.5489 9.23 11.7699 9.451 12.1518C9.672 12.5255 10.4358 13.7719 11.5602 14.7729C13.0114 16.0648 14.1879 16.4775 14.6087 16.653C14.9224 16.783 15.2961 16.7521 15.5252 16.5084C15.8161 16.1948 16.1752 15.6748 16.5409 15.1629C16.8009 14.7956 17.1291 14.7501 17.4736 14.8801C17.8246 15.002 19.682 15.9201 20.0639 16.1103C20.4457 16.302 20.6976 16.393 20.7902 16.5539C20.8813 16.7148 20.8812 17.4704 20.5676 18.3576Z" />
    </svg>
  );
};
