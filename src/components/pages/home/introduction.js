
import React from 'react'
import {Box, Heading, Text} from '@chakra-ui/react'

const Introduction = ({introduction}) => {
  console.log('intro')
  console.log(introduction)
  return (
     <Box className="introduction-wrapper" py={6}>
          <Heading
            mb={4}
            as="div"
            size="md"
            variant="sec"
            className="introduction-title"
          >
            Introduction
          </Heading>
          <Text
            mb={0}
            className="introduction"
          >
          {introduction[0].introduction}
          </Text>
        </Box>
  )
}

export default Introduction
