import React from 'react'
import {Flex,Box, Heading, Text} from '@chakra-ui/react'
import {generate} from 'shortid'

const WorkXp = ({ workItems }) => {
    return (
      <Box className="workxp-wrapper" py={6}>
        <Heading
          mb={0}
          as="div"
            size="md"
            variant="sec"
          className="workxp-title"
        >
          Work Experience
        </Heading>
        <Box className="workxp-items-wrapper">
          {workItems && workItems.map((items) => (
            <Box
              py={4}
              className="workxp-items"
              key={generate()}
              
            >
              <Flex justifyContent="space-between" >
              <Heading
              as="div"
            size="lg"
            
                mb={0}
                size="md"
                className="workxp-item-role"
              >
                {items.role}
              </Heading>
              <Flex className="workxp-item-period">
                <Text
                  mb={0}
                  className="workxp-item-period"
                >
                  {items.startDate}
                  {' '}
                  -
                </Text>
                <Text
                  mb={0}
                  className="workxp-item-period"
                >
                  {items.endDate}
                </Text>
              </Flex>
              </Flex>
              <Flex justifyContent="space-between" pb={2}>
              <Heading
              as="div"
            size="md"
            variant="sec"
                mb={0}
                className="workxp-item-company"
              >
                {items.company}
              </Heading>
              <Text
                mb={0}
                className="workxp-item-location"
              >
                {items.location}
              </Text>
              </Flex>
              {items.descriptions.length > 0
              && (
              <Text
                mb={0}
                className="workxp-item-description"
              >
                {items.descriptions[0].description}
              </Text>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    );
  };
  
  export default WorkXp