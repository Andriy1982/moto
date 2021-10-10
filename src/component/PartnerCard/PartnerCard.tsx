import React from 'react';
import {Partner} from '@app/bus/partner';
import {
  BotFlex,
  BotSection,
  Container,
  Categories,
  IconContainer,
  LogoContainer,
  LogoImg,
  Name,
  TopSection,
  StyledNavLink,
} from './PartnerCard.styles';
import {sortCategories} from '@app/helpers/sortCategories';
import {Routes} from '@app/routes';
import {generatePath} from 'react-router-dom';
import {IconComponent} from '@app/component/IconComponents';

export type PartnerCardProps = {
  partner: Partner.Item;
  transparent?: boolean;
};

const PartnerCard = ({partner, transparent = false}: PartnerCardProps) => {
  const phone = partner.contacts.find((contact) => contact.type === 'phone')?.link;

  const addressFields = [];
  if (partner.address?.full) addressFields.push(partner.address?.full);
  const address = addressFields.join(' ');

  return (
    <Container transparent={transparent}>
      <StyledNavLink
        to={generatePath(Routes.PARTNERS_DETAIL, {
          id: partner.id,
        })}>
        <TopSection>
          <LogoContainer>
            {partner.avatar ? (
              <LogoImg src={partner.avatar.thumb} alt="Ups...(" />
            ) : (
              <IconComponent name={'user'} color={'gray'} size={58} />
            )}
          </LogoContainer>
          <div>
            <Name>{partner.name}</Name>
            <Categories>{[...partner.categories].sort(sortCategories).join(', ')}</Categories>
          </div>
        </TopSection>
      </StyledNavLink>
      {(!!address || !!phone) && (
        <BotSection>
          {!!address && (
            <BotFlex>
              <IconContainer img={true}>
                <IconComponent name={'place'} color={'primary'} />
              </IconContainer>
              <div>{address}</div>
            </BotFlex>
          )}
          {!!phone && (
            <BotFlex>
              <IconContainer img={false}>
                <IconComponent name={'phone'} color={'primary'} />
              </IconContainer>
              <div>{phone}</div>
            </BotFlex>
          )}
        </BotSection>
      )}
    </Container>
  );
};

export default PartnerCard;
