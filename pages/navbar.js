import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Stack,
    Tabs,
    Tab,
    tabClasses,
    tabsClasses,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

/* export default function ButtonAppBar({ genres, activeGenre, changeGenre, openPanel }) {
    return (
        <Box
            mb={{
                xs: 10,
                lg: 15,
            }}
            pt={{
                xs: 2,
                lg: 6,
            }}
            px={{
                xs: 2,
                lg: 6,
            }}
        >
            <AppBar >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        FutuLabs
                    </Typography>
                    <Tabs
                        variant="scrollable"
                        visibleScrollbar
                        onChange={(_, value) => changeGenre(value)}
                        value={activeGenre}
                        sx={{
                            [`& .${tabClasses.root}`]: {
                                fontWeight: 600,
                                fontFamily: "Roboto",
                                textTransform: "capitalize",
                                fontSize: 17,
                            },
                            [`& .${tabsClasses.indicator}`]: {
                                height: 4,
                            },
                        }}
                    >
                        <Tab value="All" label="All" />
                        {genres.map((genre) => (
                            <Tab key={genre} value={genre} label={genre} />
                        ))}
                    </Tabs>
                    <Button color="inherit">Login</Button>
                    <IconButton onClick={openPanel}>
                        <ShoppingCartIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
} */
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import Link from 'next/link';

/* const pages = ['Home', 'Products', 'About']; */
const pages = ['Products', 'About'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const AppBarTheme = createTheme({
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
        },
    });

    return (
        <ThemeProvider theme={AppBarTheme}>

            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <ViewInArIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white', }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            FutuLabs
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="white"
                            >
                                <MenuIcon
                                    sx={{ color: 'white', }} />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <Link style={{ textDecoration: 'none', color: 'inherit' }} href={`/${encodeURIComponent(page)}`}>
                                                {page}
                                            </Link>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <ViewInArIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'white', }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            FutuLabs
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block', underline: 'none' }}
                                >
                                    <Link style={{ textDecoration: 'none', color: 'inherit' }} href={`/${encodeURIComponent(page)}`}>
                                        {page}
                                    </Link>
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar >
        </ThemeProvider>
    );
}
export default ResponsiveAppBar;