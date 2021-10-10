import React from 'react';

import pallete from '@app/themes/palletes/dark.pallete';

//style
import {List, Item} from './DropDownEmpty.style';

export type TPropsEmpty = {
  items: {
    value: string | number;
    label: string;
  }[];
  value?: string | number;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  onChange: (v: string | number) => void;
};

const DropDownEmpty: React.FC<TPropsEmpty> = ({
  value,
  items,
  onChange,
  isOpen,
  setIsOpen,
}: TPropsEmpty) => {
  const handleChange = (v: string | number) => {
    onChange(v);
    setIsOpen(false);
  };

  return (
    <List isOpen={isOpen}>
      {items.map((item, index) => (
        <Item
          key={`${index}`}
          onClick={() => handleChange(item.value)}
          style={{
            borderBottom: `1px solid ${index === items.length - 1 ? 'none' : pallete.text.gray}`,
            color: `${value === item.value ? pallete.text.default : pallete.text.gray}`,
          }}>
          {item.label}
        </Item>
      ))}
    </List>
  );
};

export default DropDownEmpty;
