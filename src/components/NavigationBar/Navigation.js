import * as React from 'react';
import { Link, navigate } from 'gatsby';
import {
    AppBar, Toolbar, Button,
    Box, ThemeProvider, CssBaseline
} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import useScreenResolution from '../hooks/useScreenResolution';
import cld from '../../services/getCloudinaryImages';
import { mainPageTheme } from '../../utils/mainTheme';
import BackToTopButton from '../CommonItems/BackToTopButton';

export default function Navigation(props) {
    const logo = cld.image('main page photos/Rent_A_Hand_D1_dwb3is').toURL();
    const isMobile = useScreenResolution();

    const menuPages = [
        {
            title: 'Вход',
            icon: <LoginIcon fontSize="small" />,
            path: '/login',
        },
    ];

    return (
        <ThemeProvider theme={mainPageTheme}>
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
                </Toolbar>
            </AppBar>
            <Toolbar id='navbar' />
            <Box>
                {
                    props.children
                }
            </Box>
            <BackToTopButton />
        </ThemeProvider>
    )
};