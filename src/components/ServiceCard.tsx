import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { motion } from 'framer-motion';
import type { SvgIconProps } from '@mui/material/SvgIcon';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<SvgIconProps>;
  details?: string[];
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title, description, icon: Icon, details = [], delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay }}
    style={{ height: '100%' }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: 5,
        boxShadow: '0 4px 24px rgba(10,25,47,0.07)',
        border: '1.5px solid #e0e7ef',
        bgcolor: 'white',
        transition: 'transform 0.25s, box-shadow 0.25s',
        height: '100%',
        '&:hover': {
          transform: 'translateY(-8px) scale(1.03)',
          boxShadow: '0 12px 32px rgba(10,25,47,0.12)',
          borderColor: '#64FFDA',
        },
      }}
    >
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #0A192F 50%, #64FFDA 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
          boxShadow: '0 2px 12px rgba(100,255,218,0.10)',
        }}
      >
        <Icon sx={{ color: 'white', fontSize: 32 }} />
      </Box>
      <Typography variant="h6" fontWeight={800} gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: details.length ? 2 : 0 }}>
        {description}
      </Typography>
      {details.length > 0 && (
        <List dense>
          {details.map((detail, idx) => (
            <ListItem key={idx} sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckRoundedIcon sx={{ color: '#64FFDA' }} fontSize="small" />
              </ListItemIcon>
              <Typography variant="body2">{detail}</Typography>
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  </motion.div>
);

export default ServiceCard;
