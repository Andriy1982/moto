import {useCallback, useEffect, useRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {throttle} from 'lodash';
//app
import {eventActions, eventSelectors} from '@app/bus/event';
import {userSelectors} from '@app/bus/user';
import {sosActions, sosSelectors} from '@app/bus/sos';
import {useToasts} from 'react-toast-notifications';

type Point = {
  latitude: number;
  longitude: number;
};

export const useData = () => {
  const {addToast} = useToasts();
  const timer = useRef<NodeJS.Timeout>();
  const dispatch = useDispatch();

  const events = useSelector(eventSelectors.getItems);
  const signals = useSelector(sosSelectors.getItems);
  const userRole = useSelector(userSelectors.getCurrentRole);

  const [location, setLocation] = useState<Point>();
  const [showMap, setShowMap] = useState<boolean>(false);
  const [radius, setRadius] = useState<number>(getM(13));

  const getCurrentLocation = useCallback(() => {
    if (!navigator.geolocation) {
      addToast('Не удалось определить Вашу локацию. Проверьте доступность GPS', {
        appearance: 'error',
        autoDismiss: true,
      });
      setShowMap(true);
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setShowMap(true);
        },
        () => {
          addToast('Не удалось определить Вашу локацию. Проверьте доступность GPS', {
            appearance: 'error',
            autoDismiss: true,
          });
          setShowMap(true);
        },
      );
    }
  }, []);

  const getItems = useCallback(() => {
    if (location) {
      const date = new Date();
      const timeZone = date.getTimezoneOffset() / -60;
      dispatch(
        eventActions.fetchItemsAsync({
          skip: 0,
          limit: 50,
          timeZone,
          radiusOfView: radius,
          sortField: 'coordinates',
          ...location,
        }),
      );
    }
  }, [location, radius]);

  const getSignals = useCallback(() => {
    if (location) {
      const date = new Date();
      const timeZone = date.getTimezoneOffset() / -60;
      dispatch(
        sosActions.fetchItemsAsync({
          skip: 0,
          limit: 50,
          timeZone,
          radiusOfView: radius,
          sortField: 'coordinates',
          ...location,
        }),
      );
    }
  }, [location, radius]);

  const getItemsDelete = useCallback(() => {
    if (location) {
      const date = new Date();
      const timeZone = date.getTimezoneOffset() / -60;
      dispatch(
        eventActions.deleteItemsAsync({
          skip: 0,
          limit: 50,
          timeZone,
          radiusOfView: radius,
          sortField: 'coordinates',
          includeDeleted: true,
          includePassed: false,
          ...location,
        }),
      );
    }
  }, [location, radius]);

  const getSignalsDelete = useCallback(() => {
    if (location) {
      const date = new Date();
      const timeZone = date.getTimezoneOffset() / -60;
      dispatch(
        sosActions.deleteItemsAsync({
          skip: 0,
          limit: 50,
          timeZone,
          radiusOfView: radius,
          sortField: 'coordinates',
          includeDeleted: true,
          includePassed: false,
          ...location,
        }),
      );
    }
  }, [location, radius]);

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  useEffect(() => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    getItems();
    getSignals();

    timer.current = setInterval(() => {
      getItemsDelete();
      getSignalsDelete();
    }, 5000);

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [getItems, getSignals, getSignalsDelete, getItemsDelete]);

  const handleChangePosition = useCallback(
    throttle(({latitude, longitude, zoom}: Point & {zoom: number}) => {
      setLocation({latitude, longitude});
      //console.log('metters:', getM(zoom));
      setRadius(getM(zoom));
    }, 300),
    [],
  );

  return {
    events,
    signals,
    handleChangePosition,
    showMap,
    location,
    isGuest: userRole === 'guest',
  };
};

const getM = (zoom: number) => {
  const m = (60000 / Math.pow(2, zoom)) * 6000;
  return Math.round(m);
};
