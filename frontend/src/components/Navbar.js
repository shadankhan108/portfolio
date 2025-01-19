import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Box,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../contexts/ThemeProvider'; 
import photo from '../assets/photo.jpeg'; 

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { mode, toggleTheme } = useTheme(); 

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const navItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Projects', link: '#projects' },
    { label: 'Skills', link: '#skills' },
    { label: 'Contact', link: '#contact' },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        background: mode === 'dark'
          ? 'linear-gradient(45deg, #333, #555)'
          : 'linear-gradient(45deg, #0077c2, #00b0ff)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Avatar
            src={photo}
            alt="ShadanKhan"
            sx={{
              width: 60,
              height: 60,
              marginRight: '20px',
              border: mode === 'dark' ? '2px solid #90caf9' : '2px solid #004d99',
            }}
          />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Arial, sans-serif',
              color: '#ffffff',
              letterSpacing: 1,
              '&:hover': {
                color: mode === 'dark' ? '#90caf9' : '#004d99',
              },
              cursor: 'pointer',
            }}
          >
            ShadanKhan
          </Typography>
        </Box>

     
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              href={item.link}
              color="inherit"
              sx={{
                color: '#ffffff',
                fontSize: '1rem',
                textTransform: 'capitalize',
                margin: '0 15px',
                padding: '8px 16px',
                '&:hover': {
                  backgroundColor: mode === 'dark' ? '#555' : '#bbdefb',
                  color: mode === 'dark' ? '#90caf9' : '#0077c2',
                  borderRadius: '8px',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

   
        <IconButton
          edge="end"
          color="inherit"
          onClick={toggleTheme}
          sx={{
            marginLeft: '30px',
            '&:hover': {
              color: mode === 'dark' ? '#90caf9' : '#004d99',
            },
          }}
        >
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        {/* Mobile Navigation */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon sx={{ color: '#ffffff' }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            keepMounted
            PaperProps={{
              style: {
                background: mode === 'dark'
                  ? 'linear-gradient(45deg, #333, #555)'
                  : 'linear-gradient(45deg, #0077c2, #00b0ff)',
                color: '#ffffff',
              },
            }}
          >
            {navItems.map((item) => (
              <MenuItem
                key={item.label}
                onClick={handleMenuClose}
                component="a"
                href={item.link}
                sx={{
                  '&:hover': {
                    backgroundColor: mode === 'dark' ? '#444' : '#bbdefb',
                    color: mode === 'dark' ? '#90caf9' : '#0077c2',
                  },
                }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
