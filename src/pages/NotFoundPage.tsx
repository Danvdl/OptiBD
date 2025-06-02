
import { Helmet } from 'react-helmet-async';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <Container sx={{ py: 10, textAlign: 'center' }}>
    <Helmet>
      <title>404 - Page Not Found | OptiBD</title>
    </Helmet>
    <Typography variant="h2" fontWeight="bold" gutterBottom>
      404
    </Typography>
    <Typography variant="h4" gutterBottom>
      Page Not Found
    </Typography>
    <Typography variant="body1" sx={{ mb: 3 }}>
      Sorry, the page you're looking for doesn't exist or has moved.
    </Typography>
    <Button component={Link} to="/" variant="contained" color="primary">
      Back to Home
    </Button>
  </Container>
);

export default NotFoundPage;
