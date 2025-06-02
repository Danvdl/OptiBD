import  { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/opti-bd-circular.png';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
  { label: 'About', path: '/about' },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box sx={{ width: 250, bgcolor: '#0A192F', height: '100%' }}>
      <List>
        {navLinks.map((link) => (
          <ListItem
            key={link.path}
            component={Link}
            to={link.path}
            onClick={toggleDrawer}
            sx={{
              color: location.pathname === link.path ? theme.palette.secondary.main : 'white',
              fontWeight: location.pathname === link.path ? 700 : 500,
            }}
          >
            <ListItemText primary={link.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'rgba(10, 25, 47, 0.75)',
          backdropFilter: 'blur(14px)',
          color: 'white',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: 64, px: { xs: 1, sm: 4 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={Logo} alt="OptiBD logo" style={{ height: 40, marginRight: 16 }} />
          </Box>
          {isMobile ? (
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  component={Link}
                  to={link.path}
                  sx={{
                    fontWeight: location.pathname === link.path ? 700 : 500,
                    color: location.pathname === link.path ? theme.palette.secondary.main : '#fff',
                    bgcolor: location.pathname === link.path ? 'rgba(100,255,218,0.10)' : 'transparent',
                    borderRadius: 2,
                    px: 2.5,
                    py: 1,
                    transition: 'all 0.15s',
                    '&:hover': {
                      bgcolor: 'rgba(100,255,218,0.08)',
                      color: theme.palette.secondary.main,
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
