import {useState, useEffect} from 'react';

export const usePosition = () => {
  const [position, setPosition] = useState<any>({});
  const [error, setError] = useState<string>('');

  const success = (pos: any) => {
    const {latitude, longitude} = pos.coords;
    setPosition({latitude, longitude});
  };

  const onError = (error: any) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError('Геолокация не поддерживается браузером');
      return;
    }
    geo.getCurrentPosition(success, onError);

    //Возможно так сделать
    // Подписываемся на изменение геопозиции браузера.
    //  const watcher = geo.watchPosition(success, onError);
    // В случае, если компонент будет удаляться с экрана
    // производим отписку от слежки, чтобы не засорять память.
    // return () => geo.clearWatch(watcher);
  }, []);
  return {...position, error};
};
