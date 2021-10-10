import React from 'react';

//app
import {Icons, TIconNames} from '@app/component/Icons';
import {TColorsIcon} from '@app/themes';
import {useTheme} from '@app/hooks';

export type TProps = {
  size?: number;
  name: TIconNames;
  color: keyof TColorsIcon;
};

export const IconComponent: React.FC<TProps> = ({size = 20, color, name}: TProps) => {
  const {pallete} = useTheme();
  const Component = Icons.get(name);

  if (Component) return <Component size={size} fill={pallete.icon[color]} />;
  return null;
};
