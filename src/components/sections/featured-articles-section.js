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


// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import React from 'react';
// import { generate } from 'shortid';
// import { ThirdByTwoThirdSection, LinkTwo } from '../_index';

// const FeaturedArticles = ({ featuredArticles }) => {
//   return (
//     <Container maxW="container.xl">
//       <Grid
//         templateRows="repeat(1, 1fr)"
//         templateColumns="repeat(6, 1fr)"
//         gap={10}
//         width="100%"
//       >
//         {featuredArticles.edges.map((art, i) => (
//           <GridItem
//             // mb={{ base: 10, md: 10, lg: 10 }}
//             key={generate()}
//             p={4}
//             transition="all 0.2s ease-in-out"
//             border="2px"
//             rounded="lg"
//             borderColor="gray.700"
//             _hover={{ borderRadius: '40px' }}
//             colSpan={{
//               base: 6,
//               md: 3,
//               lg: 3,
//               xl: 2,
//             }}
//           >
//             <Link
//               style={{ height: '100%' }}
//               to={art.node.frontmatter.path}
//             >
//               <Box
//                 pr={{ base: 4, md: 6 }}
//                 display="flex"
//                 flexDir="column"
//                 justifyContent="space-between"
//                 height="100%"
//               >
//                 <Heading fontFamily="Alice" as="h4" size="lg">
//                   {art.node.frontmatter.title}
//                 </Heading>
//                 {/* <Text fontSize="xl" mb={6} noOfLines={2}>
//                   {art.node.frontmatter.description}
//                 </Text> */}
//                 <Text fontSize="md" mb={6}>
//                   {art.node.excerpt}
//                 </Text>
//                 <Box className="link-two">Read More</Box>
//               </Box>
//             </Link>
//           </GridItem>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// const FeaturedArticlesSection = () => {
//   const { featuredArticles, flareOne } = useStaticQuery(query);
//   const flareImgOne = getImage(flareOne);
//   return (
//     <Box py={20}>
//       <Container maxW="container.xl">
//         <ThirdByTwoThirdSection
//           left={
//             <>
//               <Heading as="h2" size="2xl" fontFamily="Alice">
//                 What Hypnotherapy Can Do?
//               </Heading>

//               <Heading
//                 mb={6}
//                 as="h3"
//                 size="md"
//                 lineHeight="base"
//                 className="readable"
//                 maxW={{ base: '100%', lg: '60%' }}
//               >
//                 Hypnotherapy has a broad set of applications from pain
//                 relief to working through negative thought patterns.
//               </Heading>
//               <LinkTwo mb={10} to="/articles">
//                 See All Articles
//               </LinkTwo>
//             </>
//           }
//           right={
//             <Box position="relative" zIndex="-1" width="100%">
//               <GatsbyImage
//                 alt="flare image"
//                 image={flareImgOne}
//                 position="absolute"
//                 right="0px"
//                 top="-20px"
//                 zIndex="-1"
//               />
//             </Box>
//           }
//         />
//       </Container>

//       <FeaturedArticles featuredArticles={featuredArticles} />
//     </Box>
//   );
// };

// export const query = graphql`
//   query {
//     flareOne: file(relativePath: { eq: "stack-stone.png" }) {
//       childImageSharp {
//         gatsbyImageData
//       }
//     }
//     featuredArticles: allMarkdownRemark(
//       limit: 6
//       filter: {
//         fileAbsolutePath: { regex: "/articles/" }
//         frontmatter: { featured: { eq: true } }
//       }
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 100, format: PLAIN, truncate: true)
//           frontmatter {
//             title
//             description
//             path
//           }
//         }
//       }
//     }
//   }
// `;

// export default FeaturedArticlesSection;
