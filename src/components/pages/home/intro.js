import React from 'react'
import {Flex, Box, Heading, Text} from '@chakra-ui/react'

const Info = ({ info }) => {
  
    return (
      <Box className="infro-wrapper">
        <Heading
          mb={0}
          className="infro-title"
  
        >
          {info.name}
        </Heading>
        <Flex className="infro-items-wrapper">
          <Text>{info.email}</Text>
        </Flex>
      </Box>
    );
  };

  export default Info;