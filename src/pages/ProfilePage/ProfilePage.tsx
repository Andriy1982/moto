import React, {useEffect} from 'react';
import {
  Avatar,
  City,
  ContactIcons,
  InfoSection,
  ProfilePageStyle,
  TopSection,
  ItemContainer,
  Location,
  Name,
  IconContainer,
  ContentSection,
  Garage,
  StatusContainer,
  Status,
} from '@app/pages/ProfilePage/ProfilePage.style';
import {IconComponent, IconInfo} from '@app/component/IconComponents';
import {TIconNames} from '@app/component/Icons';
import {useDispatch, useSelector} from 'react-redux';
import {User, userActions, userSelectors} from '@app/bus/user';
import {uiSelectors} from '@app/bus/ui';
import {useParams} from 'react-router-dom';
import {ErrorPage} from '@app/pages/ErrorPage/ErrorPage';

const images = {
  snowmobile: '/assets/images/user/SNOW.jpg',
  urban: '/assets/images/user/CITY.jpg',
  chopper: '/assets/images/user/CHOPPER.jpg',
  atv: '/assets/images/user/QUADRO.jpg',
  sport: '/assets/images/user/SPORT.jpg',
};

export const ProfilePage: React.FC = () => {
  const {id} = useParams<{id: string}>();
  const dispatch = useDispatch();
  const user: User.User | null = useSelector(userSelectors.getDetail);
  const isLoading: boolean | undefined = useSelector(uiSelectors.getLoading('fetch_detail_user'));

  useEffect(() => {
    dispatch(userActions.clearDetail());
    dispatch(userActions.fetchDetailUser(id));
  }, [id]);

  if (!user && !isLoading) {
    return <ErrorPage errorText={'Пользователь не найден'} />;
  }

  if (!user) return null;

  const contacts: {
    icon: TIconNames;
    value: string;
    schema: string;
  }[] = [
    {
      icon: 'telegram',
      value: user.contacts.find((item) => item.type === 'telegram')?.link.replace('@', '') || '',
      schema: 'https://t.me/',
    },
    {
      icon: 'wats-app',
      value: user.contacts.find((item) => item.type === 'whatsapp')?.link || '',
      schema: 'https://wa.me/',
    },
    {
      icon: 'fb-circle',
      value: user.contacts.find((item) => item.type === 'facebook')?.link || '',
      schema: 'https://',
    },
    {
      icon: 'vk',
      value: user.contacts.find((item) => item.type === 'vk')?.link || '',
      schema: 'https://',
    },
    {
      icon: 'instagram',
      value: user.contacts.find((item) => item.type === 'instagram')?.link || '',
      schema: 'https://',
    },
  ];

  return (
    <ProfilePageStyle>
      <TopSection
        img={
          // @ts-ignore
          user.settings.theme ? images[user.settings.theme] : images.urban
        }>
        <Avatar>
          {user.avatar ? (
            <img src={user.avatar.original} alt="" />
          ) : (
            <IconComponent name={'user'} color={'gray'} size={56} />
          )}
        </Avatar>
      </TopSection>
      <ContentSection>
        <Name>{user.name}</Name>
        {!!user.address.city && (
          <Location>
            <IconComponent name={'place'} color={'primary'} size={15} />
            <City>{user.address.city}</City>
          </Location>
        )}
        {!!contacts.filter((contact) => contact.value).length && (
          <ContactIcons>
            {contacts.map((contact, i) =>
              contact.value ? (
                <a href={contact.schema + contact.value} key={i} target="_blank" rel="noreferrer">
                  <IconContainer>
                    <IconComponent name={contact.icon} color={'primary'} size={22} />
                  </IconContainer>
                </a>
              ) : null,
            )}
          </ContactIcons>
        )}
        <InfoSection>
          {user.garage && user.garage.length > 0 && (
            <ItemContainer>
              <h3>в гараже</h3>
              <Garage>
                {user.garage.map((item, index) => (
                  <IconInfo text={item.description} name={item.icon} color={'gray'} key={index} />
                ))}
              </Garage>
            </ItemContainer>
          )}
          {!!user.description && (
            <StatusContainer>
              <ItemContainer>
                <Status>{user.description}</Status>
              </ItemContainer>
            </StatusContainer>
          )}
        </InfoSection>
      </ContentSection>
    </ProfilePageStyle>
  );
};
