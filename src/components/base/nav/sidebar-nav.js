import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Link,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby';
import { generate } from 'shortid';
import { LinkEmail, LinkPhone } from '../../_index';

const NavSideNav = ({ navLinks, location }) => {
  const { site } = useStaticQuery(query);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const openbtnRef = useRef();
  const closebtnRef = useRef();

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    baseUrl,
    contactEmail,
    defaultImage,
    phone,
    address,
  } = site.siteMetadata;

  return (
    <>
      <Flex
        display={{ base: 'flex', lg: 'none' }}
        backgroundColor="brand.zero"
        color="white"
        pos="fixed"
        alignItems="center"
        top="0px"
        width="100%"
        p={2}
        py={6}
        zIndex="9"
      >
        <Box>
          <Link as={GatsbyLink} to="/">
            <Heading as="h5" size="md" marginBottom={0}>
              Autumn Years Network
            </Heading>
          </Link>
        </Box>

        <Spacer />

        <Button ref={openbtnRef} variant="link" onClick={onOpen}>
          <HamburgerIcon boxSize={6} />
        </Button>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        size="md"
        onClose={onClose}
        finalFocusRef={openbtnRef}
      >
        <DrawerOverlay>
          <DrawerContent backgroundColor="brand.zero" pt={6}>
            <Container maxW="container.xl">
              <Box display="flex" justifyContent="flex-end">
                <Button
                  variant="link"
                  ref={openbtnRef}
                  onClick={onClose}
                  display="inline"
                >
                  <CloseIcon boxSize={4} />
                </Button>
              </Box>
              <DrawerHeader>
                <Box mb={10}>
                  <GatsbyLink onClick={onClose} to="/">
                    <Heading as="h5" size="xl" marginBottom={0}>
                      Autumn Years Network
                    </Heading>
                  </GatsbyLink>
                </Box>
              </DrawerHeader>

              <DrawerBody>
                <Flex flexDirection="column" justifyContent="start">
                  {navLinks.map((n) => (
                    <Box key={generate()} mb={6}>
                      <Link
                        onClick={onClose}
                        variant="linkOne"
                        fontSize="xl"
                        to={n.route}
                        as={GatsbyLink}
                      >
                        {n.name}
                      </Link>
                    </Box>
                  ))}
                  <Divider mb={6} />
                  <Box mb={10}>
                    <Box>
                      <LinkEmail>{contactEmail}</LinkEmail>
                    </Box>
                    <Box>
                      <LinkPhone>{phone}</LinkPhone>
                    </Box>
                  </Box>
                  <Box pr={4}>
                    <Button
                      as={GatsbyLink}
                      to="/schedule"
                      size="lg"
                      px={8}
                      variant="btnCTA"
                    >
                      Schedule a Free Consultation
                    </Button>
                  </Box>
                </Flex>
              </DrawerBody>

              <DrawerFooter />
            </Container>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        baseUrl
        contactEmail
        address
        defaultImage: image
        phone
        facebookUsername
        youtubeUsername
        linkedInUsername
      }
    }
  }
`;

export default NavSideNav;
