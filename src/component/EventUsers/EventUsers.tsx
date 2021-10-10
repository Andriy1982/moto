import React from 'react';
import {User} from '@app/bus/user';
import {Creator, CreatorName, ImageContainer, Members, People, Title} from './EventUsers.style';
import {generatePath, NavLink} from 'react-router-dom';
import {Routes} from '@app/routes';

type TProps = {
  creator?: User.User;
  participants?: User.User[];
  total: number;
  onPressList: () => void;
};

export const EventUsers = ({creator, participants, total, onPressList}: TProps) => {
  const users = participants?.slice(0, 4);
  const showPlus = total === 0 || total - 4 > 0;

  return (
    <People>
      {creator && (
        <Creator>
          <Title>Организатор</Title>
          <NavLink
            to={generatePath(Routes.USER, {
              id: creator.id,
            })}>
            <ImageContainer member={false}>
              <img
                src={creator?.avatar?.thumb || '/assets/images/web/avatar.png'}
                alt={creator?.name}
              />
            </ImageContainer>
            <CreatorName>{creator?.name}</CreatorName>
          </NavLink>
        </Creator>
      )}
      <Members>
        <Title>участвуют</Title>
        <div onClick={onPressList}>
          {users?.map((user, i) => (
            <ImageContainer key={i} member={true}>
              <img src={user.avatar?.thumb || '/assets/images/web/avatar.png'} alt={user.name} />
            </ImageContainer>
          ))}
          {showPlus && (
            <ImageContainer member={true}>
              <div>+{total - 4 > 0 ? total - 4 : 0}</div>
            </ImageContainer>
          )}
        </div>
      </Members>
    </People>
  );
};
