import React from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';

const FullBleedContentImageSection = ({
  backgroundColor = '',
  contentBlock = '',
  bleedBlock = '',
  reverse = false,
  ...rest
}) => {
  return (
    <Box
      {...rest}
      display="flex"
      flexWrap="wrap"
      flexDirection={reverse ? 'row' : 'row-reverse'}
      backgroundColor={backgroundColor}
      pos="relative"
      overflow="hidden"
      zIndex="0"
    >
      <Box
        zIndex="-1"
        pos={{ base: 'static', lg: 'absolute' }}
        right={reverse ? '' : '0'}
        top="0"
        left={reverse ? '0' : ''}
        overflow="hidden"
      >
        {bleedBlock}
      </Box>
      <Container
        display="flex"
        maxW="container.xl"
        flexDirection={reverse ? 'row-reverse' : 'row'}
      >
        {contentBlock}
      </Container>
    </Box>
  );
};

export default FullBleedContentImageSection;
