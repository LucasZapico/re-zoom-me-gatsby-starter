import {
  Box,
  Link as ChLink,
  Container,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import React, { useRef } from 'react';
import { animated as a, useSpring } from 'react-spring';

import { generate } from 'shortid';
import {
  Cta,
  FAQSection,
  FeaturedArticlesSection,
  FeaturedTestimonialsSection,
  HomeHero,
  PricingSection,
  ProfileSection,
  ScrollAniScale,
} from '../_index';

const SectionOne = ({ oneImage }) => {
  return (
    <Box minH="500px" zIndex="1" py={10}>
      <Container maxW="container.xl">
        <Flex
          // backgroundColor="brand.one"
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          py={10}
          position="relative"
          flexWrap="wrap"
        >
          <Box flexBasis={{ base: '100%', lg: '50%' }}>
            <Box pos="relative">
             
              <Box p={{ base: 0, md: 4 }} mb={6}>
                <Heading
                  pos="absolute"
                  top="10%"
                  left={{ base: '0%', md: '-10%' }}
                  right="10%"
                  as="h3"
                  size="2xl"
                  fontFamily="Alice"
                  lineHeight="base"
                  width={{ base: '100vw', md: 'auto' }}
                  zIndex="1"
                  p={10}
                  color="brand.zero"
                  bg="brand.three"
                >
                  Hypnotherapy can help make lasting transition to a
                  healthier happier you.
                </Heading>
              </Box>
            </Box>
          </Box>

          <Box
            flexBasis={{ base: '100%', lg: '50%' }}
            p={{ base: 0, md: 10 }}
            m="auto"
          >
            <Heading as="h4" mb={10}>
              Begin a lasting journey to a happier healthier you.
            </Heading>
            <Cta to="/schedule">Schedule a Free Consultation</Cta>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export const HomePageTemplate = ({
  data,
  heroContent,
  locationFocus,
}) => {
  const { stoneStackImage, bgImage, oneImage } =
    useStaticQuery(query);
  const ref = useRef();

  return (
    <>
      
      <Box minH="700px" pt={{ base: 10, md: 20 }}>
        <HomeHero data={heroContent} />
        <ProfileSection />
        <FeaturedArticlesSection />
        <FeaturedTestimonialsSection />

        <Box py={20} backgroundColor="brand.two">
          <Container
            maxW="container.xl"
            display="flex"
            flexWrap="wrap"
          >
            <Box flexBasis={{ base: '100%', md: '50%' }}>
              <Box mb={10}>
                <Text as="em" fontSize="lg">
                  "Hypnotherapy can be used to help you gain control
                  over undesired behaviors or to help you cope better
                  with anxiety or pain. Hypnosis that's conducted by a
                  trained therapist or health care professional is
                  considered a safe, complementary and alternative
                  medical treatment." — Mayo Clinic
                </Text>
              </Box>
              <Heading as="h4" size="lg" lineHeight="base" mb={10}>
                Clinical Hypnotherapist Claire Morency offers
                hypnotherapy services in {locationFocus}, WA.
              </Heading>
              <Cta to="/schedule">Schedule a Consultation Today</Cta>
            </Box>
            
          </Container>
        </Box>

        <FAQSection data={data} />
        <PricingSection locationFocus={locationFocus} />
        <SectionOne oneImage={oneImage} />
      </Box>
    </>
  );
};

export const query = graphql`
  query {
    oneImage: file(
      relativePath: { eq: "pawel-nolbert-xe-ss5Tg2mo-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    twoImage: file(
      relativePath: { eq: "sean-o-KMn4VEeEPR8-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bgImage: file(relativePath: { eq: "clouds-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    stoneStackImage: file(relativePath: { eq: "stack-stone.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default HomePageTemplate;
