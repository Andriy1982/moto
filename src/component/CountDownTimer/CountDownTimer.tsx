import React, {useEffect, useState} from 'react';

import {Text} from './CountDownTimer.style';

type TProps = {
  seconds: number;
  minutes: number;
  onEnded?: () => void;
};

export const CountDownTimer: React.FC<TProps> = ({seconds = 0, minutes = 0, onEnded}: TProps) => {
  const [isEnd, setIsEnd] = useState(false);
  const [time, setTime] = useState({
    seconds,
    minutes,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!(time.seconds === 0 && time.minutes === 0)) {
        const s = time.seconds === 0 ? 59 : time.seconds - 1;
        let m;
        if (time.seconds === 0) {
          m = time.minutes === 0 ? 59 : time.minutes - 1;
        } else {
          m = time.minutes;
        }

        const newTime = {
          seconds: s,
          minutes: m,
        };

        if (m === 0 && s === 0) {
          setIsEnd(true);
        }

        setTime(newTime);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [isEnd, time]);

  useEffect(() => {
    if (isEnd && onEnded) {
      onEnded();
    }
  }, [onEnded, isEnd]);

  return (
    <Text>
      {getTen(time.minutes)}:{getTen(time.seconds)}
    </Text>
  );
};

const getTen = (v: number) => {
  return v < 10 ? `0${v}` : v;
};
