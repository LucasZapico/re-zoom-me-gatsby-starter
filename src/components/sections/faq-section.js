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
// import { Link, graphql, useStaticQuery } from 'gatsby';
// import React, { useRef } from 'react';


// const FAQSection = ({ data }) => {
//   const { bgImageTwo } = useStaticQuery(query);
//   const ref = useRef();
//   //
//   return (
//     <Box>
//       <Container maxW="container.xl">
//         <Flex flexWrap="wrap" minH="700px" pt={40} flexGrow="1">
//           <Box
//             minHeight="400px"
//             height="auto"
//             flexBasis={{ base: '100%', md: '50%' }}
//             p={{ base: 0, md: 6 }}
//           >
//             <Heading
//               as="h4"
//               size="xl"
//               variant="alice"
//               minHeight="150px"
//               id="what-is-hynotherapy"
//             >
//               What Is Hypnotherapy?
//             </Heading>
//             <Text lineHeight="base" fontSize="xl" mb={6}>
//               Hypnotherapy is a natural state of mind with the
//               extraordinary quality of mental and physical relaxation
//               with numerous benefits.
//             </Text>
//           </Box>
//           <Box
//             minHeight="400px"
//             height="auto"
//             flexBasis={{ base: '100%', md: '50%' }}
//             p={{ base: 0, md: 6 }}
//           >
//             <Heading
//               as="h4"
//               size="xl"
//               variant="alice"
//               minHeight="150px"
//               id="is-hynotherapy-right-for-you"
//             >
//               Is Hypnotherapy Right For You?
//             </Heading>
//             <Text lineHeight="base" fontSize="xl">
//               If you&apos;re suffering from anxiousness, emotions
//               related to pain or ready to achieve higher personal or
//               professional goals, hypnotherapy may be a great fit for
//               you.
//             </Text>
//           </Box>
//           <Box
//             minHeight="400px"
//             height="auto"
//             flexBasis={{ base: '100%', md: '50%' }}
//             p={{ base: 0, md: 6 }}
//           >
//             <Heading
//               as="h4"
//               size="xl"
//               variant="alice"
//               minHeight="150px"
//               id="what-you-can-expect"
//             >
//               What You Can Expect?
//             </Heading>
//             <Text lineHeight="base" fontSize="xl">
//               Clients experience transformative results ranging from
//               relief from stress and anxiousness to personal growth
//               and development.
//             </Text>
//           </Box>
//           <Box
//             minHeight="400px"
//             height="auto"
//             flexBasis={{ base: '100%', md: '50%' }}
//             p={{ base: 0, md: 6 }}
//           >
//             <Heading
//               as="h4"
//               size="xl"
//               variant="alice"
//               minHeight="150px"
//               id="what-hypnotherapy-can-do"
//             >
//               What Hypnotherapy Can Do?
//             </Heading>

//             <UnorderedList fontSize="xl" lineHeight="base">
//               <ListItem>Enthusiasm for Life</ListItem>
//               <ListItem>Build Confidence and Purpose</ListItem>
//               <ListItem>Achieve Business Goals</ListItem>
//               <ListItem>Increase Quality of Sleep</ListItem>
//             </UnorderedList>
//           </Box>
//         </Flex>
//       </Container>
      
//     </Box>
//   );
// };

// export const query = graphql`
//   query {
//     bgImageTwo: file(
//       relativePath: { eq: "sean-o-KMn4VEeEPR8-unsplash.jpg" }
//     ) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;

// export default FAQSection;
