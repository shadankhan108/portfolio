import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        // Outer container
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',      // Use minHeight instead of height for mobile-friendliness
        padding: '20px',
      }}
    >
      {/* Inner container with translucent background and hover effects */}
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          // Responsive padding
          padding: { xs: '20px', sm: '40px' },
          borderRadius: '8px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          // Maintain hover effect primarily for devices that support hover
          '@media (hover: hover)': {
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
            },
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Montserrat, sans-serif',
            marginBottom: '20px',
            letterSpacing: 1,
            color: '#ffffff',
            transition: 'color 0.3s ease',
            userSelect: 'none',
            cursor: 'default',
            // Responsive font sizes
            fontSize: {
              xs: '1.75rem', // ~28px for extra readability on small screens
              sm: '2.25rem',
              md: '3rem',
            },
            '@media (hover: hover)': {
              '&:hover': {
                color: 'yellow',
              },
            },
          }}
        >
          Welcome to My Portfolio
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Lato, sans-serif',
            maxWidth: '600px',
            lineHeight: 1.5,
            margin: '0 auto',
            color: '#ffffff',
            transition: 'color 0.3s ease',
            userSelect: 'none',
            cursor: 'default',
            // Responsive font sizes
            fontSize: {
              xs: '1rem',   // ~16px on small screens
              sm: '1.125rem',
              md: '1.25rem',
            },
            '@media (hover: hover)': {
              '&:hover': {
                color: 'yellow',
              },
            },
          }}
        >
          I’m Shadan Khan, a Master of Data Science student at Deakin University.
          My journey has been a dynamic one—from studying Electronics and Instrumentation
          Engineering, to gaining business acumen in sales, and finally taking the leap 
          into data science. Explore my portfolio to discover more about my projects, 
          skills, and career aspirations.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
