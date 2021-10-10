import React from 'react';

import {TIconProps} from './type';

export const NextIcon: React.FC<TIconProps> = ({size, fill, ...props}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 8 10" {...props}>
      <path d="M1 1L6 5L1 9" stroke={fill as string} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};
