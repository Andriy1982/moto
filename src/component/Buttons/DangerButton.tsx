import React from 'react';
//style
import {DangerButtonStyle, IStyleProps} from './Buttons.style';

type TProps = {
  children: string;
  loading?: boolean;
  type?: any;
  onClick?: () => void;
} & IStyleProps;

export const DangerButton: React.FC<TProps> = ({children, type, marginTop, onClick}: TProps) => {
  return (
    <DangerButtonStyle marginTop={marginTop} onClick={onClick} type={type}>
      {children}
    </DangerButtonStyle>
  );
};
