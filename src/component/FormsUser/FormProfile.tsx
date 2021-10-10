import React from 'react';
import {useTranslation} from 'react-i18next';
import {Controller} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

//app
import TextFiled from '@app/component/TextFiled';
import {SubmitButton} from '../Buttons';
import {Routes} from '@app/routes';
import {userSelectors} from '@app/bus/user';

//style
import {Form, InputWrap, InputDescription, List, Item} from './ProfileUser.style';

type TProps = {
  control: any;
  errors: any;
  contactsFields: any;
  handleChange: any;
};

export const FormProfile: React.FC<TProps> = ({
  control,
  errors,
  contactsFields,
  handleChange,
}: TProps) => {
  const {t} = useTranslation();
  const history = useHistory();
  const user = useSelector(userSelectors.getCurrent);

  const goChangePassword = () => {
    history.push(Routes.CONFIRM_CODE, {login: user?.phone});
  };

  return (
    <Form>
      <List>
        <Item>
          <InputWrap>
            <Controller
              name="name"
              control={control}
              render={({field: {onChange, value}}) => (
                <TextFiled
                  onChange={handleChange(onChange)}
                  value={value}
                  label="Имя"
                  placeholder="Имя"
                  error={errors.name && t(`form.error.${errors.name.message}`)}
                />
              )}
            />
            <Controller
              name="city"
              control={control}
              render={({field: {onChange, value}}) => (
                <TextFiled
                  onChange={handleChange(onChange)}
                  value={value}
                  label="Город"
                  placeholder="Город"
                  error={errors.city && t(`form.error.${errors.city.message}`)}
                />
              )}
            />
          </InputWrap>
        </Item>
        <InputDescription>Укажите свое имя и место, в котором живете</InputDescription>
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
        <InputDescription>Любые подробности о себе</InputDescription>
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
                label="Whatsapp"
                placeholder="+7 999 999-99-99"
                iconLeft={{name: 'wats-app', size: 26}}
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
                label="Вконтакте"
                placeholder="vk.com/username"
                iconLeft={{name: 'vk', size: 26}}
              />
            )}
          />
        </Item>
        <Item>
          <Controller
            name={`contacts.4.link`}
            control={control}
            defaultValue={contactsFields[4]?.link}
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
        <InputDescription style={{marginBottom: 0}}>
          Укажите свои Facebook, WhatsApp и Telegram
        </InputDescription>
      </List>
      <SubmitButton
        onClick={goChangePassword}
        marginTop="34px"
        type="button"
        text="Изменить пароль"
      />
    </Form>
  );
};
