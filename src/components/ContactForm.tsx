import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
  Stack,
} from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const { name, email, message } = formData;
  
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }
  
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    try {
      const response = await fetch('https://formspree.io/f/mjkrbowe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setError('');
      } else {
        throw new Error(result.message || 'Something went wrong.');
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Failed to send. Please try again later.');
      } else {
        setError('Failed to send. Please try again later.');
      }
    }
  };
  

  return (
    <Box sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="sm">
        <Typography variant="h3" fontWeight="bold" textAlign="center" gutterBottom>
          Get In Touch
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
          Have a question, proposal, or idea? Let’s talk.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Your Email"
              name="email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={5}
              variant="outlined"
              value={formData.message}
              onChange={handleChange}
            />
            {error && <Alert severity="error">{error}</Alert>}
            {submitted && <Alert severity="success">Message sent successfully!</Alert>}
            <input type="text" name="_gotcha" style={{ display: 'none' }} />

            <Button type="submit" variant="contained" size="large" color="primary">
            {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </Stack>
        </form>
      </Container>
    </Box>
  );
};

export default ContactForm;
