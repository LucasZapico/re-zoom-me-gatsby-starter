// import {
//   Box,
//   Link as ChLink,
//   Container,
//   Flex,
//   Heading,
//   Text,
// } from '@chakra-ui/react';
// import { Link, graphql, useStaticQuery } from 'gatsby';


// import React from 'react';
// import { Cta, LinkTwo } from '../_index';

// const ProfileSection = ({ data }) => {
//   const { profileImage } = useStaticQuery(query);
//   return (
//     <Box minH="700px" py={20}>
//       <Container maxW="container.xl">
//         <Flex
//           flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
//           alignItems={{ base: 'center', md: 'flex-start' }}
//           justifyContent="space-between"
//           flexGrow="1"
//           pos="relative"
//         >
//           <Box
//             zIndex="-1"
//             bg="brand.one"
//             height={{ base: '0%', md: '100%' }}
//             width="100%"
//             top="-10%"
//             left="-20%"
//             position="absolute"
//           />

//           <Box
//             flexBasis="50%"
//             mb={20}
//             mr={{ md: 6 }}
//             pos="relative"
//             maxWidth="650px"
//           >
//             <Heading
//               fontWeight="light"
//               size="3xl"
//               fontFamily="Alice"
//               as="h3"
//               lineHeight="base"
//               mb={6}
//             >
//               Hi, I'm Claire
//             </Heading>
//             <Heading as="h3" lineHeight="base" mb={6}>
//               My passion is to assist people to live empowered,
//               fulfilled and happy lives
//             </Heading>
//             <Text lineHeight="base" fontSize="xl">
//               As a graduate of the Hypnotherapy Academy of America, I
//               specialize in using a client focused, results oriented
//               approach to help create a tangible and meaningful
//               environment which is compassionate and confidential.
//             </Text>
//             <LinkTwo my={10} to="/about">
//               Read Claire's Bio
//             </LinkTwo>
//           </Box>

          
//         </Flex>
//       </Container>
//     </Box>
//   );
// };

// export const query = graphql`
//   query {
//     profileImage: file(relativePath: { eq: "claire-profile.jpeg" }) {
//       childImageSharp {
//         fluid(maxWidth: 800) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;

// export default ProfileSection;
