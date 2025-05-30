import React from 'react';
import { Container, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h3" sx={{ mt: 4 }}>
        Welcome to OptiBD
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        We build custom software solutions for logistics and web platforms.
      </Typography>
    </Container>
  );
};

export default HomePage;
