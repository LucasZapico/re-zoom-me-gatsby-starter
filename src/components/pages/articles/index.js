import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby';

import React, { useState, useEffect } from 'react';
import { generate } from 'shortid';
import { Cta, Layout, LinkOne, LinkTwo, SEO } from '../../_index';
import ArticleCard from './article-card';
import ArticleSearch from './article-search';

const Articles = ({ location }) => {
  // const { publishedArticles } = useStaticQuery(query);
  // const [articles, setArticles] = useState(publishedArticles.edges);

  return (
    <>
      <Container maxW="container.xl" pt={20}>
        <Box>
          <Container maxW="container.lg" centerContent>
            <Heading
              as="h3"
              size="md"
              color="brand.six"
              mb={0}
              variant="montserrat"
            >
              Some helpful articles for common plumbing challenges
            </Heading>
            <Heading as="h1" size="4xl">
              Articles
            </Heading>
          </Container>
          <Box mt={6}>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink as={GatsbyLink} to="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem as={GatsbyLink} to="/articles">
                <BreadcrumbLink>Articles</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <ArticleSearch publishedArticles={publishedArticles} />
        </Box>
        {/* <Box>
          <Grid
            templateColumns="repeat(4, 1fr)"
            templateRows="repeat(2,,1fr)"
            gap={10}
          >
            {articles &&
              articles.map((article, i) => (
                <GridItem
                  key={generate()}
                  colSpan={{
                    base: 4,
                    md: 2,
                    lg: 2,
                    xl: 2,
                  }}
                >
                  <ArticleCard article={article} />
                </GridItem>
              ))}
          </Grid>
        </Box> */}
      </Container>
    </>
  );
};

// export const query = graphql`
//   query {
//     publishedArticles: allMarkdownRemark(
//       sort: { order: DESC, fields: frontmatter___date_created }
//       filter: { fileAbsolutePath: { regex: "/articles/" } }
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 100, format: PLAIN, truncate: true)
//           frontmatter {
//             title
//             path
//             description
//             categories
//             tags
//           }
//           html
//         }
//       }
//     }
//   }
// `;

export default Articles;
