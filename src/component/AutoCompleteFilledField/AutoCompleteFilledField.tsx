import React, {useState, useCallback, useRef, useEffect} from 'react';
import {debounce} from 'lodash';

//app
import {DaDataService, ItemAddress} from '@app/services/daData';
import {TIconNames} from '@app/component/Icons';
import {IconButton} from '../Buttons';
import {TColorsIcon} from '@app/themes';
import pallete from '@app/themes/palletes/dark.pallete';

//style
import {
  Label,
  Input,
  InputWrapper,
  Span,
  Container,
} from '@app/component/TextFiled/TextFiled.style';
import {List, Item} from './AutoComplete.style';
//local

type DataType = {
  address: string;
  city: string;
  location: [number, number] | null;
};

type TIcon = {
  name: TIconNames;
  size: number;
  color?: keyof TColorsIcon;
  onPress?: () => void;
};

type TProps = {
  inputWrapStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  label?: string;
  isShowInput?: boolean;
  isShowLabel?: boolean;
  placeholder?: string;
  type?: string;
  value: string;
  error?: any;
  iconRight?: TIcon;
  iconLeft?: TIcon;
  radius?: number;
  onSelect: (data: DataType) => void;
};

export const AutoCompleteFilledField: React.FC<TProps> = ({
  label,
  isShowInput,
  isShowLabel,
  inputWrapStyle,
  placeholder,
  type,
  error,
  value,
  iconRight,
  iconLeft,
  radius = 0,
  onSelect,
  containerStyle,
}) => {
  const needSearch = useRef<boolean>(false);
  const [isInit, setIsInit] = useState(false);
  const [address, setAddress] = useState<string>(value);
  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState<ItemAddress[]>([]);

  const cardRef = useRef<any>(null);

  const onSelectItem = useCallback((item: ItemAddress) => {
    needSearch.current = false;
    setAddress(item.value);
    console.log(item.data.geo_lat, item.data.geo_lon);
    onSelect({
      address: item.value,
      city: item.data.city || item.data.region,
      location:
        item.data.geo_lat && item.data.geo_lon
          ? [parseFloat(item.data.geo_lat), parseFloat(item.data.geo_lon)]
          : null,
    });
    setVisible(false);
  }, []);

  useEffect(() => {
    setAddress(value);
  }, [value]);

  const onChangeAddress = useCallback(
    debounce(async (address: string) => {
      if (address) {
        try {
          const data = await DaDataService.fetchCoordinates(address);
          if (data) {
            setVisible(true);
            setItems(data);
          }
        } catch (error) {
          console.log('Error address fetch from DaData', error);
        }
      }
    }, 500),
    [radius, onSelectItem, isInit],
  );

  const handleChange = (v: string) => {
    if (!needSearch.current) needSearch.current = true;
    onChangeAddress(v);
    setAddress(v);
  };

  return (
    <Container
      style={{...containerStyle}}
      isShowInput={isShowInput}
      ref={cardRef}
      onFocus={() => setIsInit(true)}>
      {label && (
        <Label isShowLabel={isShowLabel} error={!!error}>
          {label}
        </Label>
      )}
      <InputWrapper
        error={!!error}
        isShowInput={isShowInput}
        style={{
          ...inputWrapStyle,
        }}>
        <Input
          isShowInput={isShowInput}
          value={address}
          onChange={(e) => handleChange(e.currentTarget.value)}
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
      {visible && items.length > 0 && (
        <List>
          {items.map((item, index) => (
            <Item
              key={item.value}
              onClick={() => onSelectItem(item)}
              style={{
                borderBottom: `1px solid ${
                  index === items.length - 1 ? 'none' : pallete.text.gray
                }`,
              }}>
              {item.value}
            </Item>
          ))}
        </List>
      )}
    </Container>
  );
};
