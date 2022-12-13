import * as React from 'react';
import { Link, navigate } from 'gatsby';
import { AppBar, Toolbar, Button, ButtonGroup, Stack, Box, ThemeProvider, CssBaseline } from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import * as styles from './navbar.module.css';
import '../../styles/global.css';

import useScreenResolution from '../hooks/useScreenResolution';
import cld from '../../services/getCloudinaryImages';
import { theme } from '../../utils/mainTheme';

import MainPageMenuDrawer from './MainPageMenuDrawer';
import Footer from '../CommonItems/Footer';
import BackToTopButton from '../CommonItems/BackToTopButton';


// const queryClient = new QueryClient();

const Navigation = ({ children }) => {

    const logo = cld.image('main page photos/Rent_A_Hand_D1_ekcqtj').toURL();
    const isMobile = useScreenResolution();

    const menuPages = [
        {
            title: 'Начало',
            icon: <HomeIcon fontSize="small" />,
            path: '/',
        },
        {
            title: 'Обяви',
            icon: <WorkIcon fontSize="small" />,
            path: '/jobs',
        },
        {
            title: 'План',
            icon: <LocalOfferIcon fontSize="small" />,
            path: '/pricing',
        },
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

    const profilePages = [
        {
            title: 'Профил потребител',
            icon: <PermIdentityIcon />,
            path: '/profile',
        },
        {
            title: 'Профил фирма',
            icon: <PermIdentityIcon />,
            path: '/company-page',
        },
        {
            title: 'Профил проекти (физическо лице)',
            icon: <PermIdentityIcon />,
            path: '/profile-project',
        },
        {
            title: 'Добави обява за работа',
            icon: <BusinessCenterOutlinedIcon />,
            path: '/add-job',
        },
        {
            title: 'Добави проект',
            icon: <DesignServicesOutlinedIcon />,
            path: '/add-project',
        },
        {
            title: 'Запазени таланти',
            icon: <StarBorderIcon />,
            path: '/saved-talents',
        },
        {
            title: 'Съобщения',
            icon: <ChatBubbleOutlineIcon />,
            path: '/chat',
        },
        {
            title: 'Настройки',
            icon: <SettingsOutlinedIcon />,
            path: '/settings',
        },
        {
            title: 'Изход',
            icon: <LogoutIcon />,
            path: '/logout',
        }
    ]

    const navButtonsCssStyle = {
        color: '#666666',
    };

    let isUserLoggedIn = true;

    const ProfileSection = (
        isUserLoggedIn
            ? (
                <MainPageMenuDrawer
                    menuItems={profilePages}
                    isUserLoggedIn={isUserLoggedIn}
                    isUserSection={true} />
            )
            : null
    );

    const HomeJobsPlanSection = (
        isMobile
            ? (<MainPageMenuDrawer menuItems={menuPages} isUserSection={false} />)
            : (
                <ButtonGroup variant='' aria-label='button group'>
                    {menuPages.map((page) => (
                        <Link to={page.path} key={page.title}>
                            <Button variant='text' sx={{ ...navButtonsCssStyle }}>
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
                    ))}
                </ButtonGroup>
            )
    );


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar elevation={0} sx={{ backgroundColor: 'white' }}>
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
                            ? (
                                <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
                                    {ProfileSection}
                                    {HomeJobsPlanSection}
                                </Stack>
                            )
                            : (
                                <>
                                    {HomeJobsPlanSection}
                                    {ProfileSection}
                                </>
                            )
                    }

                </Toolbar>
                <Box className={styles.separator}>A HAND</Box>
            </AppBar>
            <Toolbar id='navbar' />
            <Box sx={{ flexGrow: 1 }}>
                {children}
            </Box>
            <BackToTopButton />
            <Footer />
        </ThemeProvider>
    )
}

export default Navigation