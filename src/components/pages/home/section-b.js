import React from 'react';
import {
  Container,
  Button,
  Box,
  Text,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { HalfContainer, AnimatedFadeUpBox } from '../../_index';

const SectionB = () => {
  const { autumnTwo } = useStaticQuery(query);
  const image = getImage(autumnTwo);
  return (
    <AnimatedFadeUpBox
      showOffset="300"
      minH="700px"
      display="flex"
      flexWrap="wrap"
      flexDirection="row-reverse"
      backgroundColor="brand.zero"
      borderColor="brand.one"
      borderTopWidth="2px"
      borderBottomWidth="2px"
      justifyContent="space-between"
      overflow="hidden"
    >
      <Box
        flexShrink="2"
        flexGrow="1"
        display="flex"
        position="relative"
        justifyContent="flex-end"
        width={{ base: '100%', lg: '50%' }}
        overflow="hidden"
        height={{ base: '300px', lg: 'auto' }}
      >
        <GatsbyImage image={image} alt="autumn trees" />
        <Box
          position="absolute"
          height="100%"
          width="100%"
          opacity=".2"
          backgroundColor="brand.zero"
        />
      </Box>
      <Box width={{ base: '100%', lg: '50%' }} pr={10}>
        <HalfContainer className="container-util-xl-l">
          <Box py={20}>
            <Heading
              as="h5"
              size="md"
              variant="sec"
              mb={{ base: '0xp', md: '-20px' }}
              color="brand.three"
            >
              Enabling stuff for stuff
            </Heading>
            <Heading as="h4" size="3xl">
              Care Training
            </Heading>
            <Text fontSize="lg" variant="sec">
              Der gleiche Ansatz ist anzuwenden, wenn das IMM-Modell
              kein Profil für die genaue tägliche Berichterstattung zu
              Zusatzbeträgen, Einschüssen und Nachschüssen. Auf die
              Behandlung von Minderheitsbeteiligungen und die Richtung
              der niedrigsten Standards zu verhindern.
            </Text>
          </Box>
        </HalfContainer>
      </Box>
    </AnimatedFadeUpBox>
  );
};

export const query = graphql`
  query {
    autumnTwo: file(relativePath: { eq: "autumn-two.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export default SectionB;
