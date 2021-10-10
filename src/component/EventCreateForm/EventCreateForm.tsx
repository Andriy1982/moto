/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {Ref, useCallback, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Controller} from 'react-hook-form';
//app
import TextFiled from '../TextFiled';
import {TextareaFiled} from '../TextareaFiled';
import {SubmitButton} from '../Buttons';
import {AutoCompleteFilledField} from '@app/component/AutoCompleteFilledField';
//local
import {useData} from './useData';
import {Form, Title, ImageWrapper, Image, Label, Input} from './styled';
import {DateField, TimeField} from '../DateTimeFileds';
import {ModalComponent} from '../ModalComponent/ModalComponent';
import {YMaps, Map, Placemark, ZoomControl} from 'react-yandex-maps';
import {ItemsList} from './ItemsList';

export const EventCreateForm: React.FC = () => {
  const {t} = useTranslation();
  const mapRef = useRef<any>(null);
  const setMapRef = useCallback((instance: Ref<any>) => {
    mapRef.current = instance;
    if (mapRef.current && mapRef.current.events) {
      mapRef.current.events.add('click', function (event: any) {
        const cords = event.get('coords');
        handleChangeLocation({
          lat: cords[0],
          lon: cords[1],
        });
      });
    }
  }, []);

  const [openMap, setOpenMap] = useState(false);
  const {
    errors,
    control,
    time,
    date,
    isLoading,
    substrate,
    textAddress,
    mapLocation,
    daDataAddress,
    onSelectAddress,
    handleUploadSubstrate,
    handleChangeAddress,
    handleChangeLocation,
    setTime,
    setDate,
    onSubmit,
    getCurrentLocation,
    preview,
    onSelectFile,
  } = useData({mapRef});

  const onShow = () => {
    if (mapLocation) {
      mapRef.current.setCenter(mapLocation, 18);
    } else {
      getCurrentLocation();
    }
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Title>Создание события</Title>
        <ImageWrapper>
          <Label isCenter={!!preview}>
            <Image
              src={`${preview ? preview : '/assets/images/web/cover.svg'}`}
              alt="cover"></Image>
            <Input type="file" onChange={onSelectFile} />
            {!preview && <span>Добавьте обложку</span>}
          </Label>
        </ImageWrapper>
        <Controller
          control={control}
          name="name"
          render={({field: {value, onChange}}) => (
            <TextFiled
              inputWrapStyle={{
                marginBottom: 20,
              }}
              label="Название"
              placeholder="Название"
              value={value}
              onChange={onChange}
              error={errors?.name && t(`form.error.${errors.name.message}`)}
            />
          )}
        />
        <AutoCompleteFilledField
          inputWrapStyle={{
            marginBottom: 20,
          }}
          onSelect={handleChangeAddress}
          value={textAddress}
          placeholder="Адрес"
          label="Адрес"
          type="text"
          error={
            (errors?.city || errors?.textAddress || errors?.location) &&
            t(`form.error.invalid_address`)
          }
          iconRight={{
            name: 'place',
            color: 'primary',
            size: 24,
            onPress: () => setOpenMap(true),
          }}
        />
        <DateField
          inputWrapStyle={{
            marginBottom: 20,
          }}
          label="Дата"
          placeholder="Дата"
          value={new Date(date)}
          onChange={(v: Date | null) => {
            if (v) setDate(v.getTime());
          }}
          iconRight={{
            name: 'date',
            color: 'primary',
            size: 20,
          }}
          error={errors?.date && t(`form.error.${errors.date.message}`)}
        />
        <TimeField
          inputWrapStyle={{
            marginBottom: 20,
          }}
          label="Время"
          placeholder="Время"
          value={new Date(time)}
          onChange={(v: Date | null) => {
            if (v) setTime(v.getTime());
          }}
          iconRight={{
            name: 'time',
            color: 'primary',
            size: 20,
          }}
          error={errors?.date && t(`form.error.${errors.date.message}`)}
        />
        <Controller
          control={control}
          name="description"
          render={({field: {value, onChange}}) => (
            <TextareaFiled
              label="Расскажите о событии"
              placeholder="Расскажите о событии"
              value={value}
              onChange={onChange}
            />
          )}
        />
        <SubmitButton type="submit" text="Создать" />
      </Form>
      <ModalComponent
        isActive={openMap}
        toggleActive={() => setOpenMap(!openMap)}
        containerStyle={{
          width: '100%',
          height: '100%',
          paddingBottom: 30,
          paddingTop: 20,
        }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 10,
            overflow: 'hidden',
            position: 'relative',
          }}>
          <YMaps>
            <Map
              onLoad={onShow}
              defaultState={{
                center: [55.751244, 37.618423],
                zoom: 7,
              }}
              instanceRef={setMapRef}
              width={'100%'}
              height={'100%'}>
              <ZoomControl options={{float: 'right', position: {top: 20, right: 20}}} />
              {!!mapLocation && (
                <Placemark
                  geometry={mapLocation}
                  options={{
                    iconLayout: 'default#image',
                    iconImageHref: '/assets/images/Marker.png',
                  }}
                />
              )}
            </Map>
          </YMaps>
          {daDataAddress && daDataAddress.length > 0 && (
            <ItemsList
              items={daDataAddress}
              onSelect={(data) => {
                onSelectAddress(data);
                setOpenMap(false);
              }}
            />
          )}
        </div>
      </ModalComponent>
    </>
  );
};
