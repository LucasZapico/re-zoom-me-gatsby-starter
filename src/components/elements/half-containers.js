import React from 'react';
import { Box } from '@chakra-ui/react';

const container = {
  xl: {
    l: 'container-util-xl-l',
    r: 'container-util-xl-r',
  },
};

const HalfContainer = ({ className, cSize, children, ...rest }) => {
  console.log('csize', cSize);

  return (
    <Box {...rest} className={(cSize, className)}>
      {children}
    </Box>
  );
};

export default HalfContainer;
