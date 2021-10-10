import React from 'react';

//app
import {Icons, TIconNames} from '@app/component/Icons';
import {TColorsIcon} from '@app/themes';
import {useTheme} from '@app/hooks';

//style
import {IconButtonStyle} from './Buttons.style';

type TProps = {
  size?: number;
  name: TIconNames;
  color: keyof TColorsIcon;
  onPress?: () => void;
  iconLeft?: boolean;
  iconTop?: boolean;
};

export const IconButton: React.FC<TProps> = ({
  size = 20,
  color,
  name,
  onPress,
  ...props
}: TProps) => {
  const {pallete} = useTheme();
  const Component = Icons.get(name);

  if (Component)
    return (
      <IconButtonStyle onClick={onPress} type="button" {...props}>
        <Component size={size} fill={pallete.icon[color]} />
      </IconButtonStyle>
    );
  return null;
};
