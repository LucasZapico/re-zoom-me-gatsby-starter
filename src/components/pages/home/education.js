import React from 'react'
import {Box, Heading, Text, Flex} from '@chakra-ui/react'

const Education = ({ education }) => {
    const {
      name,
      institution,
      field,
      location,
      level,
      currently_enrolled: currentlyEnrolled,
      attend_start: attendStart,
      attned_end: attendEnd,
      description,
    } = education;
    return (
      <Box className="education-wrapper" py={6}>
        <Heading
          mb={0}
          className="education-title"
          as="div"
            size="md"
            variant="sec"
        >
          Education
        </Heading>
        <Box className="education-items-wrapper">
          {education && education.map((e) => (
            <Box className="education-items" py={4}>
            <Flex justifyContent="space-between" pb={2}>
              <Heading
                as="div"
            size="md"
            
                mb={0}
                className="education-institution"
              >
                {e.institution}
              </Heading>
              <Text
                mb={0}
                className="education-location"
              >
                {e.location}
              </Text>
              </Flex>

              <Text
                mb={0}
                className="education-field"
              >
                {e.field}
              </Text>
              <Flex className="education-period">
                <Text
                  mb={0}
                  className="education-start"
                >
                  {e.attendStart}
                </Text>
                <Text
                  mb={0}
                  className="education-end"
                >
                  {e.attendEnd}
                </Text>
              </Flex>
            </Box>
          ))}
        </Box>
      </Box>
    );
  };
  
export default Education
