import React from 'react';
import {IconComponent, TProps} from '@app/component/IconComponents/IconComponent';
import {IconInfoContainer} from '@app/component/IconComponents/IconStyles.style';

type IconInfoProps = {
  text: string;
} & TProps;

export const IconInfo: React.FC<IconInfoProps> = ({text, ...props}: IconInfoProps) => {
  return (
    <IconInfoContainer>
      <div>
        <IconComponent {...props} />
      </div>
      <p>{text}</p>
    </IconInfoContainer>
  );
};
