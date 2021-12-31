import React from 'react';
import {
  Flex,
  Text,
  Heading,
  Box,
  Container,
  Divider,
} from '@chakra-ui/react';

const TypographySection = () => {
  const TypeOne = () => (
    <Box flexBasis={[100, 50]} py={10}>
      <Heading as="h3" size="2xl">
        Mukta Sans Serif
      </Heading>
      <Heading as="h4" size="lg" variant="" mb={0}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </Heading>
      <Heading as="h4" size="lg" variant="" mb={0}>
        abcdefghijklmnopqrstuvwxyz
      </Heading>
    </Box>
  );
  
  return (
    <>
      <Heading as="h3" size="2xl" variant="Alice">
        Typography
      </Heading>
      <Heading as="h4" size="xl" variant="Alice">
        Font Family
      </Heading>
      <Flex flexWrap="wrap" justifyContent="space-between">
        <TypeOne />
        
      </Flex>
      <Divider />
      <Heading as="h4" size="xl" variant="Alice">
        Sizes
      </Heading>
      <Text className="readable">
        All sizes are responsive and resize accordingly to best
        practices for various screen widths.
      </Text>
      <Heading as="h4" size="4xl">
        Size One
      </Heading>
      <Heading as="h4" size="3xl">
        Size Two
      </Heading>
      <Heading as="h4" size="2xl">
        Size Three
      </Heading>
      <Heading as="h4" size="xl">
        Size Four
      </Heading>
      <Heading as="h4" size="lg">
        Size Five
      </Heading>
      <Heading as="h4" size="md">
        Size Six
      </Heading>
    </>
  );
};

const HeaderVariants = () => {
  return (
    <Box py={10}>
    <Heading as="div" size="lg" mb={0} mr={10}>
          Header Variants
        </Heading>
      <Flex py={10} flexWrap="wrap" alignItems="flex-end">
        <Heading as="div" size="xl" mb={0} mr={10}>
          Default
        </Heading>
        <Heading as="div" size="xl" variant="sec" mb={0} mr={10}>
          Secondary
        </Heading>
      <Heading as="div" size="xl" variant="tri" mb={0} mr={10}>
          Terciary 
        </Heading>
      
      </Flex>
    </Box>
  );
};

const HeaderSets = () => {
  return (
    <>
      <Box py={10}>
        <Heading as="div" size="2xl" mb={0}>
          Some amazing Header
        </Heading>
        <Heading as="div" size="lg">
          Some impressive subheader
        </Heading>
      
      
      </Box>
    </>
  );
};

export const ContentSection = () => (
  <Box py={20}>
    <TypographySection />
    <Divider />
  <HeaderVariants/>
    <Container maxW="container.md">
      <HeaderSets />
      <Heading as="h3" size="2xl">
        Content
      </Heading>
      <Text>
        It's often said that the internet has democratized education:
        the sum of human knowledge is only a Google search away! And
        yet, having access to information is only half of the story;
        you also need to be able to convert raw information into
        usable skills.
      </Text>
      <Text>
        For a lot of us, the gap between the two can lead to things
        like tutorial hell—getting stuck doing tutorial after tutorial
        without ever feeling like you're making substantive progress.
      </Text>
      <Text>
        Learning how to learn effectively is super important,
        especially as a software developer; learning new things is
        practically the whole gig! If you can learn to quickly pick up
        new languages/frameworks/tools, you'll be able to be way more
        productive than the average developer. It's sort of a
        superpower.
      </Text>
      <Text>
        In this blog post, I'll share what I've learned about
        learning, and show you how I pick up new skills lickety-split!
      </Text>
      {/* <Box py={10}>
        <CardOne py={6}>
          <Heading as="h4">Card</Heading>
          <Heading as="h5">Sub header</Heading>
        </CardOne>
      </Box> */}
    </Container>
  </Box>
);
