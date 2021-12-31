import React from 'react';
import { Link, Flex, Box, Text } from '@chakra-ui/react';
import moment from 'moment';
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const SubFooter = () => {
  const { site } = useStaticQuery(query);
  const { defaultTitle } = site.siteMetadata;
  return (
    <Flex
      alignContent="center"
      justifyContent="space-between"
      p={1}
      color="brand.zero"
    >
      <Box display="flex" pr={2}>
        <Text fontSize="xs" mb={0} color="brand.zero">
          {defaultTitle} &copy; {moment().format('YYYY')}
        </Text>

        <Link
          color="brand.zero"
          ml={2}
          fontSize="xs"
          to="/privacy"
          as={GatsbyLink}
        >
          Privacy Policy
        </Link>
      </Box>
      <Box display="flex">
        <Text fontSize="xs" mb={0} color="brand.zero">
          Built By
        </Text>
        <Link
          color="brand.zero"
          ml={2}
          fontSize="xs"
          href="https://bluemonkeymakes.com"
          icon={ExternalLinkIcon}
        >
          BlueMonkeyMakes
        </Link>
      </Box>
    </Flex>
  );
};

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        baseUrl
      }
    }
  }
`;

export default SubFooter;
