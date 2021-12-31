import React from 'react';
import {
  Button,
  Heading,
  Box,
  Container,
  Text,
} from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby';

import Resume from './resume';
import {
  HalfbyHalfSection,
} from '../../_index';


import SectionA from './section-a';
import SectionB from './section-b';



const Home = ({ locationFocus, heroContent }) => {
  
  return (
    <Box position="relative" zIndex="0">
      <Box >
      <Resume />
      
      
      </Box>
    </Box>
  );
};

// export const query = graphql`
//   query {
   
//   }
// `;

export default Home;
