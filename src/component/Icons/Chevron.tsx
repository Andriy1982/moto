import React from 'react';

import {TIconProps} from './type';

export const ChevronIcon: React.FC<TIconProps> = ({size, fill, ...props}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 19 9" fill="none" {...props}>
      <path d="M1 8L9.5 2L18 8" stroke={fill as string} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
