import React from 'react';

//style
import {OutlineButtonStyle, IStyleProps} from './Buttons.style';

type TProps = {
  type?: any;
  loading?: boolean;
  onClick?: () => void;
} & IStyleProps;

export const OutlineButton: React.FC<TProps> = ({
  children,
  loading = false,
  type,
  marginTop,
  onClick,
}) => {
  return (
    <OutlineButtonStyle marginTop={marginTop} onClick={onClick} type={type}>
      {loading ? 'Loading...' : children}
    </OutlineButtonStyle>
  );
};
