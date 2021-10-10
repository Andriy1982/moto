import React, {useState} from 'react';
import {generatePath, NavLink, /*useLocation,*/ useParams} from 'react-router-dom';

//app
import {EventUsers} from '@app/component/EventUsers/EventUsers';
import {ModalComponent} from '@app/component/ModalComponent/ModalComponent';
import {Routes} from '@app/routes';
import {DangerButton, OutlineButton, SubmitButton} from '@app/component/Buttons';
import {useMottoTheme} from '@app/hooks';
import MotorCycle from '@assets/images/moto.gif';
//local
import {
  AddressItem,
  ContentSection,
  EventDate,
  EventItem,
  EventPageStyle,
  IconContainer,
  InfoItem,
  MobileTopGrid,
  Moto,
  TopSection,
  ListItem,
  MemberList,
  Button,
  AnimationItem,
  AnimationContainer,
} from '@app/pages/EventPage/EventPage.style';
import {useData} from './useData';
import {IconComponent} from '@app/component/IconComponents';
import {format} from 'date-fns';
import ru from 'date-fns/locale/ru';

export const EventPage = () => {
  const {id} = useParams<{id: string}>();
  const [isModal, setIsModal] = useState(false);
  const [enterAnim, setEnterAnim] = useState(false);
  const [leaveAnim, setLeaveAnim] = useState(false);
  const {event, authenticatedUserId, changeSate, handleDelete, isLoading} = useData({id});

  const {source} = useMottoTheme();

  if (!event) {
    return null;
  }

  return (
    <EventPageStyle>
      <TopSection background={event.substrate}>
        <h1>{event.name}</h1>
        <Moto src={source} />
      </TopSection>
      <ContentSection>
        <EventDate>
          <EventItem>
            <IconComponent name={'date'} color={'primary'} size={24} />
            <div>
              {format(new Date(event.date), 'dd MMMM', {
                locale: ru,
              })}
            </div>
          </EventItem>
          <EventItem>
            <IconComponent name={'time'} color={'primary'} size={24} />
            <div>
              {format(new Date(event.date), 'HH:mm', {
                locale: ru,
              })}
            </div>
          </EventItem>
        </EventDate>
        {!!event.address.full && (
          <AddressItem>
            <IconContainer img={true} border={true}>
              <IconComponent name={'place'} color={'primary'} size={24} />
            </IconContainer>
            <div>{event.address.full}</div>
          </AddressItem>
        )}
        <MobileTopGrid>
          <div>
            <IconContainer>
              <IconComponent name={'date'} color={'primary'} size={24} />
            </IconContainer>
            <div>
              {format(new Date(event.date), 'dd MMMM', {
                locale: ru,
              })}
            </div>
          </div>
          <div>
            <IconContainer img={true} border={true}>
              <IconComponent name={'place'} color={'primary'} size={24} />
            </IconContainer>
            <div>{event.address.full}</div>
          </div>
          <div>
            <IconContainer>
              <IconComponent name={'time'} color={'primary'} size={24} />
            </IconContainer>
            <div>
              {format(new Date(event.date), 'HH:mm', {
                locale: ru,
              })}
            </div>
          </div>
        </MobileTopGrid>
        <EventUsers
          creator={event.creator}
          participants={event.participants || []}
          total={event.participantIds.length}
          onPressList={() => setIsModal(true)}
        />
        {!!event.description && <InfoItem>{event.description}</InfoItem>}
        <InfoItem>{event.description}</InfoItem>
      </ContentSection>
      <AnimationContainer>
        {enterAnim && (
          <AnimationItem
            transition={{
              duration: 2.5,
              ease: 'linear',
            }}
            initial={{translateX: '-204px'}}
            animate={{translateX: '100%'}}
            onAnimationComplete={() => {
              setEnterAnim(false);
            }}>
            <img src={MotorCycle} alt="Ups...(" />
          </AnimationItem>
        )}
        {leaveAnim && (
          <AnimationItem
            transition={{
              duration: 2.5,
              ease: 'linear',
            }}
            initial={{translateX: '204px', rotateY: '180deg'}}
            animate={{translateX: '-100%'}}
            onAnimationComplete={() => {
              setLeaveAnim(false);
            }}>
            <img src={MotorCycle} alt="Ups...(" />
          </AnimationItem>
        )}
      </AnimationContainer>
      <Button>
        {!!authenticatedUserId && authenticatedUserId !== event.creatorId ? (
          <>
            {event.participantIds.includes(authenticatedUserId) ? (
              <OutlineButton
                marginTop={'0px'}
                onClick={() => {
                  setLeaveAnim(true);
                  changeSate('leave');
                }}
                loading={isLoading}>
                Уже участвуете
              </OutlineButton>
            ) : (
              <SubmitButton
                marginTop={'0px'}
                onClick={() => {
                  setEnterAnim(true);
                  changeSate('enter');
                }}
                loading={isLoading}
                text="Присоединиться"
              />
            )}
          </>
        ) : !!authenticatedUserId && authenticatedUserId === event.creatorId ? (
          <DangerButton marginTop={'0px'} onClick={handleDelete} loading={isLoading}>
            Удалить ивент
          </DangerButton>
        ) : null}
      </Button>
      <ModalComponent isActive={isModal} toggleActive={() => setIsModal(false)}>
        <MemberList>
          {event.participants?.map((user) => (
            <NavLink
              to={generatePath(Routes.USER, {
                id: user.id,
              })}
              key={user.id}>
              <ListItem>
                <div>
                  <img
                    src={user.avatar?.thumb || '/assets/images/web/avatar.png'}
                    alt={user.name}
                  />
                </div>
                <div>{user.name}</div>
              </ListItem>
            </NavLink>
          ))}
        </MemberList>
      </ModalComponent>
    </EventPageStyle>
  );
};
