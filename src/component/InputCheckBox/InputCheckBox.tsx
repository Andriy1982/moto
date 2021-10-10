import React from 'react';
import {CheckMark, Container, Input, Name} from './InputCheckBox.style';

type TInputCheckBoxProps = {
  value: string;
  getFilter: (filter: string) => void;
  checked: boolean;
};

export const InputCheckBox: React.FC<TInputCheckBoxProps> = ({
  value,
  getFilter,
  checked,
}: TInputCheckBoxProps) => {
  const handleChange = () => {
    getFilter(value);
  };
  return (
    <div>
      <Container>
        <Name>{value}</Name>
        <Input type="checkbox" checked={checked} onChange={handleChange} />
        <CheckMark />
      </Container>
    </div>
  );
};
