import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/opti-bd-circular.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'transparent',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        color: 'white',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={Logo} alt="OptiBD logo" style={{ height: 40, marginRight: 12 }} />
        </Box>
        <Box>
          {['/', '/services', '/contact'].map((path) => (
            <Button
              key={path}
              color="inherit"
              component={Link}
              to={path}
              sx={{
                fontWeight: location.pathname === path ? 700 : 500,
                textTransform: 'none',
                mx: 1,
                '&:hover': {
                  color: 'secondary.main',
                },
              }}
            >
              {path === '/' ? 'Home' : path.replace('/', '')}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
