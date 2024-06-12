import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, title: 'Mini Project', description: '스키장비 및 경매 웹', techStack: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { id: 2, title: 'Advanced Project', description: '맛집 사이트', techStack: ['Java', 'Spring Boot', 'MySQL'] },
  { id: 3, title: 'Final Project', description: 'To Do List 웹 애플리케이션', techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'] },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      className="full-height"
      sx={{
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        color: 'white',
        textAlign: 'center',
        padding: '80px 20px'
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map(project => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Link to={`/project/${project.id}`} style={{ textDecoration: 'none' }}>
              <Card sx={{ backgroundColor: '#1e1e1e', color: 'white', height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {project.title}
                  </Typography>
                  <Typography color="white">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
