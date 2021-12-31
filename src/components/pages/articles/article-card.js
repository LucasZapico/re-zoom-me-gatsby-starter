import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Heading, Text, Box } from '@chakra-ui/react';
import { generate } from 'shortid';
import { CardOne, Tag } from '../../_index';

const ArticleCard = ({ article }) => {
  const { title, description, categories, tags, path, excerpt } =
    article.node.frontmatter;
  return (
    <CardOne p={4} height="100%" as={GatsbyLink} to={path}>
      <Box
        pr={{ base: 4, md: 6 }}
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        height="100%"
      >
        <Heading fontFamily="Alice" as="h4" size="xl">
          {title}
        </Heading>
        <Text fontSize="xl" mb={6} noOfLines={2}>
          {description}
        </Text>
        <Text fontSize="md" mb={6}>
          {excerpt}
        </Text>
        <Box className="link-two">Read More</Box>
      </Box>
    </CardOne>
  );
};

export default ArticleCard;
