import React from 'react';

import {TIconProps} from './type';

export const EmailIcon: React.FC<TIconProps> = ({size, fill, ...props}) => {
  return (
    <svg
      width={(size * 11) / 13}
      height={size}
      viewBox="0 0 13 11"
      fill={fill as string}
      {...props}>
      <path d="M13 2.9952V8.2875C13 8.82709 12.7936 9.34624 12.423 9.73845C12.0524 10.1307 11.5458 10.3662 11.0071 10.3968L10.8875 10.4H2.1125C1.57291 10.4 1.05376 10.1936 0.66155 9.82301C0.269338 9.45244 0.0337991 8.94582 0.00325007 8.4071L0 8.2875V2.9952L6.2738 6.2816C6.34359 6.31816 6.42121 6.33726 6.5 6.33726C6.57879 6.33726 6.6564 6.31816 6.7262 6.2816L13 2.9952ZM2.1125 1.53433e-08H10.8875C11.4111 -6.30595e-05 11.9161 0.194347 12.3045 0.545524C12.6929 0.8967 12.9371 1.37961 12.9896 1.9006L6.5 5.3001L0.0104 1.9006C0.0607902 1.4003 0.287982 0.934386 0.651137 0.586601C1.01429 0.238816 1.48959 0.0319715 1.9916 0.00325009L2.1125 1.53433e-08H10.8875H2.1125Z" />
    </svg>
  );
};