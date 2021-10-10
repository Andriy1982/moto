import React from 'react';

import {TIconProps} from './type';

export const FbCircleIcon: React.FC<TIconProps> = ({size, fill, ...props}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill={fill as string} {...props}>
      <path d="M13.0001 0C5.82041 0 0 5.82041 0 13.0001C0 19.4394 4.68678 24.7722 10.8319 25.8049V15.7122H7.69593V12.0803H10.8319V9.40226C10.8319 6.29495 12.7298 4.60164 15.5021 4.60164C16.8299 4.60164 17.971 4.70058 18.3022 4.74416V7.99213L16.3794 7.99306C14.872 7.99306 14.5814 8.70921 14.5814 9.76049V12.0784H18.1782L17.709 15.7104H14.5814V25.8918C21.0135 25.1089 26 19.6402 26 12.9964C26 5.82041 20.1796 0 13.0001 0Z" />
    </svg>
  );
};
