import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills'; // Skills 컴포넌트 추가
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Router>
      <Box>
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Box id="home" className="full-height">
                <Header />
              </Box>
              <Box id="about" className="full-height">
                <About />
              </Box>
              <Box id="skills" className="full-height">
                <Skills />
              </Box>
              <Box id="projects" className="full-height">
                <Projects />
              </Box>
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
