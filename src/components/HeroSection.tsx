import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const HeroSection = () => {
  return (
    <Box
    sx={{
      background: 'linear-gradient(to right, #0A192F, #102841)',
      color: 'white',
      py: { xs: 8, md: 14 },
      px: 2,
      textAlign: 'center',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            fontWeight={700}
            sx={{
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Optimized Software for Modern Logistics
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            We build smart, scalable systems for operations, inventory, and digital platforms.
          </Typography>
          <Button
  variant="contained"
  size="large"
  color="secondary"
  component={Link}
  to="/services"
  sx={{ textTransform: 'none', fontWeight: 600 }}
>
  View Our Services
</Button>

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 0.8 }}
  transition={{
    duration: 1,
    delay: 1.5,
    repeat: Infinity,
    repeatType: 'reverse',
  }}
  style={{ marginTop: '3rem' }}
>
  <KeyboardArrowDownIcon sx={{ fontSize: 36, color: 'white' }} />
</motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;
