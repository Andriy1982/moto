import React, {Ref, useCallback, useRef} from 'react';
import {useHistory, generatePath} from 'react-router-dom';
import {YMaps, Map, Placemark, ZoomControl} from 'react-yandex-maps';
import {SubmitButton} from '@app/component/Buttons';
import {Routes} from '@app/routes';
import {useData} from './useData';
import {Container, MapContainer, ButtonContainer} from './styled';

export const EventsPage = () => {
  const history = useHistory();
  const mapRef = useRef<any>(null);
  const {events, signals, isGuest, location, handleChangePosition, showMap} = useData();

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
              {events.map((event) => (
                <Placemark
                  key={`event-${event.id}`}
                  instanceRef={(ref: any) => {
                    ref &&
                      (!ref?.events?.types?.click || ref?.events?.types?.click?.length === 0) &&
                      ref.events.add('click', () => {
                        history.push(
                          generatePath(Routes.EVENT_DETAIL, {
                            id: event.id,
                          }),
                        );
                      });
                  }}
                  geometry={event.address.location}
                  options={{
                    iconLayout: 'default#image',
                    iconImageHref: '/assets/images/Marker.png',
                  }}
                />
              ))}
              {signals.map((signal) => (
                <Placemark
                  key={`signal-${signal.id}`}
                  instanceRef={(ref: any) => {
                    ref &&
                      (!ref?.events?.types?.click || ref?.events?.types?.click?.length === 0) &&
                      ref.events.add('click', () => {
                        history.push(
                          generatePath(Routes.SOS_DETAIL, {
                            id: signal.id,
                          }),
                        );
                      });
                  }}
                  geometry={signal.address.location}
                  options={{
                    iconLayout: 'default#image',
                    iconImageHref: '/assets/images/SosMarker.png',
                  }}
                />
              ))}
            </Map>
          </YMaps>
        )}
        {!isGuest && (
          <ButtonContainer>
            <SubmitButton
              text="Создать ивент"
              type="button"
              onClick={() => {
                history.push(Routes.EVENT_CREATE);
              }}
            />
          </ButtonContainer>
        )}
      </MapContainer>
    </Container>
  );
};
