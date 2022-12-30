import * as React from 'react';
import { Link, navigate } from 'gatsby';
import {
    AppBar, Toolbar, Button, ButtonGroup,
    Stack, Box, ThemeProvider, CssBaseline
} from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

import '../../styles/global.css';

import useScreenResolution from '../hooks/useScreenResolution';
import cld from '../../services/getCloudinaryImages';
import { theme } from '../../utils/mainTheme';

import Footer from '../CommonItems/Footer';
import BackToTopButton from '../CommonItems/BackToTopButton';
import MainPageMenuDrawer from './MainPageMenuDrawer';


export default function Navigation(props) {
    const logo = cld.image('main page photos/Rent_A_Hand_D1_dwb3is').toURL();
    const isMobile = useScreenResolution();

    const menuPages = [
        // {
        //     title: 'Начало',
        //     icon: <HomeIcon fontSize="small" />,
        //     path: '/',
        // },
        {
            title: 'Вход',
            icon: <LoginIcon fontSize="small" />,
            path: '/login',
        },
        {
            title: 'Регистрация',
            icon: <HowToRegIcon fontSize="small" />,
            path: '/register',
        },
    ];

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar elevation={2} sx={{ backgroundColor: 'white' }}>
                <Toolbar sx={{
                    width: { xs: '100%' },
                    maxWidth: { md: '87%' },
                    margin: { xs: '0 0 5px 0', sm: '0 auto' },
                    justifyContent: 'space-between',
                }}>

                    <img src={logo} height={isMobile ? '20' : '30'} alt="logo img"
                        onClick={() => navigate('/')} style={{ cursor: 'pointer', }} />

                    {
                        isMobile
                            ? <MainPageMenuDrawer menuItems={menuPages} isUserSection={false} />
                            : <ButtonGroup variant='' aria-label='button group'>
                                {
                                    menuPages.map((page) => (
                                        <Link to={page.path} key={page.title}>
                                            <Button variant='text' sx={{ color: '#666666' }}>
                                                <Box sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    fontSize: '12px',
                                                    margin: '0 20px',
                                                }} >
                                                    {page.icon}
                                                    {page.title}
                                                </Box>
                                            </Button>
                                        </Link>
                                    ))
                                }
                            </ButtonGroup>
                    }
                </Toolbar>
            </AppBar>
            <Toolbar id='navbar' />
            <Box sx={{ flexGrow: 1 }}>
                {
                    props.children
                }
            </Box>
            <BackToTopButton />
            <Footer />
        </ThemeProvider>
    )
};