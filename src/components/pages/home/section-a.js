import { Container, Box, Heading, Flex } from '@chakra-ui/react';
import React from 'react';
import { AnimatedFadeUpBox } from '../../_index';


const services = [
  {
    title: 'Deliver enhanced care',
    description: '',
  },
  {
    title: 'Manage regulations',

    description: '',
  },
  {
    title: 'Optimize business operations',
    description: '',
  },
  {
    title: 'Create profitable exit strategies',
    description: '',
  },
  {
    title: 'Market for private pay residents',
    description: '',
  },
];

const SectionA = () => {
  return (
    <AnimatedFadeUpBox
      showOffset="300"
      
      borderColor="brand.one"
      borderBottomWidth="2px"
      // borderRight="2px"
      overflow="hidden"
      py={20}
      position="relative"
    >
      <Container
        py={10}
        backgroundColor="brand.one"
        borderRadius="md"
        position="relative"
        maxW="container.xl"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
      ><Box   width={{ base: '100%', lg: '50%' }} pr={{base: 4, lg: 6}}>
        <Heading
          as="h3"
          size="4xl"
        
        >
          Beat the BOTS
        </Heading>
      <Heading size="md" variant="sec" className='readable'>
        Job platforms, recruiters agencies and software are using BOTS to sort through our resumes....some of these bots are Ultron level and some are toasters and if we don't optimize for there keywords we're out of luck.
      </Heading>
        </Box>
        <Flex
          mt={6}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          width={{ base: '100%', lg: '50%' }}
        >
          
        </Flex>
      </Container>
      
    </AnimatedFadeUpBox>
  );
};

export default SectionA;
