import React, {useState} from 'react';
import {Controller, Control, DeepMap, FieldError} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

//app
import TextFiled from '@app/component/TextFiled';
import {User} from '@app/bus/user';
import {SubmitButton} from '@app/component/Buttons';
import {Routes} from '@app/routes';
import {userSelectors} from '@app/bus/user';
import {AutoCompleteFilledField} from '@app/component/AutoCompleteFilledField';
import {ModalComponent} from '@app/component/ModalComponent/ModalComponent';
import {InputCheckBox} from '@app/component/InputCheckBox/InputCheckBox';

//style
import {Form, InputDescription, List, Item} from './FormPartnerInfo.style';
import {FilterList} from '@app/pages/PartnersPage/components/PartnersSidebar/PartnersSidebar.style';

type TProps = {
  control: Control<User.PayloadChangePartner>;
  errors: DeepMap<User.PayloadChangePartner, FieldError>;
  contactsFields: any;
  handleChange: (onChange: (v: any) => void) => (v: any) => void;
  defaultAddress: string;
  handleChangeAddress: any;
  categories: string[];
  handleChangeCategories: any;
};

export const FormPartnerInfo: React.FC<TProps> = ({
  control,
  errors,
  contactsFields,
  handleChange,
  defaultAddress,
  handleChangeAddress,
  handleChangeCategories,
  categories,
}: TProps) => {
  const {t} = useTranslation();
  const history = useHistory();
  const user = useSelector(userSelectors.getCurrent);

  const [isModal, setIsModal] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string[]>([]);

  const goChangePassword = () => {
    history.push(Routes.CONFIRM_CODE, {
      login: user?.phone,
    });
  };
  const getCategoryFilter = (filter: string) => {
    const filterCopy = [...filterCategory];
    if (filterCategory.includes(filter)) {
      filterCopy.splice(filterCategory.indexOf(filter), 1);
    } else {
      filterCopy.push(filter);
    }
    setFilterCategory(filterCopy);
  };

  const onChangeCategories = () => {
    setIsModal(false);
    handleChangeCategories(filterCategory);
  };
  const setValue = (value: any) => {
    setIsModal(true);
    setFilterCategory(value);
  };

  return (
    <>
      <Form>
        <List>
          <Item>
            <Controller
              name="name"
              control={control}
              render={({field: {onChange, value}}) => (
                <TextFiled
                  onChange={handleChange(onChange)}
                  value={value}
                  label="Название"
                  placeholder="Название"
                  // error={!!errors?.name}
                />
              )}
            />
          </Item>
          <Item>
            <Controller // переделать на селект
              name="categories"
              control={control}
              render={({field: {value}}) => (
                <TextFiled
                  onChange={() => setValue(value)}
                  value={value}
                  label="Специализация"
                  placeholder="Специализация"
                />
              )}
            />
            <ModalComponent isActive={isModal} toggleActive={onChangeCategories}>
              <h2>Категория</h2>
              <FilterList>
                {categories.map((category, i) => (
                  <InputCheckBox
                    key={i}
                    value={category}
                    getFilter={getCategoryFilter}
                    checked={filterCategory.includes(category)}
                  />
                ))}
              </FilterList>
            </ModalComponent>
          </Item>
          <Item>
            <AutoCompleteFilledField
              onSelect={handleChangeAddress}
              value={defaultAddress}
              placeholder="Адрес"
              label="Адрес"
              type="text"
              error={!!errors?.textAddress}
            />
          </Item>
          <InputDescription>Укажите свое название, специализацию и локацию</InputDescription>
          <Item>
            <Controller
              name="description"
              control={control}
              render={({field: {onChange, value}}) => (
                <TextFiled
                  onChange={handleChange(onChange)}
                  value={value}
                  label="Любые подробности о себе"
                  placeholder="О себе"
                  error={errors.description && t(`form.error.${errors.description.message}`)}
                />
              )}
            />
          </Item>
          <InputDescription>Расскажите чем вы занимаетесь</InputDescription>
          <Item>
            <Controller
              name={`contacts.4.link`}
              control={control}
              defaultValue={contactsFields[4]?.link}
              render={({field: {onChange, value}}) => (
                <TextFiled
                  onChange={handleChange(onChange)}
                  value={value}
                  label="Phone"
                  placeholder="+7 999 999-99-99"
                  iconLeft={{
                    name: 'phone',
                    size: 26,
                  }}
                />
              )}
            />
          </Item>
          <Item>
            <Controller
              name={`contacts.0.link`}
              control={control}
              defaultValue={contactsFields[0]?.link}
              render={({field: {onChange, value}}) => (
                <TextFiled
                  onChange={handleChange(onChange)}
                  value={value}
                  label="Facebook"
                  placeholder="facebook.com/username"
                  error={errors.description && t(`form.error.${errors.description.message}`)}
                  iconLeft={{name: 'fb-circle', size: 26}}
                />
              )}
            />
          </Item>
          <Item>
            <Controller
              name={`contacts.1.link`}
              control={control}
              defaultValue={contactsFields[1]?.link}
              render={({field: {onChange, value}}) => (
                <TextFiled
                  onChange={handleChange(onChange)}
                  value={value}
                  label="WhatsApp"
                  placeholder="+7 999 999-99-99"
                  error={errors.description && t(`form.error.${errors.description.message}`)}
                  iconLeft={{
                    name: 'wats-app',
                    size: 26,
                  }}
                />
              )}
            />
          </Item>
          <Item>
            <Controller
              name={`contacts.2.link`}
              control={control}
              defaultValue={contactsFields[2]?.link}
              render={({field: {onChange, value}}) => (
                <TextFiled
                  onChange={handleChange(onChange)}
                  value={value}
                  label="Telegram"
                  placeholder="@username"
                  iconLeft={{name: 'telegram', size: 26}}
                />
              )}
            />
          </Item>
          <Item>
            <Controller
              name={`contacts.3.link`}
              control={control}
              defaultValue={contactsFields[3]?.link}
              render={({field: {onChange, value}}) => (
                <TextFiled
                  onChange={handleChange(onChange)}
                  value={value}
                  label="Mysite"
                  placeholder="mysite.ru"
                  iconLeft={{
                    name: 'link',
                    size: 26,
                  }}
                />
              )}
            />
          </Item>
          <Item>
            <Controller
              name={`contacts.5.link`}
              control={control}
              defaultValue={contactsFields[5]?.link}
              render={({field: {onChange, value}}) => (
                <TextFiled
                  onChange={handleChange(onChange)}
                  value={value}
                  label="Вконтакте"
                  placeholder="vk.com/username"
                  iconLeft={{name: 'vk', size: 26}}
                />
              )}
            />
          </Item>
          <Item>
            <Controller
              name={`contacts.6.link`}
              control={control}
              defaultValue={contactsFields[6]?.link}
              render={({field: {onChange, value}}) => (
                <TextFiled
                  onChange={handleChange(onChange)}
                  value={value}
                  label="Instagram"
                  placeholder="instagram.com/username"
                  iconLeft={{name: 'instagram', size: 26}}
                />
              )}
            />
          </Item>
          <InputDescription style={{marginBottom: '0'}}>
            Укажите свои контактные данные
          </InputDescription>
        </List>
        <SubmitButton
          onClick={goChangePassword}
          marginTop="34px"
          type="button"
          text="Изменить пароль"
        />
      </Form>
    </>
  );
};

export default FormPartnerInfo;
