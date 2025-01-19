import React, { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { LinkedIn, Email, Phone } from '@mui/icons-material';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_id', 
        'template_id',
        { message }, 
      )
      .then(() => {
        setEmailSent(true);
        setMessage('');
      })
      .catch((err) => console.error('EmailJS error:', err));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        gap: '20px',
      }}
    >
    
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          fontFamily: 'Montserrat, sans-serif',
          color: '#333',
          textAlign: 'center',
        }}
      >
        Contact Me
      </Typography>

      {/* Buttons Section */}
      <Box sx={{ display: 'flex', gap: '15px' }}>
        {/* LinkedIn Button */}
        <Button
          variant="outlined"
          startIcon={<LinkedIn />}
          href="https://www.linkedin.com/in/shadan-khan-273b658b/" 
          target="_blank"
          rel="noopener"
          sx={{ textTransform: 'none' }}
        >
          LinkedIn
        </Button>

        
        <Button
          variant="outlined"
          startIcon={<Email />}
          href="mailto:shadankhan108@gmail.com" 
          sx={{ textTransform: 'none' }}
        >
          Gmail
        </Button>

       
        <Button
          variant="outlined"
          startIcon={<Phone />}
          href="tel:+61 452685044" // Replace with your phone number
          sx={{ textTransform: 'none' }}
        >
          Phone
        </Button>
      </Box>

    
      <Box
        component="form"
        onSubmit={handleSendEmail}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <TextField
          label="Write your message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#ccc',
              },
              '&:hover fieldset': {
                borderColor: '#666',
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#1976d2',
            '&:hover': { backgroundColor: '#155a9c' },
          }}
        >
          Send Message
        </Button>
      </Box>

     
      {emailSent && (
        <Typography
          variant="body1"
          sx={{ color: 'green', marginTop: '10px' }}
        >
          Message sent successfully!
        </Typography>
      )}
    </Box>
  );
};

export default Contact;
