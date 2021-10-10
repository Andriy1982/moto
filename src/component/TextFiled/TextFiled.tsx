import React from 'react';

//style
import {Label, Input, InputWrapper, Span, Container} from './TextFiled.style';

//app
import {TIconNames} from '@app/component/Icons';
import {IconButton} from '../Buttons';
import {TColorsIcon} from '@app/themes';

type TIcon = {
  size?: number;
  name: TIconNames;
  color?: keyof TColorsIcon;
  onPress?: () => void;
};

type TProps = {
  label?: string;
  value?: string | string[];
  name?: string;
  error?: string;
  type?: string;
  iconRight?: TIcon;
  iconLeft?: TIcon;
  isShowInput?: boolean;
  isShowLabel?: boolean;
  children?: any;
  placeholder?: string;
  onChange?: (...event: any[]) => void;
  inputWrapStyle?: React.CSSProperties;
};

const TextFiled: React.FC<TProps> = ({
  label,
  iconLeft,
  error,
  value,
  type,
  iconRight,
  placeholder,
  onChange,
  isShowInput,
  inputWrapStyle,
  isShowLabel,
}: TProps) => {
  return (
    <Container isShowInput={isShowInput}>
      {label && (
        <Label isShowLabel={isShowLabel} error={!!error}>
          {label}
        </Label>
      )}
      <InputWrapper error={!!error} isShowInput={isShowInput} style={inputWrapStyle}>
        <Input
          isShowInput={isShowInput}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          error={!!error}
          paddingLeft={!!iconLeft}
        />
        {iconRight && <IconButton color={iconRight.color || 'gray'} {...iconRight} />}
        {iconLeft && (
          <IconButton iconLeft={!!iconLeft} {...iconLeft} color={iconLeft.color || 'gray'} />
        )}
        {error && <Span>{error}</Span>}
      </InputWrapper>
    </Container>
  );
};

export default TextFiled;
