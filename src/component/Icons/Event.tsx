import React from 'react';

import {TIconProps} from './type';

export const EventIcon: React.FC<TIconProps> = ({size, fill, ...props}) => {
  return (
    <svg
      width={(size * 20) / 21}
      height={size}
      viewBox="0 0 20 21"
      fill={fill as string}
      {...props}>
      <path d="M15.9084 3.885V0.875019C15.9084 0.39176 15.5353 0 15.075 0C14.6148 0 14.2417 0.39176 14.2417 0.875019V3.885C14.2417 4.36825 14.6148 4.76001 15.075 4.76001C15.5353 4.76001 15.9084 4.36825 15.9084 3.885Z" />
      <path d="M5.75652 3.885V0.875019C5.75652 0.39176 5.38341 0 4.92316 0C4.46295 0 4.08984 0.39176 4.08984 0.875019V3.885C4.08984 4.36825 4.46295 4.76001 4.92316 4.76001C5.38341 4.76001 5.75652 4.36825 5.75652 3.885Z" />
      <path d="M0 19.1924C0 20.15 0.740005 20.9312 1.656 20.9312H18.344C19.256 20.9312 20 20.15 20 19.1924V7.52478H0V19.1924ZM6.38001 12.9134C6.428 12.7622 6.552 12.653 6.70401 12.6278L8.732 12.317L9.64002 10.3892C9.70802 10.2422 9.84802 10.154 10 10.154C10.152 10.154 10.292 10.2422 10.356 10.3892L11.264 12.317L13.296 12.6278C13.448 12.653 13.572 12.7622 13.62 12.9134C13.664 13.0646 13.628 13.2326 13.516 13.346L12.048 14.8496L12.396 16.9706C12.42 17.1302 12.36 17.2898 12.236 17.3822C12.168 17.4368 12.084 17.462 12 17.462C11.936 17.462 11.872 17.4452 11.816 17.4116L10 16.412L8.18402 17.4116C8.04802 17.4872 7.884 17.4746 7.76401 17.3822C7.64001 17.2898 7.57601 17.1302 7.60399 16.9706L7.94803 14.8496L6.48 13.346C6.37201 13.2326 6.33202 13.0646 6.38001 12.9134Z" />
      <path d="M18.344 2.37976H16.708V3.88335C16.708 4.82837 15.976 5.60117 15.076 5.60117C14.176 5.60117 13.44 4.82837 13.44 3.88335V2.37976H6.556V3.88335C6.556 4.82837 5.82403 5.60117 4.92401 5.60117C4.02402 5.60117 3.28802 4.82837 3.28802 3.88335V2.37976H1.656C0.740005 2.37976 0 3.15677 0 4.11856V6.68476H20V4.11856C20 3.15677 19.256 2.37976 18.344 2.37976Z" />
    </svg>
  );
};
