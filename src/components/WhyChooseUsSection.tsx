import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const points = [
  'Tailored, domain-specific software — not one-size-fits-all.',
  'Agile, scalable architecture built with best practices.',
  'Clear, collaborative communication from start to ship.',
  'Focus on clean UX, maintainable code, and long-term value.',
];

const WhyChooseUsSection = () => (
  <Box sx={{ py: 10, bgcolor: '#F3F4F6' }}>
    <Container>
      <Typography variant="h3" fontWeight="bold" textAlign="center" gutterBottom>
        Why Choose OptiBD?
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
        We don’t just build — we craft software that scales, delights, and delivers value.
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {points.map((point, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Typography
              variant="body1"
              sx={{
                p: 2,
                borderLeft: '4px solid #64FFDA',
                bgcolor: 'white',
                borderRadius: 2,
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              }}
            >
              {point}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default WhyChooseUsSection;
