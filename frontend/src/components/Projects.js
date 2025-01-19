import React from 'react';
import { Grid, Box, Card, CardContent, Typography, CardMedia, CardActions, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import projects from './projects.json';

const Projects = () => {
  // Define fixed heights (in pixels) for the different sections of the card
  const cardHeight = 400; // Total card height
  const mediaHeight = 180; // Height of the media section
  const actionsHeight = 48; // Estimated height for the CardActions area

  // Calculate the remaining height available for CardContent
  const contentMaxHeight = cardHeight - mediaHeight - actionsHeight;

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        padding: '20px',
        maxHeight: '80vh',
        overflowY: 'auto',
        borderRadius: '8px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        '&::-webkit-scrollbar': {
          width: '12px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#6c63ff',
          borderRadius: '10px',
          border: '3px solid transparent',
          backgroundClip: 'padding-box',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#554fcb',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#e4e4e4',
          borderRadius: '10px',
        },
      }}
    >
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card
              sx={{
                backgroundColor: '#ffffffcc',
                borderRadius: '12px',
                height: `${cardHeight}px`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              <CardMedia
                component="img"
                height={`${mediaHeight}px`}
                image={project.image}
                alt={project.title}
              />
              <CardContent
                sx={{
                  maxHeight: `${contentMaxHeight}px`,
                  overflowY: 'auto',
                  paddingRight: '8px', // Ensure space for the scrollbar
                  '&::-webkit-scrollbar': {
                    width: '8px',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#6c63ff',
                    borderRadius: '8px',
                  },
                  '&::-webkit-scrollbar-track': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <Typography variant="h5" component="div" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  size="small"
                  component="a"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <GitHubIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
