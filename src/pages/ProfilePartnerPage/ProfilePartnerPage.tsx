import React, {useState} from 'react';
// @ts-ignore
import {Media} from 'react-breakpoints';
import {Routes} from '@app/routes';

//app
import {FormPartnerInfo} from '@app/component/FormPartnerInfo';
import {FileUploader} from '@app/component/FormsUser/FileUploader';
import {MultiPhotoFiled} from '@app/component/MultiPhotoFiled';
import {FormSettings} from '@app/component/FormsUser/FormSettings';

//local
import {useData} from './useData';

//style
import {
  ProfileContainer,
  LinkStyle,
  Title,
  AvatarWrap,
  FormWrap,
  Avatar,
} from './ProfilePartnerPage.style';
import {NavContainer, Tab} from '@app/pages/ProfileUserPage/ProfileUserPage.style';

export const ProfilePartnerPage = () => {
  const [tab, setTab] = useState<'info' | 'gallery' | 'settings'>('info');

  const isInfo = tab === 'info';
  const isGallery = tab === 'gallery';
  const isSettings = tab === 'settings';

  const {
    control,
    handleChange,
    handleChangeCategories,
    errors,
    contactsFields,
    avatar,
    photos,
    categories,
    defaultAddress,
    handleChangeAddress,
    handleDeletePhoto,
    handleUploadAvatar,
    handleUploadPhoto,
    isOpenChangeTheme,
    setIsOpenChangeTheme,
    themeType,
    handleChangeTheme,
    onLogout,
    // subscribeDate,
    // openLinkSubscribe,
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
              <Tab tabActive={!!isGallery} onClick={() => setTab('gallery')}>
                Фотографии
              </Tab>
              <Tab tabActive={!!isSettings} onClick={() => setTab('settings')}>
                Настройки
              </Tab>
            </NavContainer>
          )
        }
      </Media>
      <FormWrap>
        <Media>
          {({breakpoints, currentBreakpoint}: any) =>
            (breakpoints[currentBreakpoint] < breakpoints.sm || isInfo) && (
              <>
                <Title>Основное</Title>
                <AvatarWrap>
                  <Avatar src={avatar?.original || '/assets/images/web/avatar.png'} alt="avatar" />
                  <FileUploader onFileSelectSuccess={(file: File) => handleUploadAvatar(file)} />
                </AvatarWrap>
                <FormPartnerInfo
                  control={control}
                  errors={errors}
                  contactsFields={contactsFields}
                  handleChange={handleChange}
                  defaultAddress={defaultAddress}
                  handleChangeAddress={handleChangeAddress}
                  categories={categories}
                  handleChangeCategories={handleChangeCategories}
                />
              </>
            )
          }
        </Media>
        <Media>
          {({breakpoints, currentBreakpoint}: any) =>
            (breakpoints[currentBreakpoint] < breakpoints.sm || isGallery) && (
              <>
                <Title>Фотографии</Title>
                <MultiPhotoFiled
                  items={photos}
                  onChange={handleUploadPhoto}
                  onDelete={handleDeletePhoto}
                />
              </>
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
      </FormWrap>
    </ProfileContainer>
  );
};
