import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography, Box } from '@mui/material';

const AboutPage = () => (
  <Container sx={{ py: 10 }}>
    <Helmet>
      <title>About | OptiBD</title>
      <meta name="description" content="Learn about BD Consulting (OptiBD) – our mission, story, and vision for optimized software in logistics and web development." />
    </Helmet>
    <Typography variant="h3" fontWeight="bold" gutterBottom>
      About OptiBD
    </Typography>
    
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We started OptiBD with a single vision: to help businesses thrive by bringing efficiency, automation, and modern tech to logistics and operations. As developers and friends, we combine technical excellence with domain expertise, delivering custom solutions that scale as you grow.
      </Typography>
      <Typography variant="body1">
        Our mission is to provide clean, maintainable, and high-impact code for every project. Whether you're a startup or a scaling operation, we're here to help optimize your workflow.
      </Typography>
    </Box>
    {/* Optionally, add case studies/testimonials here */}
  </Container>
);

export default AboutPage;
