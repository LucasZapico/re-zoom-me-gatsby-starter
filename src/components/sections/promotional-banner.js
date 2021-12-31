import {
  Box,
  Button,
  Link as ChLink,
  Container,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

import { Link } from 'gatsby';
import React from 'react';

const Promotional = () => (
  <Flex
    minHeight="100px"
    width="100%"
    zIndex="0"
    background="brand.six"
    p={4}
    justifyContent="space-between"
  >
    <Container maxWidth="container.xl">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box m={4}>
          <Heading lineHeight="base" as="h5" size="lg">
            $50 off all sessions and packages for the month
            of&nbsp;April
          </Heading>
        </Box>
        <Box m={4}>
          <Link to="/schedule">
            <Button size="lg" px={8} variant="btnTwo">
              Schedule a Free Consultation
            </Button>
          </Link>
        </Box>
      </Flex>
    </Container>
  </Flex>
);

export default Promotional;
