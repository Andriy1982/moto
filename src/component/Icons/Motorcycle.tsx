import React from 'react';

import {TIconProps} from './type';

export const MotorcycleIcon: React.FC<TIconProps> = ({size, fill, ...props}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 23 13" fill={fill as string} {...props}>
      <path d="M18.4296 4.17861C17.8942 4.17534 17.384 4.25369 16.9061 4.40386L15.724 2.61163H18.6847C19.1625 2.61163 19.547 2.26232 19.547 1.82814V0.783489C19.547 0.349305 19.1625 0 18.6847 0H17.057C16.8127 0 16.5792 0.0946716 16.4175 0.257898L15.0701 1.61921L14.2509 0.378686C14.0928 0.14364 13.8126 0 13.5108 0H10.6364C10.3202 0 10.0615 0.235047 10.0615 0.522326V1.04465C10.0615 1.33193 10.3202 1.56698 10.6364 1.56698H13.0221L13.712 2.61163H8.18957C7.55361 1.85752 6.57632 1.30581 4.60018 1.30581H2.60607C2.12102 1.30581 1.71502 1.66491 1.72579 2.10563C1.73298 2.53002 2.11743 2.87279 2.58811 2.87279H4.60018C5.48046 2.87279 5.99066 3.22863 6.31762 3.6824L5.91162 4.35163C5.44453 4.22431 4.94511 4.16555 4.42772 4.18187C2.00964 4.26022 0.0586511 6.05898 0.00116344 8.25928C-0.0563243 10.613 2.02401 12.5358 4.60018 12.5358C6.7416 12.5358 8.54168 11.2039 9.05548 9.40187H12.0808C12.573 9.40187 12.9646 9.02971 12.9431 8.58247C12.8676 7.04487 13.5719 5.5236 14.9623 4.5018L15.4115 5.18082C14.4198 5.95451 13.791 7.10363 13.8018 8.38659C13.8198 10.6587 15.857 12.5162 18.3577 12.5358C20.9303 12.5587 23.0214 10.6587 22.9998 8.3213C22.9747 6.04919 20.9303 4.19493 18.4296 4.17861ZM4.60018 10.9688C3.01567 10.9688 1.72579 9.79688 1.72579 8.35721C1.72579 6.91755 3.01567 5.74558 4.60018 5.74558C4.75108 5.74558 4.90199 5.75538 5.0493 5.77823L3.55821 8.23969C3.24203 8.76202 3.65882 9.40187 4.31274 9.40187H7.23383C6.7883 10.3225 5.77508 10.9688 4.60018 10.9688ZM21.268 8.50085C21.189 9.82625 20.0105 10.897 18.5553 10.9656C16.899 11.0472 15.5228 9.84584 15.5228 8.35721C15.5228 7.6586 15.8247 7.02528 16.3169 6.55845L18.0918 9.24843C18.2535 9.49654 18.6092 9.57489 18.8823 9.42798L19.3745 9.16029C19.6476 9.01339 19.7338 8.6902 19.5721 8.44209L17.8259 5.80108C18.0128 5.76517 18.2032 5.74885 18.3972 5.74885C20.0356 5.74558 21.3543 6.9959 21.268 8.50085Z" />
    </svg>
  );
};