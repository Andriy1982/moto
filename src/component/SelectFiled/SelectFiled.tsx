import React from 'react';
import Select from 'react-select';

//style
import {InputWrapper, Description, colourStyles} from './SelectFiled.style';

type TProps = {
  onChange: (v: string | number) => void;
  description?: string;
  value?: number | string;
  items: {
    value: string | number;
    label: string;
  }[];
};

const SelectField: React.FC<TProps> = ({description, onChange, value, items}: TProps) => {
  const label = items.find((item) => item.value === value);
  const handleChange = (v: number | string) => {
    onChange(v);
  };

  return (
    <InputWrapper>
      {description && <Description>{description}</Description>}
      <Select
        defaultValue={label}
        onChange={(e: any) => handleChange(e?.value)}
        width="200px"
        menuColor="red"
        options={items}
        styles={colourStyles}
      />
    </InputWrapper>
  );
};

export default SelectField;
