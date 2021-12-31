import {
  Box,
  Flex,
  Heading,
  Text,
  Divider,
  Container,
  Link,
} from '@chakra-ui/react';
import React, { useState, useLayoutEffect, useRef } from 'react';

import { useSpring, animated, config } from 'react-spring';
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';
import { generate } from 'shortid';
import moment from 'moment';
import { GatsbyImage } from 'gatsby-plugin-image';


import { LinkEmail, LinkPhone } from '../_index';
import SubFooter from './sub-footer';

const pathS = [
  {
    name: 'Home',
    path: '/',
  },
  // {
  //   name: 'About',
  //   path: '/about',
  // },
  // {
  //   name: 'Testimonials',
  //   path: '/testimonials',
  // },
  // {
  //   name: 'Articles',
  //   path: '/articles',
  // },
  // {
  //   name: 'Pricing',
  //   path: '/pricing',
  // },
];

const Social = () => {
  const { site } = useStaticQuery(query);
  const { facebookUsername, youtubeUsername, linkedInUsername } =
    site.siteMetadata;

  return (
    <>
      <Heading as="div"
                      variant="sec" size="md" mb={6} mt={10}>
        Social
      </Heading>
      {facebookUsername && (
        <Link
          
          mb={4}
          fontSize="md"
          href={`https://www.facebook.com/${facebookUsername}`}
          icon={<ExternalLinkIcon />}
        >
          Facebook
        </Link>
      )}
      {youtubeUsername && (
        <Link
          mb={4}
          
          fontSize="md"
          href={`https://www.facebook.com/${youtubeUsername}`}
          icon={<ExternalLinkIcon />}
        >
          Youtube
        </Link>
      )}
      {linkedInUsername && (
        <Link
          mb={4}
          
          fontSize="md"
          href={`https://wwww.linkedin.com/m/${linkedInUsername}`}
          icon={<ExternalLinkIcon />}
        >
          Linkedin
        </Link>
      )}
    </>
  );
};


const SiteLinks = () => (
  <>
    <Heading as="div"
                      variant="sec" size="md" mb={6}>
      Links
    </Heading>
    <Flex flexDirection="column" mr={4}>
      {pathS.map((l, i) => (
        <Link
          
          activeClassName="active"
          mb={4}
          fontSize="sm"
          key={generate()}
          as={GatsbyLink}
          to={l.path}
        >
          {' '}
          {l.name}{' '}
        </Link>
      ))}
    </Flex>
  </>
);

const Footer = ({ title, description, location }) => {
  // const [ref, { height }] = useMeasure();
  const [show, setShow] = useState(true);
  const pathname = location?.pathname;

  const { site } = useStaticQuery(query);

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
    facebookUsername,
    youtubeUsername,
    linkedInUsername,
  } = site.siteMetadata;

  const data = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  };

  const footerStyles = useSpring({
    width: '100%',
    height: show ? '600px' : '20px',
    config: config.slow,
  });

  const ourRef = useRef(null);

  

  const AnimatedFooter = animated(Box);

  return (
    <AnimatedFooter
      py={20}
      ref={ourRef}
      style={{ ...footerStyles, overflow: 'hidden' }}
      
      // position="absolute"
      // bottom="0px"
      // left="0px"
      
    >
      <footer>
        <Box py={10}>
          <Container maxW="container.xl">
            <Box>
              <Flex
                minHeight="100%"
                flexDirection={{
                  base: 'row',
                  md: 'row',
                }}
                flexWrap="wrap"
                justifyContent="space-between"
              >
                <Box
                  // flexGrow="1"
                  flexBasis={{ base: '40%', md: 'auto' }}
                >
                 
                </Box>
                <Box
                  flexGrow="1"
                  flexBasis={{ base: '100%', md: 'auto' }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    pr={{ base: 2, sm: 6 }}
                    pt={{ base: 10, md: 20 }}
                  >
                    <Heading
                      as="div"
                      variant="sec"
                      size="md"

                      mb={6}
                     
                    >
                      Contact
                    </Heading>
                    {contactEmail && (
                      <LinkEmail >
                        {contactEmail}
                      </LinkEmail>
                    )}
                    {phone && (
                      <LinkPhone >
                        {phone}
                      </LinkPhone>
                    )}
                    {/* <Social /> */}
                  </Box>
                </Box>

                <Box
                  flexGrow="1"
                  flexBasis={{ base: '100%', md: 'auto' }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    pr={{ base: 2, sm: 6 }}
                    pt={{ base: 10, md: 20 }}
                  >
                    <Heading
                      as="h4"
                      size="md"
                      mb={6}
                     
                    >
                      Location
                    </Heading>
                    <Heading as="h5" size="sm">
                      {address}
                    </Heading>
                  </Box>
                </Box>
              </Flex>
            </Box>
            <SubFooter />
          </Container>
        </Box>
      </footer>
    </AnimatedFooter>
  );
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Footer.defaultProps = {
  title: null,
  description: null,
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

export default Footer;
