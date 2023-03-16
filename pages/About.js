import React from 'react';
import { Grid, Typography, Button, Box, createTheme, ThemeProvider } from '@mui/material';
import ResponsiveAppBar from './navbar';
//import bestTeams from '../images/bestTeams.jpg';
//import useStyles from '../../src/styles';

const About = () => {
  const AboutTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#f38923',
      },
      secondary: {
        main: '#9197ae',
      },
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    }
  })
  return (
    <>
      <ResponsiveAppBar />
      <ThemeProvider theme={AboutTheme}>
        <Box sx={{
          width: '100%',
          display: 'flex',
          minHeight: '400px',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '30px 0px 50px 0px',
        }}>
          <Grid container spacing={6} sx={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: '1300px',
            padding: '50px',
          }}>
            <Grid item xs={12} md={5}>
              <img style={{ borderRadius: '15px' }} width={400} src={"https://cdn.discordapp.com/attachments/849781073802035261/1086011121238016030/88107df7-bd96-4aa8-a9c0-2905f21aae78.jpeg"} />
            </Grid>

            <Grid item xs={12} md={6} style={{ minWidth: '1100px' }}>
              <Typography variant="h3" fontWeight={650}>
                We build, We revive
              </Typography>
              <Typography>
                Your business needs to be in safe hands at all times. We ensure you
                never run out of customers and not run at loss. We are trusted by
                over 500+ companies to deliver quality marketing campaigns using
                Digital marketing & Offline marketing channels.
              </Typography>

            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default About;