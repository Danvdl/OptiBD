
import { Box, Container, Typography, Link as MuiLink, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => (
  <Box sx={{ bgcolor: '#0A192F', color: 'white', py: 6, mt: 10 }}>
    <Container>
      <Grid container spacing={4}>
        <Grid >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            OptiBD
          </Typography>
          <Typography variant="body2">
            Optimized solutions for modern logistics and web infrastructure.
          </Typography>
        </Grid>
        <Grid >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <MuiLink component={Link} to="/" color="inherit" underline="hover">
              Home
            </MuiLink>
            <MuiLink component={Link} to="/services" color="inherit" underline="hover">
              Services
            </MuiLink>
            <MuiLink component={Link} to="/contact" color="inherit" underline="hover">
              Contact
            </MuiLink>
          </Box>
        </Grid>
        <Grid >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2">
           optibd.dev@gmail.com <br />
            Stellenbosch, South Africa
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" textAlign="center" sx={{ mt: 6, opacity: 0.7 }}>
        © {new Date().getFullYear()} OptiBD. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
