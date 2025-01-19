import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery
} from '@mui/material';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Example photo imports – adjust these paths to your actual image files
import photo1 from '../assets/photo3.jpeg';
import photo2 from '../assets/photo4.jpeg';
import photo3 from '../assets/photo5.jpeg';

const About = () => {
  // Carousel images
  const images = [photo1, photo2, photo3];

  // Index of the current image in the carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next/previous carousel navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Typewriter effect state
  const [typedText, setTypedText] = useState('');
  
  // Full text to animate
  const fullText = `Hello! I’m Shadan, a Data Science Enthusiast and Analyst, steadily honing my skills to transform raw data into actionable insights. 
My journey at Deakin University and codebasics.io fuels a passion for analytics, machine learning, and data-driven decision-making. 
Previously a sales leader at BYJU'S Think & Learn, I've learned to combine strategic thinking with a results-oriented approach. 
Join me as I delve deeper into advanced analytics, constantly pushing boundaries to find innovative solutions in this exciting, data-driven world.`;

  // Typewriter effect implementation
  useEffect(() => {
    let index = 0;
    const speed = 40; // Adjust typing speed (ms per character)
    const timer = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [fullText]);

  // Responsive breakpoints for layout adjustments
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        // Responsive container: row on larger screens, column on mobile devices.
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px auto',
        padding: '20px',
        width: '100%',
        maxWidth: '800px',
        gap: '20px'
      }}
    >
      {/* Carousel Section with fixed circular image */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: '200px', md: '250px' },
          height: { xs: '200px', md: '250px' },
          overflow: 'hidden',
          borderRadius: '50%', // Circular boundary
          boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
          mx: 'auto',
        }}
      >
        {/* Previous Button */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: 'rgba(255,255,255,0.2)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.4)',
            },
          }}
        >
          <ArrowBackIosIcon sx={{ color: '#ffffff' }} />
        </IconButton>

        {/* Carousel Images */}
        {images.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img}
            alt={`Slide ${index}`}
            sx={{
              display: index === currentIndex ? 'block' : 'none',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ))}

        {/* Next Button */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: 'rgba(255,255,255,0.2)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.4)',
            },
          }}
        >
          <ArrowForwardIosIcon sx={{ color: '#ffffff' }} />
        </IconButton>
      </Box>

      {/* Typewriter Text Section with Custom Scroll Styling */}
      <Box
        sx={{
          width: { xs: '100%', md: 'calc(100% - 270px)' },
          maxHeight: { xs: '300px', md: '300px' },
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderRadius: '8px',
          padding: { xs: '20px', sm: '30px' },
          overflowY: 'auto', // Enable scrolling if needed
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          // Custom scrollbar styling for WebKit browsers
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255,255,255,0.4)',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
          // Firefox scrollbar styling
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255,255,255,0.4) transparent',
          '@media (hover: hover)': {
            '&:hover': {
              transform: 'scale(1.01)',
              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
            },
          },
        }}
      >
        {/* Heading */}
        <Typography
          variant={isMobile ? 'h4' : 'h5'}
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Montserrat, sans-serif',
            color: '#ffffff',
            marginBottom: '20px',
            textAlign: 'center',
            transition: 'color 0.3s ease',
            userSelect: 'none',
            cursor: 'default',
            '@media (hover: hover)': {
              '&:hover': {
                color: 'yellow',
              },
            },
          }}
        >
          About Me
        </Typography>

        {/* Typewriter Text */}
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '0.9rem',
            color: '#ffffff',
            lineHeight: 1.6,
            whiteSpace: 'pre-wrap',
            transition: 'color 0.3s ease',
            userSelect: 'none',
            cursor: 'default',
            '@media (hover: hover)': {
              '&:hover': {
                color: 'yellow',
              },
            },
          }}
        >
          {typedText}
          {/* Optional blinking cursor */}
          {typedText.length < fullText.length && (
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '6px',
                backgroundColor: '#ffffff',
                ml: '2px',
                animation: 'blink 1s infinite',
                '@keyframes blink': {
                  '0%': { opacity: 1 },
                  '50%': { opacity: 0 },
                  '100%': { opacity: 1 },
                },
              }}
            />
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
