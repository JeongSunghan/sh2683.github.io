import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { FaPuzzlePiece, FaRedo, FaBolt } from 'react-icons/fa';

const skills = [
  {
    title: '끈기있는 모습',
    description: '어떤 문제가 생기거나 해결하지 못한 문제가 있다면 무슨 일이 있어도 해결하는 모습',
    icon: <FaPuzzlePiece size={48} />,
  },
  {
    title: '반복 학습',
    description: '모르는 부분이 있거나 이해가 되지 않는 문제가 있을 시 이해하기 위해 질문 혹은 반복학습',
    icon: <FaRedo size={48} />,
  },
  {
    title: '빠른 처리',
    description: '계획에 차질이 생기거나 혹은 에러가 있다면 최대한 빨리 해결하기 위해 해결책을 빠르게 내놓거나 처리',
    icon: <FaBolt size={48} />,
  },
];

const Skills = () => {
  return (
    <Box id="skills" className="full-height" sx={{ background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)', color: 'white', textAlign: 'center', padding: '80px 20px' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        핵심 역량
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper sx={{ padding: 13.5, backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
              <Box display="flex" flexDirection="column" alignItems="center">
                {skill.icon}
                <Typography variant="h6" component="h3" gutterBottom>
                  {skill.title}
                </Typography>
                <Typography variant="body1" component="p">
                  {skill.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
