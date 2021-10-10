import React from 'react';

import {TIconProps} from './type';

export const BackIcon: React.FC<TIconProps> = ({size, fill, ...props}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill={fill as string} {...props}>
      <path d="M21.3333 9.33333H5.10667L12.56 1.88L10.6667 0L0 10.6667L10.6667 21.3333L12.5467 19.4533L5.10667 12H21.3333V9.33333Z" />
    </svg>
  );
};
