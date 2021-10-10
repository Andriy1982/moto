import React from 'react';

//style
import {Label, InputWrapper, Switch, Description} from './SwitchFiled.style';

type TProps = {
  onChange: (v: boolean) => void;
  label?: string;
  value: boolean;
  textColour?: boolean;
};

const SwitchField: React.FC<TProps> = ({label, onChange, value, textColour}: TProps) => {
  const handleChange = () => {
    onChange(!value);
  };

  return (
    <InputWrapper>
      {label && <Description textColour={textColour}>{label}</Description>}
      <Switch isChecked={value} onClick={handleChange}>
        <Label isChecked={value}></Label>
      </Switch>
    </InputWrapper>
  );
};

export default SwitchField;
