import React from 'react';

import {TIconProps} from './type';

export const EyeSlashIcon: React.FC<TIconProps> = ({size, fill, ...props}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 17 15" fill={fill as string} {...props}>
      <path d="M8.73909 9.1729C9.28029 9.1729 9.79932 8.95791 10.182 8.57522C10.5647 8.19254 10.7797 7.6735 10.7797 7.1323C10.7797 7.07254 10.777 7.01332 10.7719 6.95484L8.56163 9.16507C8.62011 9.17017 8.67914 9.1729 8.73909 9.1729ZM15.4935 0.820273L14.7151 0.0426575C14.6878 0.0153433 14.6507 0 14.6121 0C14.5735 0 14.5364 0.0153433 14.5091 0.0426575L12.5173 2.03498C11.4185 1.47345 10.1834 1.19268 8.81196 1.19268C5.31014 1.19268 2.69744 3.01647 0.973862 6.66405C0.904583 6.81075 0.868652 6.97097 0.868652 7.13321C0.868652 7.29544 0.904583 7.45567 0.973862 7.60236C1.66257 9.05301 2.49186 10.2157 3.46176 11.0905L1.5343 13.0173C1.50699 13.0446 1.49164 13.0816 1.49164 13.1203C1.49164 13.1589 1.50699 13.196 1.5343 13.2233L2.3121 14.0011C2.33943 14.0284 2.37649 14.0438 2.41513 14.0438C2.45377 14.0438 2.49083 14.0284 2.51816 14.0011L15.4935 1.02652C15.507 1.01298 15.5178 0.996908 15.5251 0.979213C15.5325 0.961518 15.5362 0.942551 15.5362 0.923397C15.5362 0.904242 15.5325 0.885275 15.5251 0.86758C15.5178 0.849886 15.507 0.83381 15.4935 0.820273ZM5.53242 7.1323C5.53237 6.57843 5.67578 6.03399 5.94868 5.55202C6.22159 5.07005 6.61467 4.66699 7.08965 4.38209C7.56462 4.09719 8.10529 3.94018 8.65899 3.92634C9.21268 3.91251 9.76052 4.04233 10.2491 4.30315L9.36329 5.18899C9.00604 5.07459 8.62418 5.06082 8.25962 5.14917C7.89505 5.23752 7.56187 5.42458 7.29662 5.68983C7.03137 5.95508 6.84431 6.28826 6.75596 6.65283C6.66761 7.01739 6.68139 7.39925 6.79578 7.7565L5.90994 8.64234C5.66135 8.17789 5.53165 7.6591 5.53242 7.1323Z" />
      <path d="M16.6499 6.66223C16.0086 5.31155 15.2452 4.21017 14.3599 3.35809L11.7337 5.98446C11.955 6.56314 12.0041 7.19355 11.8749 7.79952C11.7458 8.40548 11.4439 8.96109 11.0058 9.3992C10.5677 9.83731 10.0121 10.1392 9.40612 10.2683C8.80015 10.3975 8.16975 10.3484 7.59106 10.1271L5.36353 12.3546C6.39695 12.8328 7.54636 13.0719 8.81178 13.0719C12.3136 13.0719 14.9263 11.2481 16.6499 7.60054C16.7192 7.45385 16.7551 7.29363 16.7551 7.13139C16.7551 6.96915 16.7192 6.80893 16.6499 6.66223Z" />
    </svg>
  );
};
