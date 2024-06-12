import React from 'react';
import { Box, Typography } from '@mui/material';
import SkillTag from './SkillTag';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDatabase, FaGitAlt, FaGoogleDrive, FaJira } from 'react-icons/fa';
import { SiSpringboot, SiFirebase, SiNotion } from "react-icons/si";

const About = () => {
  const frontEndSkills = [
    { skill: 'HTML', icon: <FaHtml5 color="orange" /> },
    { skill: 'CSS', icon: <FaCss3Alt color="blue" /> },
    { skill: 'JavaScript', icon: <FaJs color="yellow" /> },
    { skill: 'React', icon: <FaReact color="#61dafb" /> },
  ];
  const backEndSkills = [
    { skill: 'Java', icon: <FaJava color="#007396" /> },
    { skill: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" /> },
    { skill: 'MyBatis', icon: <FaDatabase color="#007396" /> },
  ];
  const devOpsSkills = [
    { skill: 'MySQL', icon: <FaDatabase color="#4479A1" /> },
    { skill: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
    { skill: 'GitHub', icon: <FaGitAlt color="#181717" /> },
    { skill: 'Notion', icon: <SiNotion color="#000000" /> },
    { skill: 'Google Drive', icon: <FaGoogleDrive color="#4285F4" /> },
    { skill: 'Jira', icon: <FaJira color="#0052CC" /> },
  ];

  return (
    <Box mt={-25}
      id="about"
      className="full-height-container"
      sx={{
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        color: 'white',
        textAlign: 'left',
        padding: '80px 20px'
      }}
    >
      <Box mb={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          ABOUT ME
        </Typography>
      </Box>
      <Box mb={8}>
        <Typography variant="h5" component="h3" gutterBottom>
          MY SKILLS
        </Typography>
      </Box>
      <Box px={4}>
        <Box mb={4}>
          <Typography variant="h6" component="h4" gutterBottom>
            Front-End
          </Typography>
          <Box display="flex" justifyContent="flex-start" flexWrap="wrap">
            {frontEndSkills.map((skillObj, index) => (
              <SkillTag key={index} skill={skillObj.skill} icon={skillObj.icon} />
            ))}
          </Box>
        </Box>
        <Box mb={4}>
          <Typography variant="h6" component="h4" gutterBottom>
            Back-End
          </Typography>
          <Box display="flex" justifyContent="flex-start" flexWrap="wrap">
            {backEndSkills.map((skillObj, index) => (
              <SkillTag key={index} skill={skillObj.skill} icon={skillObj.icon} />
            ))}
          </Box>
        </Box>
        <Box mb={4}>
          <Typography variant="h6" component="h4" gutterBottom>
            DevOps & Collaboration
          </Typography>
          <Box display="flex" justifyContent="flex-start" flexWrap="wrap">
            {devOpsSkills.map((skillObj, index) => (
              <SkillTag key={index} skill={skillObj.skill} icon={skillObj.icon} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
