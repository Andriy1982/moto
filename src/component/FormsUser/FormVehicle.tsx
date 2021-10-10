import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Controller} from 'react-hook-form';

//app
import TextFiled from '@app/component/TextFiled';
import DropDownEmpty from '@app/component/DropDownEmpty';

//style
import {Form, ButtonWrap, Button, List, Item} from './ProfileUser.style';

type TProps = {
  control: any;
  errors?: any;
  garageFields: any;
  appendGarageField?: any;
  removeGarageField?: any;
  handleChange: any;
  handleSubmit: (onChange: (v: any) => void) => (v: any) => void;
};

export const FormVehicle: React.FC<TProps> = ({
  control,
  errors,
  garageFields,
  appendGarageField,
  removeGarageField,
  handleChange,
  handleSubmit,
}: TProps) => {
  const {t} = useTranslation();

  const onSubmit = (data: any) => {
    console.log('Data', data);
    // console.log('User', user);
    // dispatch(eventActions.createAsync(data));
    // reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <List>
        {garageFields.map((filed: any, index: number) => (
          <Item key={filed.id}>
            <Controller
              name={`garage.${index}.icon`}
              control={control}
              defaultValue={filed.icon}
              render={({field: {onChange, value}}) => {
                const [openDropdown, setOpenDropdown] = useState(false);
                return (
                  <>
                    <TextFiled
                      inputWrapStyle={{
                        height: '100%',
                        borderRight: 'none',
                        borderTopRightRadius: '0',
                        borderBottomRightRadius: '0',
                        justifyContent: 'center',
                      }}
                      isShowInput={true}
                      iconLeft={{
                        name: value,
                        size: 23,
                        onPress: () => setOpenDropdown(true),
                      }}
                      error={errors.garage && !!errors.garage[index]?.icon}
                    />
                    <DropDownEmpty
                      isOpen={openDropdown}
                      setIsOpen={setOpenDropdown}
                      onChange={handleChange(onChange)}
                      value={value}
                      items={garageItems.map((key) => ({
                        value: key,
                        label: t(`garage.${key}`),
                      }))}
                    />
                  </>
                );
              }}
            />
            <Controller
              name={`garage.${index}.description`}
              control={control}
              defaultValue={filed.description}
              render={({field: {onChange, value}}) => {
                return (
                  <>
                    <TextFiled
                      inputWrapStyle={{
                        flexDirection: 'row',
                        borderLeft: 'none',
                        borderTopLeftRadius: '0',
                        borderBottomLeftRadius: '0',
                      }}
                      onChange={handleChange(onChange)}
                      value={value}
                      // label="Мои ТС"
                      placeholder="Мои ТС"
                      iconLeft={{
                        name: 'close',
                        size: 26,
                        onPress: () => {
                          removeGarageField(index);
                        },
                      }}
                      error={errors.garage && !!errors.garage[index]?.icon}
                    />
                  </>
                );
              }}
            />
          </Item>
        ))}
      </List>
      <ButtonWrap>
        <Button
          type="button"
          onClick={() =>
            appendGarageField({
              description: '',
              icon: 'moto',
            })
          }>
          Добавить еще
        </Button>
      </ButtonWrap>
    </Form>
  );
};

const garageItems = ['snowmobile', 'moto', 'atv'];
