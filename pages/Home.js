import React from "react";
import { Grid, Typography, Button, Box, Container, ThemeProvider, createTheme } from '@mui/material';
import ResponsiveAppBar from "./navbar";

const HeroTheme = createTheme({
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

const Home = () => {
    return (
        <>
            <ResponsiveAppBar />
            <ThemeProvider theme={HeroTheme}>

                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    minHeight: '600px',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                >
                    <Grid container spacing={6} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        maxWidth: '1300px',
                        padding: '50px',
                    }}>
                        <Grid item xs={12} md={7}>
                            <Typography variant="h3" fontWeight={650}>
                                Somos el futuro de la manufactura digital
                            </Typography>
                            <Typography variant="h6">
                                Creamos productos únicos con tecnología que impactará nuestro futuro.
                            </Typography>
                            <Button href="/Products" variant="contained" color="primary" sx={{
                                width: '200px', fontSize: '16px', mt: '15px'
                            }}>
                                Ver productos
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={5} >
                            <img style={{ borderRadius: '15px' }} width={400} src={"https://cdn.discordapp.com/attachments/849781073802035261/1086011121238016030/88107df7-bd96-4aa8-a9c0-2905f21aae78.jpeg"} />
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </>
    )
};

export default Home;