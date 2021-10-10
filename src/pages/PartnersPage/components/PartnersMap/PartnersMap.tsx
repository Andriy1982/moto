import React, {useRef, useCallback, Ref, useState, useEffect} from 'react';

import {YMaps, Map, Placemark, ZoomControl} from 'react-yandex-maps';
import {AnimatePresence, motion} from 'framer-motion';
//app
//import {Routes} from '@app/routes';
//local
import {MapContainer, CurrentContainer, Container, ButtonShow, HiddenCurrent} from './styled';
import {useData} from './useData';
import PartnerCard from '@app/component/PartnerCard/PartnerCard';
import {ChevronIcon} from '@app/component/Icons/Chevron';
import {User} from '@app/bus/user';
export const PartnersMap = () => {
  const mapRef = useRef<any>(null);
  const prevCurrent = useRef<User.Partner | null>(null);
  const [showResult, setShowResult] = useState(false);
  const {partners, location, handleChangePosition, showMap, currentPartner, setCurrentPartner} =
    useData();

  useEffect(() => {
    if (currentPartner && (!prevCurrent.current || prevCurrent.current.id !== currentPartner?.id)) {
      prevCurrent.current = currentPartner;
      setShowResult(true);
    }
  }, [currentPartner]);

  const setMapRef = useCallback(
    (instance: Ref<any>) => {
      mapRef.current = instance;
      if (mapRef.current && mapRef.current.events) {
        mapRef.current.events.add('boundschange', function (event: any) {
          handleChangePosition({
            latitude: event.get('newCenter')[0],
            longitude: event.get('newCenter')[1],
            zoom: event.get('newZoom'),
          });
        });
      }
    },
    [handleChangePosition],
  );

  const defaultProps: any = {};

  if (showMap && location) {
    defaultProps.defaultState = {
      center: [location?.latitude, location?.longitude],
      zoom: 13,
    };
  } else {
    defaultProps.defaultState = {
      center: [55.751244, 37.618423],
      zoom: 7,
    };
  }

  console.log(currentPartner);

  return (
    <Container>
      <MapContainer>
        {showMap && (
          <YMaps>
            <Map
              {...defaultProps}
              instanceRef={setMapRef}
              width={'100%'}
              height={'100%'}
              options={{
                boundschange: handleChangePosition,
              }}>
              <ZoomControl options={{float: 'right', position: {top: 20, right: 20}}} />
              {partners.map((partner) => (
                <Placemark
                  key={`partner-${partner.id}`}
                  instanceRef={(ref: any) => {
                    ref &&
                      (!ref?.partner?.types?.click || ref?.partner?.types?.click?.length === 0) &&
                      ref.events.add('click', () => {
                        setCurrentPartner(partner);
                      });
                  }}
                  geometry={partner.storeCoordinates}
                  options={{
                    iconLayout: 'default#image',
                    iconImageHref: '/assets/images/PartnerMarker.png',
                  }}
                />
              ))}
            </Map>
          </YMaps>
        )}
      </MapContainer>
      <motion.div
        style={{
          position: 'absolute',
          zIndex: 100,
        }}
        initial={{bottom: -20, left: 0, right: 0}}>
        {currentPartner && (
          <CurrentContainer>
            <ButtonShow
              onClick={() => {
                if (!showResult) {
                  if (currentPartner) setShowResult(true);
                } else {
                  setShowResult(false);
                }
              }}>
              <svg
                style={{position: 'absolute', zIndex: -1, bottom: 0, left: 0, right: 0}}
                width="68"
                height="32"
                viewBox="0 0 68 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33.9803 31.7748C33.9803 31.7748 33.9803 31.7748 33.9802 31.7748V32H0.913574V24.8282H3.85466C9.25427 24.8282 13.6315 20.4509 13.6315 15.0513H13.7412C14.2958 6.66559 23.145 0 33.9802 0C44.8154 0 53.6647 6.66559 54.2193 15.0513H54.2469C54.2469 20.4509 58.6242 24.8282 64.0238 24.8282H67.6828V32H33.9803V31.7748Z"
                  fill="#28292B"
                />
              </svg>
              <motion.div
                animate={{
                  rotateX: showResult ? 180 : 0,
                }}>
                <ChevronIcon size={18} fill="#BDBDBD" />
              </motion.div>
            </ButtonShow>
            <AnimatePresence>
              {showResult ? (
                <motion.div
                  layout
                  style={{
                    width: '100%',
                  }}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}>
                  <PartnerCard transparent partner={currentPartner} />
                </motion.div>
              ) : (
                <motion.div
                  layout
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    paddingTop: 5,
                  }}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}>
                  <HiddenCurrent
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{delay: 0.3}}>
                    Результаты поиска
                  </HiddenCurrent>
                </motion.div>
              )}
            </AnimatePresence>
          </CurrentContainer>
        )}
      </motion.div>
    </Container>
  );
};
