import React from 'react';

import {Icons, TIconNames} from '@app/component/Icons';
import {TColorsIcon} from '@app/themes/';
import {useTheme} from '@app/hooks';

import {FilterButtonStyle} from './FilterButton.style';

interface FilterButtonProps {
  text: string;
  icon?: TIconNames;
  size?: number;
  color?: keyof TColorsIcon;
  onClick?: () => void;
}
const FilterButton: React.FC<FilterButtonProps> = ({
  text,
  icon = 'partner',
  size = 20,
  color = 'default',
  onClick,
}: FilterButtonProps) => {
  const {pallete} = useTheme();
  const Component = Icons.get(icon);
  return (
    <FilterButtonStyle onClick={onClick}>
      {Component && (
        <div>
          <Component size={size} fill={pallete.icon[color]} />
        </div>
      )}
      <div>{text}</div>
    </FilterButtonStyle>
  );
};

export default FilterButton;
