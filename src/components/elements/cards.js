import React from 'react';
import { Box } from '@chakra-ui/react';

export const CardOne = ({ children, ...rest }) => {
  return (
    <Box
      {...rest}
      display="block"
      transition="all 0.2s ease-in-out"
      border="2px"
      rounded="lg"
      borderColor="gray.700"
      overflow="hidden"
      _hover={{ borderRadius: '40px' }}
    >
      {children}
    </Box>
  );
};
