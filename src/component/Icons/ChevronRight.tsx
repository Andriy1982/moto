import React from 'react';

import {TIconProps} from './type';

export const ChevronRightIcon: React.FC<TIconProps> = ({size, fill, ...props}) => {
  return (
    <svg width={(size / 8) * 13} height={size} viewBox="0 0 8 13" {...props}>
      <path
        d="M1 1L7 6.5L1 12"
        stroke={fill as string}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
