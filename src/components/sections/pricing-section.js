// import {
//   Box,
//   Button,
//   Link as ChLink,
//   Container,
//   Flex,
//   Grid,
//   GridItem,
//   Heading,
//   ListItem,
//   Text,
//   UnorderedList,
// } from '@chakra-ui/react';
// import { Link, graphql } from 'gatsby';

// import React from 'react';
// import { Cta, ScrollAniScale } from '../_index';

// const sessions = [
//   {
//     name: 'Single Session',
//     price: '$175',
//   },
//   {
//     name: 'Three Sessions',
//     price: '$475',
//     discount: '$50',
//   },
//   {
//     name: 'Six Sessions',
//     price: '$875',
//     discount: '$175',
//   },
//   {
//     name: 'Ten Sessions',
//     price: '$1440',
//     discount: '$310',
//   },
// ];

// const PricingSection = ({ locationFocus }) => (
//   <Box py={20}>
//     <Heading as="h3" size="2xl" variant="alice" mb={6}>
//       Session Pricing
//     </Heading>

//     <Grid
//       templateColumns={{ base: 'repeat(4,1fr)' }}
//       templateRows={{ base: '1fr', md: 'repeat(1fr)' }}
//       gap={6}
//     >
//       {sessions.map((s, i) => (
//         <GridItem
//           borderRadius="lg"
//           rowSpan={{ base: '1' }}
//           colSpan={{ base: '4', md: '2', lg: '1' }}
//           key={i}
//           border="2px"
//           borderColor="gray.500"
//           p={6}
//           minW="200px"
//           display="flex"
//           flexDir="column"
//           justifyContent="space-between"
//         >
//           <Heading as="h4" lineHeight="base">
//             {s.name}
//           </Heading>
//           <Box>
//             <Heading as="h4" size="2xl" lineHeight="base" mb={0}>
//               {s.price}
//             </Heading>
//             {s.discount ? (
//               <Heading as="h5" size="sm" lineHeight="base">
//                 (Save, {s.discount})
//               </Heading>
//             ) : (
//               <Heading as="h5" size="sm" lineHeight="base" />
//             )}
//           </Box>
//         </GridItem>
//       ))}
//     </Grid>

//     <Flex
//       justifyContent={{ base: 'center', md: 'space-between' }}
//       alignItems="center"
//       flexWrap="wrap"
//       flexDirection={{ base: 'column', md: 'row' }}
//     >
//       <Cta to="/schedule" my={6}>
//         Schedule a Free 20 min Consultation
//       </Cta>

//       <Box maxWidth="400px" my={6}>
//         <Text lineHeight="base">
//           If you're a veteran, first responder, senior citizen or
//           person under the age of 17 in {locationFocus}, WA, ask about
//           special discounts on your hypnotherapy service.
//         </Text>
//       </Box>
//     </Flex>
//   </Box>
// );

// export default PricingSection;
