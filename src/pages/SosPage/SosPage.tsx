import React, {useState} from 'react';
import {
  AddressItem,
  ContentSection,
  EventPageStyle,
  IconContainer,
  InfoItem,
  MobileTopGrid,
  Moto,
  TopSection,
  ListItem,
  MemberList,
  Button,
  AnimationContainer,
  AnimationItem,
} from './SosPage.style';
import {OutlineButton, SubmitButton} from '@app/component/Buttons';
import {generatePath, NavLink, useParams} from 'react-router-dom';
import {useData} from './useData';
import {EventUsers} from '@app/component/EventUsers/EventUsers';
import {Routes} from '@app/routes';
import {ModalComponent} from '@app/component/ModalComponent/ModalComponent';
import {useMottoTheme} from '@app/hooks';
import MotorCycle from '@assets/images/moto.gif';
import {IconComponent} from '@app/component/IconComponents';

export const SosPage = () => {
  const {id} = useParams<{id: string}>();

  const {signal, authenticatedUserId, changeSate, isLoading} = useData({
    id,
  });
  const {source} = useMottoTheme();
  const [enterAnim, setEnterAnim] = useState(false);
  const [leaveAnim, setLeaveAnim] = useState(false);
  const [isModal, setIsModal] = useState(false);

  if (!signal) {
    return null;
  }

  return (
    <EventPageStyle>
      <TopSection>
        <h1>SOS ВЫЗОВ</h1>
        <Moto src={source} />
      </TopSection>
      <ContentSection>
        {!!signal.address.full && (
          <AddressItem>
            <IconContainer img={true} border={true}>
              <IconComponent name={'place'} color={'primary'} size={24} />
            </IconContainer>
            <div>{signal.address.full}</div>
          </AddressItem>
        )}
        <MobileTopGrid>
          {!!signal.address.full && (
            <div>
              <IconContainer img={true} border={true}>
                <IconComponent name={'place'} color={'primary'} size={24} />
              </IconContainer>
              <div>{signal.address.full}</div>
            </div>
          )}
        </MobileTopGrid>
        <EventUsers
          creator={signal.creator}
          participants={signal.responders}
          total={signal.responderIds.length}
          onPressList={() => setIsModal(true)}
        />
        {!!signal.description && <InfoItem>{signal.description}</InfoItem>}
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
        {!!authenticatedUserId && authenticatedUserId !== signal.creatorId && (
          <>
            {signal.responderIds.includes(authenticatedUserId) ? (
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
        )}
      </Button>
      <ModalComponent isActive={isModal} toggleActive={() => setIsModal(false)}>
        <MemberList>
          {signal.responders?.map((user) => (
            <NavLink
              to={generatePath(Routes.USER, {
                id: user.id,
              })}
              key={user.id}>
              <ListItem>
                <div>
                  <img src={user.avatar?.thumb} alt={user.name} />
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
