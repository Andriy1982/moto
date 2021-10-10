import React, {useEffect, useState} from 'react';

import {sortCategories} from '@app/helpers/sortCategories';
import {
  Categories,
  Description,
  ImageContainer,
  ImagesBlock,
  InfoBlock,
  LogoContainer,
  LogoImg,
  MapBlock,
  Img,
  MiddleSection,
  Name,
  TopSection,
  PartnerDetailStyle,
  MapMobile,
  ModalImg,
  ModalImgContainer,
  // SliderComponent,
} from './PartnerDetail.style';
import {IconInfo} from '@app/component/IconComponents/IconInfo';
import {IconComponent} from '@app/component/IconComponents';
import {partnerActions, partnerSelectors} from '@app/bus/partner';
import {TIconNames} from '@app/component/Icons';

import {ModalComponent} from '@app/component/ModalComponent/ModalComponent';
import {SliderComponent} from '@app/component/SliderComponent/SliderComponent';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {YMaps, Map, Placemark, ZoomControl} from 'react-yandex-maps';

// @ts-ignore
import {Media} from 'react-breakpoints';

const SliderSettings = {
  speed: 500,
  centerMode: true,
  variableWidth: true,
  arrows: false,
  focusOnSelect: true,
};
const ModalSliderSettings = {
  speed: 500,
  centerMode: true,
  variableWidth: true,
  adaptiveHeight: true,
  infinite: false,
};

type TItems = {
  icon: TIconNames;
  value?: string;
  mask?: string;
  schema?: string;
  replace?: (v: string) => string;
};

export const PartnerDetail = () => {
  const dispatch = useDispatch();

  const {id} = useParams<{id: string}>();

  const [isModal, setModal] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const partner = useSelector(partnerSelectors.getDetail);

  useEffect(() => {
    dispatch(partnerActions.clearDetail());
    dispatch(partnerActions.fetchDetailAsync({id}));
  }, [id]);

  if (!partner) {
    return null;
  }
  const phone = partner.contacts.find((c) => c.type === 'phone')?.link;
  const facebook = partner.contacts.find((c) => c.type === 'facebook')?.link;
  const whatsapp = partner.contacts.find((c) => c.type === 'whatsapp')?.link;
  const telegram = partner.contacts.find((c) => c.type === 'telegram')?.link;
  const instagram = partner.contacts.find((c) => c.type === 'instagram')?.link;
  const vk = partner.contacts.find((c) => c.type === 'vk')?.link;
  const website = partner.contacts.find((c) => c.type === 'weblink')?.link;
  const address = partner.address.full || '';
  const items: TItems[] = [
    {
      icon: 'place',
      value: address,
    },
    {
      icon: 'phone',
      value: phone,
      mask: '+7 (999) 999-99-99',
      schema: 'tel://',
    },
    {
      icon: 'fb-circle',
      value: facebook,
      schema: 'https://',
    },
    {
      icon: 'wats-app',
      value: whatsapp,
      mask: '+7 (999) 999-99-99',
      schema: 'https://wa.me/',
    },
    {
      icon: 'telegram',
      value: telegram,
      schema: 'https://t.me/',
      replace: (v: string) => v.replace('@', ''),
    },
    {
      icon: 'link',
      value: website,
      schema: 'https://',
    },
    {
      icon: 'vk',
      value: vk,
      schema: 'https://',
    },
    {
      icon: 'instagram',
      value: instagram,
      schema: 'https://',
    },
  ];

  return (
    <PartnerDetailStyle>
      <TopSection>
        <LogoContainer>
          {partner.avatar ? (
            <LogoImg src={partner.avatar.thumb} alt="Ups...(" />
          ) : (
            <IconComponent name={'user'} color={'gray'} size={36} />
          )}
        </LogoContainer>

        <div>
          <Name>{partner.name}</Name>
          <Categories>{[...partner.categories].sort(sortCategories).join(', ')}</Categories>
        </div>
      </TopSection>
      <MiddleSection>
        {partner.storeCoordinates && (
          <MapBlock>
            <YMaps>
              <Map
                defaultState={{
                  center: partner.storeCoordinates,
                  zoom: 13,
                }}
                width={'100%'}
                height={'100%'}>
                <ZoomControl options={{float: 'right', position: {top: 20, right: 20}}} />
                <Placemark
                  geometry={partner.storeCoordinates}
                  options={{
                    iconLayout: 'default#image',
                    iconImageHref: '/assets/images/PartnerMarker.png',
                  }}
                />
              </Map>
            </YMaps>
          </MapBlock>
        )}
        <InfoBlock>
          {items.map((contact) =>
            contact.value ? (
              contact.icon === 'place' ? (
                <IconInfo text={contact.value} name={contact.icon} color={'light'} />
              ) : (
                <a
                  href={
                    contact.schema +
                    (contact.replace ? contact.replace(contact.value) : contact.value)
                  }
                  target="_blank"
                  rel="noreferrer"
                  key={`contact-${contact.icon}`}>
                  <IconInfo text={contact.value} name={contact.icon} color={'light'} />
                </a>
              )
            ) : null,
          )}
        </InfoBlock>
      </MiddleSection>
      {!!partner.description && <Description>{partner.description}</Description>}
      {!!partner.photos && (
        <Media>
          {({breakpoints, currentBreakpoint}: any) =>
            breakpoints[currentBreakpoint] < breakpoints.sm ? (
              <SliderComponent settings={SliderSettings}>
                {partner.photos.map((photo, i) => (
                  <ImageContainer key={i} index={i}>
                    <Img
                      src={photo.thumb}
                      style={{width: '100px'}}
                      onClick={() => {
                        setSlideIndex(i);
                        setModal(true);
                      }}
                    />
                  </ImageContainer>
                ))}
              </SliderComponent>
            ) : (
              <ImagesBlock>
                {partner.photos.map((photo, i) => (
                  <ImageContainer key={i}>
                    <Img
                      src={photo.thumb}
                      onClick={() => {
                        setSlideIndex(i);
                        setModal(true);
                      }}
                    />
                  </ImageContainer>
                ))}
              </ImagesBlock>
            )
          }
        </Media>
      )}
      {!!partner.photos && (
        <ModalComponent isActive={isModal} toggleActive={() => setModal(false)}>
          <SliderComponent settings={ModalSliderSettings} slideIndex={slideIndex}>
            {partner.photos.map((photo, i) => (
              <ModalImgContainer key={i}>
                <ModalImg src={photo.original} style={{width: '60vw'}} />
              </ModalImgContainer>
            ))}
          </SliderComponent>
        </ModalComponent>
      )}
      <MapMobile>
        <Img src={'/assets/images/map.png'} />
      </MapMobile>
    </PartnerDetailStyle>
  );
};
