import React from 'react';

import {TIconProps} from './type';

export const GpIcon: React.FC<TIconProps> = ({size, fill, ...props}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={fill as string} {...props}>
      <path d="M15.545 6.55853C15.6383 7.09549 15.6848 7.63953 15.684 8.18453C15.684 10.6185 14.814 12.6765 13.3 14.0695H13.302C11.978 15.2925 10.158 16.0005 8 16.0005C5.87827 16.0005 3.84344 15.1577 2.34315 13.6574C0.842855 12.1571 0 10.1223 0 8.00053C0 5.8788 0.842855 3.84396 2.34315 2.34367C3.84344 0.843383 5.87827 0.000527887 8 0.000527887C9.98594 -0.0227305 11.9038 0.723361 13.352 2.08253L11.068 4.36653C10.2424 3.5795 9.1405 3.14852 8 3.16653C5.913 3.16653 4.14 4.57453 3.508 6.47053C3.17291 7.46403 3.17291 8.54002 3.508 9.53353H3.511C4.146 11.4265 5.916 12.8345 8.003 12.8345C9.081 12.8345 10.007 12.5585 10.725 12.0705H10.722C11.1389 11.7943 11.4955 11.4365 11.7704 11.0187C12.0452 10.6009 12.2325 10.1317 12.321 9.63953H8V6.55953H15.545V6.55853Z" />
    </svg>
  );
};
