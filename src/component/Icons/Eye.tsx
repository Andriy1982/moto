import React from 'react';

import {TIconProps} from './type';

export const EyeIcon: React.FC<TIconProps> = ({size, fill, ...props}) => {
  return (
    <svg width={size} height={size} fill={fill as string} viewBox="0 0 15 12" {...props}>
      <path d="M5.50447 5.89286C5.50447 6.4298 5.70746 6.94475 6.06879 7.32442C6.43012 7.7041 6.92019 7.9174 7.43118 7.9174C7.94218 7.9174 8.43225 7.7041 8.79358 7.32442C9.15491 6.94475 9.3579 6.4298 9.3579 5.89286C9.3579 5.35592 9.15491 4.84097 8.79358 4.46129C8.43225 4.08162 7.94218 3.86832 7.43118 3.86832C6.92019 3.86832 6.43012 4.08162 6.06879 4.46129C5.70746 4.84097 5.50447 5.35592 5.50447 5.89286ZM14.9007 5.42649C13.2698 1.81666 10.8047 0 7.5 0C4.19361 0 1.73017 1.81666 0.0993382 5.4283C0.0339251 5.57384 0 5.7328 0 5.89376C0 6.05472 0.0339251 6.21368 0.0993382 6.35922C1.73017 9.96905 4.19533 11.7857 7.5 11.7857C10.8064 11.7857 13.2698 9.96905 14.9007 6.35742C15.0331 6.06458 15.0331 5.72475 14.9007 5.42649ZM7.43118 9.07428C5.75907 9.07428 4.40349 7.64987 4.40349 5.89286C4.40349 4.13585 5.75907 2.71144 7.43118 2.71144C9.1033 2.71144 10.4589 4.13585 10.4589 5.89286C10.4589 7.64987 9.1033 9.07428 7.43118 9.07428Z" />
    </svg>
  );
};
