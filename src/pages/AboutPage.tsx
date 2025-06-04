
import { Container, Typography, Box, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const founders = [
  {
    name: 'Billi',
    role: 'Co-Founder & Lead Software Engineer',
    desc: 'Driven by curiosity and innovation, Billi specializes in logistics tech, specialized frontend, and system architecture. With a passion for turning complex ideas into robust code, he is always looking for ways to optimize business operations.',
    university: 'Stellenbosch University',
  },
  {
    name: 'Daniel',
    role: 'Co-Founder & Lead Software Engineer',
    desc: 'Daniel brings a sharp focus on product design, clean architecture, and customer-centric problem solving. His expertise lies in web platforms, API design, and delivering value through smart, maintainable solutions.',
    university: 'Stellenbosch University',
  },
];

const AboutPage = () => (
  <Container maxWidth="lg" sx={{ py: 12 }}>
    <Helmet>
      <meta name="description" content="Meet the founders of OptiBD – Billi and Daniel, students at Stellenbosch University and passionate builders of modern software." />
    </Helmet>

    {/* Hero Section */}
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Typography variant="h2" fontWeight="bold" gutterBottom textAlign="center">
        About OptiBD
      </Typography>
      <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}>
        Building the future of logistics and web software — from Stellenbosch to the world.
      </Typography>
    </motion.div>

    {/* Mission Block */}
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 5,
          mb: 10,
          borderRadius: 4,
          background: 'linear-gradient(135deg, #f0f4f8 0%, #ffffff 100%)',
          boxShadow: '0 4px 20px rgba(10, 25, 47, 0.05)',
        }}
      >
        <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 900 }}>
          At OptiBD, our mission is to digitize industries and empower businesses to operate at their full potential.
          We believe that every organization—no matter the size or sector—deserves software solutions tailored to their
          unique challenges and workflows.
          <br /><br />
          We partner with clients to modernize and optimize their operations, designing custom digital tools that actually
          fit how they work. From logistics and automation to smart web platforms, our focus is always on delivering
          maintainable, scalable code that drives real results. Your success is our success—and we’re here to help you
          unlock it, one line of code at a time.
        </Typography>
      </Paper>
    </motion.div>

    {/* Founders */}
    <Grid container spacing={4}>
      {founders.map((founder, idx) => (
        <Grid >
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1 + 0.2 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                borderRadius: 4,
                backgroundColor: 'white',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.04)',
                border: '1.5px solid #e0e7ef',
                transition: 'transform 0.25s, box-shadow 0.25s',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 10px 30px rgba(10, 25, 47, 0.12)',
                  borderColor: '#64FFDA',
                },
              }}
            >
              <Box>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5 }}>
                  {founder.name}
                </Typography>
                <Typography variant="body2" color="primary" fontWeight={600}>
                  {founder.role}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {founder.university}
                </Typography>
                <Typography variant="body2">{founder.desc}</Typography>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default AboutPage;
