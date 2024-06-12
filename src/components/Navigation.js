import React from 'react';
import { Box, IconButton } from '@mui/material';
import { Home, Person, List, GitHub, Star } from '@mui/icons-material'; // Star 아이콘 추가
import { Link as ScrollLink } from 'react-scroll';

const Navigation = () => {
  return (
    <Box
      position="fixed"
      left={0}
      top="50%"
      transform="translateY(-50%)"
      display="flex"
      flexDirection="column"
      bgcolor="rgba(0, 0, 0, 0.7)"
      borderRadius="0 10px 10px 0"
      p={1}
      zIndex={1000}
    >
      <ScrollLink to="home" smooth duration={500}>
        <IconButton sx={{ color: 'white' }}>
          <Home />
        </IconButton>
      </ScrollLink>

      <ScrollLink to="about" smooth duration={500}>
        <IconButton sx={{ color: 'white' }}>
          <Person />
        </IconButton>
      </ScrollLink>
      <ScrollLink to="skills" smooth duration={500}> 
        <IconButton sx={{ color: 'white' }}>
          <Star />
        </IconButton>
      </ScrollLink>
      <ScrollLink to="projects" smooth duration={500}>
        <IconButton sx={{ color: 'white' }}>
          <List />
        </IconButton>
      </ScrollLink>

      <IconButton href="https://github.com/JeongSunghan" target="_blank" sx={{ color: 'white' }}>
        <GitHub />
      </IconButton>
    </Box>
  );
};

export default Navigation;
