import React from 'react'
import {Box, Heading, Text} from '@chakra-ui/react'

const Skills = ({ skills }) => {
    return (
      <Box className="skills-wrapper">
        <Heading
          mb={0}
          className="skills-title"
  
        >
          Skills
        </Heading>
        <Box className="skills-items-wrapper">
          {skills && skills.skills.map((s) => (
            <Box className="skills-items">{s}</Box>
          ))}
        </Box>
      </Box>
    );
  };

  export default Skills;