import React from 'react';

import {TIconProps} from './type';

export const PhoneIcon: React.FC<TIconProps> = ({size, fill, ...props}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill={fill as string} {...props}>
      <path d="M9.99002 12.9999C7.34155 12.9964 4.80255 11.9407 2.9298 10.0643C1.05705 8.1878 0.00343288 5.64375 0 2.99003C0 2.19704 0.314388 1.43654 0.874003 0.875812C1.43362 0.315087 2.19262 7.42905e-05 2.98403 7.42905e-05C3.15162 -0.00120476 3.31892 0.014035 3.48353 0.0455736C3.64267 0.0691685 3.7991 0.108356 3.9506 0.162572C4.05715 0.20003 4.15209 0.264707 4.22604 0.350206C4.3 0.435705 4.35039 0.539065 4.37225 0.650065L5.26098 4.55001C5.28493 4.65587 5.28205 4.76605 5.25259 4.87051C5.22312 4.97496 5.16802 5.07036 5.09231 5.148C5.00798 5.239 5.0015 5.2455 4.20359 5.66149C4.84256 7.06603 5.96365 8.19396 7.36277 8.83994C7.78443 8.03396 7.79092 8.02746 7.88173 7.94296C7.95922 7.8671 8.05443 7.81189 8.15868 7.78237C8.26293 7.75285 8.37289 7.74996 8.47854 7.77396L12.3708 8.66445C12.478 8.68938 12.5771 8.74124 12.6588 8.81515C12.7405 8.88906 12.8021 8.98259 12.8378 9.08694C12.8926 9.24122 12.9338 9.39998 12.9611 9.56143C12.9872 9.72479 13.0002 9.88999 13 10.0554C12.988 10.845 12.6648 11.5978 12.1009 12.1495C11.5369 12.7011 10.7781 13.0068 9.99002 12.9999Z" />
    </svg>
  );
};