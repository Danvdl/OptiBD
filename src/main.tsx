import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme.tsx';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
    
    <title>OptiBD | Optimized Software for Modern Logistics</title>
    <meta name="description" content="Custom software solutions for logistics, web, and operations. Scalable. Modern. Built by BD Consulting." />
    <meta property="og:title" content="OptiBD" />
    <meta property="og:description" content="Custom software solutions for logistics, web, and operations." />
    <meta property="og:image" content="https://i.imgur.com/SkyMfeu.png" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.optibd.systems/" />
  
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
