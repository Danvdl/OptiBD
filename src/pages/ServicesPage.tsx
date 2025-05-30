import React from 'react';
import { Container, Typography } from '@mui/material';

const ServicesPage = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4 }}>
        Our Services
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Logistics tools, web development, backend APIs — and more.
      </Typography>
    </Container>
  );
};

export default ServicesPage;
