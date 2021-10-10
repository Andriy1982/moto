import React, {useEffect} from 'react';
import Modal from 'react-modal';
import {useTheme} from 'styled-components';
//app
import {BackIcon} from '@app/component/Icons/Back';

type Props = {
  children: React.ReactNode;
  isActive: boolean;
  toggleActive: () => void;
  backgroundColor?: string;
  inset?: string;
  containerStyle?: React.CSSProperties;
};

export const ModalComponent = ({
  children,
  isActive,
  toggleActive,
  backgroundColor,
  inset = ' 0px',
  containerStyle = {
    padding: '20px',
  },
}: Props) => {
  const {text, border, background} = useTheme();

  const customStyles = {
    content: {
      color: text.light,
      backgroundColor: backgroundColor || background.default,
      inset: inset,
      overflow: 'hidden',
      maxHeight: '100vh',
      overflowY: 'auto',
    },
  };
  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  return (
    <div>
      <Modal
        isOpen={isActive}
        onRequestClose={toggleActive}
        /* @ts-ignore */
        style={customStyles}
        contentLabel="Example Modal">
        <div onClick={toggleActive}>
          <BackIcon size={20} fill={border.light} />
        </div>
        <div style={containerStyle}>{children}</div>
      </Modal>
    </div>
  );
};
