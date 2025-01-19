import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import { useTheme } from '../contexts/ThemeProvider';
import photo from '../assets/photo.jpeg';
import photo2 from '../assets/photo2.jpeg';

const Navbar = ({ toggleBackground }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [avatarImage, setAvatarImage] = useState(photo);
  const { mode, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));

  const navItems = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Projects', link: '/projects' },
    { label: 'Contact', link: '/contact' },
  ];

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          mode === 'dark'
            ? 'linear-gradient(45deg, #333, #555)'
            : 'linear-gradient(45deg, #0077c2, #00b0ff)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo & Title */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            src={avatarImage}
            alt="ShadanKhan"
            onMouseEnter={() => setAvatarImage(photo2)}
            onMouseLeave={() => setAvatarImage(photo)}
            sx={{
              width: { xs: 40, sm: 60 },
              height: { xs: 40, sm: 60 },
              marginRight: { xs: '8px', sm: '20px' },
              border:
                mode === 'dark'
                  ? '2px solid #90caf9'
                  : '2px solid #004d99',
              transition:
                'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.2)',
                boxShadow:
                  mode === 'dark'
                    ? '0px 0px 10px 2px rgba(144, 202, 249, 0.8)'
                    : '0px 0px 10px 2px rgba(0, 77, 153, 0.8)',
              },
            }}
          />
          <Typography
            variant={isMobile ? 'h6' : 'h4'}
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

        {/* Navigation & Buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isMobile ? (
            // Mobile: only hamburger icon shows navigation items inside a Drawer
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon sx={{ color: '#ffffff' }} />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                sx={{ '& .MuiDrawer-paper': { width: '70%' } }}
              >
                <List>
                  {navItems.map((item) => (
                    <ListItem
                      button
                      key={item.label}
                      component="a"
                      href={item.link}
                      onClick={handleDrawerToggle}
                      sx={{
                        '&:hover': {
                          backgroundColor:
                            mode === 'dark' ? '#444' : '#bbdefb',
                          color: mode === 'dark' ? '#90caf9' : '#0077c2',
                        },
                      }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            // Desktop: show navigation buttons directly
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.link}
                  color="inherit"
                  sx={{
                    color: '#ffffff',
                    fontSize: '1rem',
                    textTransform: 'capitalize',
                    margin: '0 10px',
                    padding: '8px 16px',
                    '&:hover': {
                      backgroundColor:
                        mode === 'dark' ? '#555' : '#bbdefb',
                      color: mode === 'dark' ? '#90caf9' : '#0077c2',
                      borderRadius: '8px',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Toggle Background Button */}
          <Button
            variant="outlined"
            onClick={toggleBackground}
            sx={{
              marginLeft: { xs: '5px', sm: '20px' },
              borderColor: mode === 'dark' ? '#90caf9' : '#004d99',
              color: mode === 'dark' ? '#90caf9' : '#004d99',
              width: { xs: '40px', sm: '50px' },
              height: { xs: '40px', sm: '50px' },
              minWidth: { xs: '40px', sm: '50px' },
              padding: 0,
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              '&:hover': {
                borderColor: mode === 'dark' ? '#90caf9' : '#0077c2',
                backgroundColor: mode === 'dark' ? '#555' : '#e3f2fd',
              },
            }}
          >
            🌌
          </Button>

          {/* Theme Toggle Button */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleTheme}
            sx={{
              marginLeft: { xs: '5px', sm: '20px' },
              '&:hover': {
                color: mode === 'dark' ? '#90caf9' : '#004d99',
              },
            }}
          >
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
