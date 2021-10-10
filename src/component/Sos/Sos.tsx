import React, {useRef} from 'react';
import {Sos1, Sos2, Sos3} from './Sos.style';
import {ReactComponent as TextSos} from './text.svg';

export const Sos = ({onClick, disabled}: {disabled: boolean; onClick: () => any}) => {
  const timerId = useRef<NodeJS.Timeout>();

  const handlerDown = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.TouchEvent<HTMLButtonElement>,
  ) => {
    timerId.current = setTimeout(() => {
      onClick();
    }, 2000);
    e.preventDefault();
  };

  const handlerUp = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.TouchEvent<HTMLButtonElement>,
  ) => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    e.preventDefault();
  };

  return (
    <Sos1>
      <Sos2>
        <Sos3
          onTouchStart={handlerDown}
          onTouchEnd={handlerUp}
          onMouseDown={handlerDown}
          onMouseUp={handlerUp}
          disabled={disabled}>
          <TextSos />
        </Sos3>
      </Sos2>
    </Sos1>
  );
};
