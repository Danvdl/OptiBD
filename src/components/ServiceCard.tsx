import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <Paper
  elevation={3}
  sx={{
    p: 4,
    borderRadius: 4,
    height: '100%',
    bgcolor: 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'blur(12px)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px) scale(1.02)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
    },
  }}
>

        <Box sx={{ mb: 2, fontSize: 40 }}>{icon}</Box>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Paper>
    </motion.div>
  );
};

export default ServiceCard;
