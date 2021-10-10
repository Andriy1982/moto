import React from 'react';
import {User} from '@app/bus/user';

import {IconComponent as Icon} from '@app/component/IconComponents';

import {List, Item, Image, Input, Label, CloseButton} from './MultiPhotoFiled.style';

type TProps = {
  items: User.Avatar[];
  onChange: (data: any) => void;
  onDelete?: (uri: string) => void;
};

export const MultiPhotoFiled: React.FC<TProps> = ({items, onChange, onDelete}: TProps) => {
  const onItemPress = (uri: string) => {
    if (onDelete) onDelete(uri);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // handle validations
    const file = e.currentTarget.files && e.currentTarget.files;
    file && onChange(file);
  };

  return (
    <List>
      {items.map((item) => (
        <Item key={item.thumb}>
          <Image src={item.thumb}></Image>
          <CloseButton onClick={() => onItemPress(item.original)}>
            <Icon color="gray" name="close" size={42} />
          </CloseButton>
        </Item>
      ))}
      <Item>
        <Label>
          <Input multiple type="file" onChange={handleFileInput} accept=".jpg, .jpeg, .png" />
          <Icon color="gray" name="plus-circle-2" size={42} />
        </Label>
      </Item>
    </List>
  );
};
