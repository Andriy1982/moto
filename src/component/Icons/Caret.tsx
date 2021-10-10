import React from 'react';

import {TIconProps} from './type';

export const CaretIcon: React.FC<TIconProps> = ({size, fill, ...props}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 10 5" fill={fill as string} {...props}>
      <path d="M10 0L5 5L5.96244e-08 -1.19249e-07L10 0Z" />
    </svg>
  );
};
