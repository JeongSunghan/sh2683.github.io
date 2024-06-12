import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const projects = [
    {
        id: 1,
        title: 'Mini Project',
        description: '스키장비 및 경매 웹',
        githubLink: 'https://github.com/JeongSunghan/miniProject',

    },

    {
        id: 2,
        title: 'Advanced Project',
        description: '맛집 사이트',
        githubLink: 'https://github.com/JeongSunghan/FoodProject',
    },

    {
        id: 3,
        title: 'Final Project',
        description: 'To Do List 웹 애플리케이션',
        githubLink: 'https://github.com/Tetrodomino/FlownaryReact',

    },
];

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(proj => proj.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return <Typography variant="h4">Project not found</Typography>;
    }

    return (
        <Box p={5} pt={5} sx={{ background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)', color: 'white' }} minHeight="100vh">
            <Button variant="contained" color="primary" onClick={() => navigate(-1)} sx={{ mb: 4 }}>
                뒤로가기
            </Button>
            <Typography variant="h3" gutterBottom>
                {project.title}
            </Typography>
            <Typography variant="h5" gutterBottom>
                {project.description}
            </Typography>
            <Typography variant="h6" gutterBottom>
                <a href={project.githubLink} style={{ color: 'white', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                    깃허브 링크: {project.githubLink}
                </a>
                <br />
                <a href={project.githubLink2} style={{ color: 'white', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                    {project.githubLink2}
                </a>
            </Typography>            
        </Box>
    );
};

export default ProjectDetail;
