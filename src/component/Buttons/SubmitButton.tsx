import React from 'react';

//style
import {SubmitButtonStyle, IStyleProps} from './Buttons.style';

type TProps = {
  text: string;
  type?: any;
  onClick?: () => void;
  loading?: boolean;
} & IStyleProps;

export const SubmitButton: React.FC<TProps> = ({
  text,
  loading = false,
  type,
  marginTop,
  onClick,
}: TProps) => {
  return (
    <SubmitButtonStyle marginTop={marginTop} onClick={onClick} type={type}>
      {loading ? 'Loading...' : text}
    </SubmitButtonStyle>
  );
};
