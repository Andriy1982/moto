import React from 'react';
import styled from 'styled-components';

export const Label = styled.label`
  background-color: ${({theme}) => theme.background.primary};
  border: 3px solid ${({theme}) => theme.background.default};
  background-image: url('../assets/images/web/foto-button.svg');
  background-repeat: no-repeat;
  background-position: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  cursor: pointer;
`;
export const Input = styled.input`
  margin: 0;
  padding: 0;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`;
type TProps = {
  onFileSelectSuccess: (file: File) => void;
};

export const FileUploader: React.FC<TProps> = ({onFileSelectSuccess}: TProps) => {
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // handle validations
    const file = e.currentTarget.files && e.currentTarget.files[0];
    file && onFileSelectSuccess(file);
  };

  return (
    <Label>
      <Input type="file" onChange={handleFileInput} />
    </Label>
  );
};
