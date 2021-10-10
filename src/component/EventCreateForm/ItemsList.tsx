import React from 'react';
import {ItemAddress2} from '@app/services/daData';
import {ListItem, List} from './styled';
export const ItemsList = ({
  items,
  onSelect,
}: {
  items: ItemAddress2[];
  onSelect: (item: ItemAddress2) => void;
}) => {
  return (
    <List>
      {items.map((item) => (
        <ListItem type="button" onClick={() => onSelect(item)} key={item.value}>
          {item.value}
        </ListItem>
      ))}
    </List>
  );
};
