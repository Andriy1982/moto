import React from 'react';
import {Controller} from 'react-hook-form';
import {useTranslation} from 'react-i18next';

import SwitchField from '@app/component/SwitchFiled';
import SelectFiled from '@app/component/SelectFiled';
import DropDownEmpty from '@app/component/DropDownEmpty';
import {IconComponent as Icon} from '@app/component/IconComponents';
import {mottoThemes, MottoType} from '@app/themes';

//style
import {Form, SettingsWrap} from './ProfileUser.style';
import {Description, InputWrapper} from '../SelectFiled/SelectFiled.style';

//local
import {radiusOfSosItems} from '@app/pages/ProfileUserPage/useData';

type TProps = {
  control: any;
  handleChange: any;
  isOpenChangeTheme: boolean;
  setIsOpenChangeTheme: React.Dispatch<React.SetStateAction<boolean>>;
  handleChangeTheme: any;
  themeType: MottoType;
  onLogout: () => void;
};

export const FormSettings: React.FC<TProps> = ({
  control,
  handleChange,
  isOpenChangeTheme,
  setIsOpenChangeTheme,
  handleChangeTheme,
  themeType,
  onLogout,
}: TProps) => {
  const {t} = useTranslation();

  return (
    <Form>
      <SettingsWrap>
        <Controller
          name="pushOfEvents"
          control={control}
          render={({field: {onChange, value}}) => (
            <SwitchField
              value={!!value}
              label="Получать уведомления об ивентах"
              onChange={handleChange(onChange)}
            />
          )}
        />
      </SettingsWrap>
      <SettingsWrap>
        <Controller
          name="pushOfSos"
          control={control}
          render={({field: {onChange, value}}) => (
            <SwitchField
              value={!!value}
              label="Получать SOS-уведомления"
              onChange={handleChange(onChange)}
            />
          )}
        />
      </SettingsWrap>
      <SettingsWrap>
        <Controller
          name="radiusOfEventRequest"
          control={control}
          render={({field: {onChange, value}}) => (
            <SelectFiled
              items={radiusOfSosItems}
              value={value}
              description="Радиус входящих уведомлений о новых ивентах"
              onChange={handleChange(onChange)}
            />
          )}
        />
      </SettingsWrap>
      <SettingsWrap>
        <Controller
          name="radiusOfSosRequest"
          control={control}
          render={({field: {onChange, value}}) => (
            <SelectFiled
              items={radiusOfSosItems}
              value={value}
              description="Радиус запросов о помощи"
              onChange={handleChange(onChange)}
            />
          )}
        />
      </SettingsWrap>
      <SettingsWrap>
        <InputWrapper style={{cursor: 'pointer'}} onClick={() => setIsOpenChangeTheme(true)}>
          <Description>Выбрать тему приложения </Description>
          <Icon color="gray" name="chevron-right" size={13} />
        </InputWrapper>
        <DropDownEmpty
          isOpen={isOpenChangeTheme}
          setIsOpen={setIsOpenChangeTheme}
          onChange={handleChangeTheme}
          value={themeType as string}
          items={Object.keys(mottoThemes).map((key) => ({
            value: key,
            //@ts-ignore
            label: t(`mottoTheme.${mottoThemes[key].t}`),
          }))}
        />
      </SettingsWrap>
      <SettingsWrap style={{cursor: 'pointer'}} onClick={onLogout}>
        <InputWrapper>
          <Description>{t('button.sign_out')} </Description>
        </InputWrapper>
      </SettingsWrap>
    </Form>
  );
};
