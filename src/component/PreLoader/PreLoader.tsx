import React from 'react';
import {Loader, One, Two, Three, Box} from './PreLoader.style';

type TProps = {
  sizePreloader: string;
};

const PreLoader = ({sizePreloader}: TProps) => {
  return (
    <Box>
      <Loader sizePreloader={sizePreloader}>
        <One />
        <Two />
        <Three />
      </Loader>
    </Box>
  );
};

export default PreLoader;
