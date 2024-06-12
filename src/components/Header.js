import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="100vh"
      sx={{
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        padding: '80px 20px'
      }}
    >
      <Box flex={1} color="white" textAlign="left" p={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          안녕하세요! 반갑습니다.
        </Typography>
        <Typography variant="h2" component="h2" gutterBottom>
          I'M <span style={{ color: '#4479A1' }}>Junior Developer</span>
        </Typography>

        <Typography variant="body1" paragraph>
          저는 웹 개발 분야에서 배우고 성장하고자 하는 열정적이며
          즐겁게 그리고 팀을 위한 개발자입니다.
          저의 목표는 신입 개발자로서 열정적인 모습과 지속적인 학습
          자기 계발을 통해 최신 기술 트렌드를 습득하고
          발전된 개발자로서의 역량을 키우고 싶습니다.
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom>
          PERSONAL INFOS
        </Typography>
        <Typography variant="body1" paragraph>
          Name: 정성한 <br />
          Phone: 010-2407-5930 <br />
          Email: jsh000311@gmail.com <br />
          Age: 25, 2000.03 <br />
          Address: 경기도 수원시
        </Typography>
        <Button variant="contained" color="primary">
          MORE ABOUT ME
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
