import React from 'react';
import { Box, Typography } from '@mui/material';

const SkillTag = ({ skill, icon }) => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #555',
        borderRadius: '8px',
        padding: '5px 10px',
        margin: '5px',
        color: '#555',
        backgroundColor: 'white',
        minWidth: '100px',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
    >
      {icon && <Box mr={1}>{icon}</Box>}
      <Typography variant="body2">{skill}</Typography>
    </Box>
  );
};

export default SkillTag;
