import React from 'react';
import { Heading, Box, Container } from '@chakra-ui/react';

import { ColorSection } from './color-section';
import { ButtonSection } from './buttons-links';
import { ContentSection } from './typography';

const Mark = () => {
  return (
    <Box padding={6} position="relative">
      <Heading
        as="h4"
        size="3xl"
        position="absolute"
        top="30%"
        left="18%"
      >
        Autumn Years Network
      </Heading>
    </Box>
  );
};

const Styleguide = () => {
  return (
    <Box mheight="100vh" py={20}>
      <Container maxW="container.xl">
        <Heading as="h1" size="4xl">
          StyleGuide
        </Heading>
        <Heading
          as="h2"
          variant="Alice"
          size="2xl"
          className="readable"
        >
          Collections of common styles used throughout the project
        </Heading>
        <Box py={10}>
          <Mark />
        </Box>
        <ColorSection />
        <ButtonSection />
        <ContentSection />
      </Container>
    </Box>
  );
};

export default Styleguide;
