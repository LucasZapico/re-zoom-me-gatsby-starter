import { Box, Button, Flex, Heading, Link } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby';
import { generate } from 'shortid';
import NavSideNav from './nav/sidebar-nav';
import { LinkEmail, LinkPhone } from './links';
import Mark from './../../assets/mark.svg'

const navLinks = [
  // {
  //   name: 'Home',
  //   route: '/',
  // },
  // {
  //   name: 'Services',
  //   route: '/services',
  // },
  // {
  //   name: 'About',
  //   route: '/about',
  // },
  // {
  //   name: 'Testimonials',
  //   route: '/testimonials',
  // },
  // {
  //   name: 'Articles',
  //   route: '/articles',
  // },
  // {
  //   name: 'Pricing',
  //   route: '/pricing',
  // },
];


const MainNav = () => {
  const [isScroll, setIsScroll] = useState(false);
  const navStyles = useSpring({
    height: isScroll ? `2rem` : '3rem',
    backgroundColor: 'pink !important',
  });

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {}, [isScroll]);

  const AnimatedFlex = animated(Flex);

  return (
    <AnimatedFlex
      style={navStyles}
      display={{ base: 'none', lg: 'flex' }}
      overflow="hidden"
      width="100%"
      position="fixed"
      zIndex="999"
      flexDirection="column-reverse"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex
        width="100%"
        height="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box as={GatsbyLink} to="/" display="flex" alignItems="center" ml={1}>
          
          <Heading as="div" size="sm" mb={0}>
            ReSooMe Gatsby Template
          </Heading>
        </Box>
        <Flex justifyContent="flex-end" height="100%">
          {navLinks.map((n, i) => (
            <Box
              
              key={generate()}
              
              
              as={GatsbyLink}
              to={n.route}
              height="100%"
            >
              <Button
                width="100%"
                height="100%"
                size="none"
                variant="none"
                
              >
                {n.name}
              </Button>
            </Box>
          ))}
        </Flex>
      </Flex>
      {/* <SuperNav /> */}
    </AnimatedFlex>
  );
};

const Header = ({ location }) => {
  return (
    <>
      <NavSideNav navLinks={navLinks} location={location} />
      <MainNav navLinks={navLinks} location={location} />
    </>
  );
};

const query = graphql`
  query {
    site {
      siteMetadata {
        phone
      }
    }
    file(relativePath: { eq: "cropped-We_buy_houses.png" }) {
      childImageSharp {
        gatsbyImageData(width: 200)
      }
    }
  }
`;

export default Header;
