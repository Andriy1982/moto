import React, {ChangeEventHandler} from 'react';

//style
import {Label, Input, InputWrapper, Span, Container, MaskedInput} from './OutlineFiled.style';

//app
import {TIconNames} from '../Icons';
import {IconButton} from '../Buttons';

type TIcon = {
  name: TIconNames;
  onPress?: () => void;
};

type TProps = {
  label: string;
  value?: number | string;
  onChange?: ChangeEventHandler;
  name: string;
  error?: string;
  type?: string;
  iconRight?: TIcon;
  children?: any;
  mask?: string;
  getRaw?: (v?: string) => string;
  ref: React.Ref<any | null>;
};

const OutlineField: React.ForwardRefExoticComponent<TProps> = React.forwardRef(
  ({label, error, value, onChange, type, iconRight, mask, getRaw}, ref) => {
    const renderInput = () => {
      if (mask) {
        return (
          <MaskedInput
            ref={ref}
            type={type}
            placeholder=""
            value={value}
            onChange={(e) => {
              if (onChange) {
                if (getRaw && typeof getRaw === 'function') {
                  onChange(getRaw(e.target.value) as any);
                } else {
                  onChange(e);
                }
              }
            }}
            mask={mask}
          />
        );
      } else {
        return <Input ref={ref} type={type} error={!!error} value={value} onChange={onChange} />;
      }
    };

    return (
      <Container>
        <Label error={!!error}>{label}</Label>
        <InputWrapper error={!!error}>
          {renderInput()}
          {iconRight && <IconButton {...iconRight} color="gray" size={20} />}
        </InputWrapper>
        {error && <Span>{error}</Span>}
      </Container>
    );
  },
);

OutlineField.displayName = 'OutlineField';

export default OutlineField;
