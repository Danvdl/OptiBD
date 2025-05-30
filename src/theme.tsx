import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f8f9fa',
    },
    primary: {
      main: '#0A192F', // Dark navy
    },
    secondary: {
      main: '#64FFDA', // Icy teal
    },
    text: {
      primary: '#111827', // near-black
    },
  },
  typography: {
    fontFamily: ['Inter', 'Roboto', 'sans-serif'].join(','),
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
