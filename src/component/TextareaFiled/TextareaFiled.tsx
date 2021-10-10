import React from 'react';

//style
import {Label, Textarea, InputWrapper, Span, Container} from './TextareaFiled.style';

type TProps = {
  label?: string;
  value?: string | string[];
  name?: string;
  error?: string;
  isShowLabel?: boolean;
  children?: any;
  placeholder?: string;
  onChange?: (...event: any[]) => void;
  inputWrapStyle?: React.CSSProperties;
};

export const TextareaFiled: React.FC<TProps> = ({
  label,
  error,
  value,
  placeholder,
  onChange,
  inputWrapStyle,
  isShowLabel,
}: TProps) => {
  return (
    <Container>
      {label && (
        <Label isShowLabel={isShowLabel} error={!!error}>
          {label}
        </Label>
      )}
      <InputWrapper error={!!error} style={inputWrapStyle}>
        <Textarea value={value} onChange={onChange} placeholder={placeholder} error={!!error} />
        {error && <Span>{error}</Span>}
      </InputWrapper>
    </Container>
  );
};
