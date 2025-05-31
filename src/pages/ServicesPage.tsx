import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/servicesdata';

const ServicesPage = () => (
  <Container sx={{ py: 8 }}>
    <Typography variant="h3" fontWeight="bold" gutterBottom>
      Our Services
    </Typography>
    <Typography variant="body1" sx={{ mb: 6, maxWidth: 600 }}>
      From logistics tools and web development to analytics and custom business platforms — OptiBD delivers scalable, maintainable solutions tailored to your operation.
    </Typography>
    <Grid container spacing={4}>
  {services.map((service, idx) => (
    <Grid item xs={12} md={6} key={service.title}>
      <ServiceCard {...service} delay={0.1 * idx} />
    </Grid>
  ))}
</Grid>
  </Container>
);

export default ServicesPage;
