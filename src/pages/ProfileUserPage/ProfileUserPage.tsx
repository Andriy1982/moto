import React, {useState} from 'react';
// @ts-ignore
import {Media} from 'react-breakpoints';
import {Routes} from '@app/routes';
import {useData} from './useData';

import {FormProfile, FormVehicle, FormSettings, FileUploader} from '@app/component/FormsUser';

//style
import {
  ProfileContainer,
  NavContainer,
  Tab,
  FormWrap,
  Title,
  Description,
  AvatarWrap,
  Avatar,
} from './ProfileUserPage.style';
import {LinkStyle} from '@app/component/FormPartnerInfo/FormPartnerInfo.style';

export const ProfileUserPage = () => {
  const [tab, setTab] = useState<'info' | 'vehicle' | 'settings'>('info');

  const isInfo = tab === 'info';
  const isVehicle = tab === 'vehicle';
  const isSettings = tab === 'settings';

  const {
    avatar,
    control,
    errors,
    contactsFields,
    garageFields,
    appendGarageField,
    removeGarageField,
    handleChange,
    onLogout,
    handleUploadAvatar,
    isOpenChangeTheme,
    setIsOpenChangeTheme,
    themeType,
    handleChangeTheme,
    // openLinkSubscribe,
    // register,
    handleSubmit,
  } = useData();
  return (
    <ProfileContainer>
      <LinkStyle to={Routes.FEEDBACK} />
      <Media>
        {({breakpoints, currentBreakpoint}: any) =>
          breakpoints[currentBreakpoint] < breakpoints.sm ? null : (
            <NavContainer>
              <Tab tabActive={!!isInfo} onClick={() => setTab('info')}>
                Личная информация
              </Tab>
              <Tab tabActive={!!isVehicle} onClick={() => setTab('vehicle')}>
                Мои ТС
              </Tab>
              <Tab tabActive={!!isSettings} onClick={() => setTab('settings')}>
                Настройки
              </Tab>
            </NavContainer>
          )
        }
      </Media>
      <Media>
        {({breakpoints, currentBreakpoint}: any) =>
          (breakpoints[currentBreakpoint] < breakpoints.sm || isInfo) && (
            <FormWrap>
              <AvatarWrap>
                <Avatar src={avatar?.original || '/assets/images/web/avatar.png'} alt="avatar" />
                <FileUploader onFileSelectSuccess={(file: File) => handleUploadAvatar(file)} />
              </AvatarWrap>
              <FormProfile
                control={control}
                errors={errors}
                contactsFields={contactsFields}
                handleChange={handleChange}
              />
            </FormWrap>
          )
        }
      </Media>
      <Media>
        {({breakpoints, currentBreakpoint}: any) =>
          (breakpoints[currentBreakpoint] < breakpoints.sm || isVehicle) && (
            <FormWrap>
              <Title mb="10px">Мои ТС</Title>
              <Description>Укажите свои транспортные средства</Description>
              <FormVehicle
                control={control}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                garageFields={garageFields}
                appendGarageField={appendGarageField}
                removeGarageField={removeGarageField}
                errors={errors}
              />
            </FormWrap>
          )
        }
      </Media>
      <Media>
        {({breakpoints, currentBreakpoint}: any) =>
          (breakpoints[currentBreakpoint] < breakpoints.sm || isSettings) && (
            <FormWrap>
              <Title mb="60px">Настройки</Title>
              <FormSettings
                control={control}
                handleChange={handleChange}
                isOpenChangeTheme={isOpenChangeTheme}
                setIsOpenChangeTheme={setIsOpenChangeTheme}
                handleChangeTheme={handleChangeTheme}
                themeType={themeType}
                onLogout={onLogout}
              />
            </FormWrap>
          )
        }
      </Media>
    </ProfileContainer>
  );
};
