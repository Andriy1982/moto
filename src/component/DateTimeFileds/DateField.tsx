import React from 'react';
import DatePicker from 'react-datepicker';
import {Container, Label, Input, InputWrapper, Span} from './styled';
import 'react-datepicker/dist/react-datepicker.css';

//app
import {TIconNames} from '@app/component/Icons';
import {IconButton} from '../Buttons';
import {TColorsIcon} from '@app/themes';

type TIcon = {
  size?: number;
  name: TIconNames;
  color: keyof TColorsIcon;
  onPress?: () => void;
};

type TProps = {
  label?: string;
  placeholder?: string;
  value?: Date | null;
  error?: string;
  inputWrapStyle?: React.CSSProperties;
  iconRight?: TIcon;
  iconLeft?: TIcon;
  onChange: (v: Date | null) => void;
};

export const DateField: React.FC<TProps> = ({
  placeholder,
  value,
  error,
  label,
  inputWrapStyle,
  iconRight,
  iconLeft,
  onChange,
}) => {
  return (
    <Container>
      {label && <Label error={!!error}>{label}</Label>}
      <InputWrapper error={!!error} style={inputWrapStyle}>
        <DatePicker
          selected={value}
          onChange={onChange}
          placeholderText={placeholder}
          customInput={<Input />}
          dateFormat="dd.MM.yyyy"
          showPopperArrow={false}
        />
        {iconRight && <IconButton {...iconRight} />}
        {iconLeft && <IconButton iconLeft={!!iconLeft} {...iconLeft} />}
        {error && <Span>{error}</Span>}
      </InputWrapper>
    </Container>
  );
};
