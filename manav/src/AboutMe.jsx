import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Replace with your desired primary color
    },
    secondary: {
      main: '#f50057', // Replace with your desired secondary color
    },
  },
});

const AboutMe = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ width: '100%', backgroundColor: '#f5f5f5' }}>
        <CardContent sx={{ textAlign: 'left', marginLeft: 'auto', marginRight: 'auto', maxWidth: 600 }}>
          <Typography variant="h6" component="h2" color="textSecondary">
            Hi, my name is
          </Typography>
          <Typography variant="h4" component="h1" color="primary" sx={{ marginTop: 1 }}>
            Manav Shah
          </Typography>
          <Typography variant="body1" component="p" color="textSecondary" sx={{ marginTop: 1 }}>
            I'm an undergraduate student at Purdue University studying Computer Engineering.
            Currently, I am a Machine Learning Engineer Intern at Ivy.
          </Typography>
        </CardContent>
        <Avatar
          alt="Manav Shah"
          src="/path/to/your/photo.jpg"
          sx={{ width: 120, height: 120, marginTop: 2, marginLeft: 'auto', marginRight: 'auto' }}
        />
      </Card>
    </ThemeProvider>
  );
};

export default AboutMe;
