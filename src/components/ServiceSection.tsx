
import { Box, Container, Grid, Typography } from '@mui/material';
import ServiceCard from './ServiceCard.tsx';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';


const ServicesSection = () => {
  return (
    <Box sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container>
        <Typography variant="h3" fontWeight="bold" textAlign="center" gutterBottom>
          What We Do
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
          OptiBD specializes in building scalable, elegant software solutions tailored to modern logistics and web infrastructure.
        </Typography>
        <Grid container spacing={4}>
          <Grid >
            <ServiceCard
              title="Logistics Software"
              description="Custom inventory, routing, optimization tools tailored for operational efficiency."
              icon={StorageRoundedIcon}
            />
          </Grid>
          <Grid >
            <ServiceCard
              title="Web & API Development"
              description="Robust, secure backend services and clean modern UIs using the latest stacks."
              icon={StorageRoundedIcon}
              delay={0.1}
            />
          </Grid>
          <Grid >
            <ServiceCard
              title="Custom Platforms"
              description="From idea to MVP — we build scalable tools that grow with your business."
              icon={StorageRoundedIcon}
              delay={0.2}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
