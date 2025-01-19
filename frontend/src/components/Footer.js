import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        textAlign: 'center',
        padding: '1rem 0',
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Shazkhan. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
