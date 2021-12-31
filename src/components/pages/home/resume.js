import React, { useEffect, useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  Container,
  Button,
  Box,
  Flex,
  Link,
  Text,
  Heading,
} from '@chakra-ui/react';
import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby';
import { HalfContainer } from '../../_index';
import axios from 'axios';
import { generate } from 'shortid';
import Education from './education'
import WorkXp from './workxp'
import Introduction from './introduction'
import Skills from './skills'

import {
  log,
  logInfo,
  logDebug,
  logWarn,
  logError,
} from '../../../dev-helpers/console-Log';



const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJ7XCIkb2lkXCI6IFwiNjFhYTE4OTgwODRiYWUzOTc2ZGYyMGM3XCJ9IiwiZW1haWwiOiJhbGV4YWJ1c2g3QGdtYWlsLmNvbSJ9.rx_ep-DWzwVb6ujPc5Q-M8YcE1LbKGEgNiAIQzWFZJc';

  
  
  
  
 const ResumePresent = ({ resume, info }) => {
    console.log(resume);  
  const {
    skills,
    workxp,
    education,
    introduction,
  } = resume;

  return (
    <Container maxW="container.md" py={20}>
    <Box
    
      className="resume-wrapper"
    >
      {info && <Info info={info}/>}
      
      {introduction && <Introduction introduction={introduction}/>}
      
      {workxp && <WorkXp workItems={workxp} />}
      
      {education && <Education education={education} />}
      
      {/* {skills && <Skills skills={skills}/>} */}

    </Box>
    </Container>
  );
};

  
  


const Resume = ({ ...rest }) => {
  const [waiting, setWaiting] = useState(false);
  const [resume, setResume] = useState(null);

  const actionResponse = ({resumes}) => {
    
    setResume(resumes[0]);
  };

  const fetchResume = async () => {
    const handleWait = setWaiting || (() => null);
    const actionType = 'get resume';
    try {
      const payload = {
        action: 'get',
        payload: {
          forPresent: true,
          name: 'Base Resume',
        },
      };

      const data = await axios
        .get(`http://localhost:5000/api/v1/resume_all`, {
          params: { payload },

          proxy: {
            port: 5000
          },
          headers: {
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
        })
        .then((data) => {
          return data;
        })
        .catch((err) => {
          return err;
        });
      logInfo(`${actionType}`);
      if (data.status && data.status >= 200 && data.status < 300) {
        // logging
        logInfo(`${actionType} returned 200 -300`);
        logInfo(`${data.status}, ${data.statusText}`);

        console.log(data.data);
        actionResponse(data.data);
      } else if (
        data.response &&
        data.response.status >= 400 &&
        data.response.status < 500
      ) {
        logError(
          `${data.response.status}, ${data.response.statusText}`
        );
        logWarn(`${actionType} 400 - 500`);
        handleWait(false);
        throw new Error(
          `${data.response.status}, ${data.response.statusText}`
        );
      } else {
        // 500
        logWarn(`${actionType} +500`);
        logError(
          `${data.response.status}, ${data.response.statusText}`
        );
        handleWait(false);
        throw new Error(
          `${data.response.status}, ${data.response.statusText}`
        );
      }
    } catch (err) {
      logError(`${err}`);
    }
  };

  useEffect(() => {
    fetchResume();
  }, []);

  return (
    <Box display="flex" position="relative">
      <Box
        position="relative"
        margin="auto"
        width={{ base: '100%', lg: '70%' }}
      >
        <Container maxW="container.md">
          {resume && <ResumePresent resume={resume}/>}
          
        </Container>
      </Box>
    </Box>
  );
};

export default Resume;
