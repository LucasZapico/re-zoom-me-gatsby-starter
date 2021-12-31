import { ArrowUpIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Banner, Footer, Header } from '../_index';
// import { Favicon } from '../images/ccg-mark_favicon.ico';

const ScrollToTop = () => (
  <Box
    pos="fixed"
    cursor="pointer"
    backgroundColor="white"
    opacity=".7"
    display="flex"
    justifyContent="center"
    alignItems="center"
    bottom="2rem"
    borderRadius="100%"
    right="2rem"
    width="50px"
    height="50px"
    onClick={() => {
      window.scrollTo(0, 0);
    }}
  >
    <ArrowUpIcon style={{ height: '2rem', width: '2rem' }} />
  </Box>
);

const Layout = ({ children, title, description, date, location }) => {
  return (
    <>
      <Box position="relative" backgroundColor="brand.zero">
        <Header location={location} />
        <Box>{children}</Box>
        {/* <Banner /> */}
      </Box>
      <ScrollToTop />
      
{/* 
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/20918615.js"
      /> */}
    </>
  );
};

export const query = graphql`
  query {
    bg: file(relativePath: { eq: "aurora-bg-1.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    bgXL: file(relativePath: { eq: "aurora-bg-2-3500.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export default Layout;
