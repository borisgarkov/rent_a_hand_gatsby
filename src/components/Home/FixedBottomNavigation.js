import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'gatsby';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Stack, Typography } from '@mui/material';

export default function FixedBottomNavigation() {
    const pages = [
        {
            pageLink: '/home',
            title: 'Начало',
            icon: <HomeIcon fontSize='small' />,
        },
        {
            pageLink: '/profile',
            title: 'Плофил',
            icon: <PersonIcon fontSize='small' />,
        },
        {
            pageLink: '/home',
            title: 'Настройки',
            icon: <SettingsIcon fontSize='small' />,
        },
        {
            pageLink: '/home',
            title: 'Изход',
            icon: <LogoutIcon fontSize='small' />,
        },
    ];

    return (
        <>
            <Box sx={{ zIndex: 99 }}>
                <Paper sx={{
                    position: 'fixed', bottom: 0, left: 0, right: 0,
                    display: 'flex', flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }}
                    elevation={3}
                >
                    {
                        pages.map(page => {
                            return (
                                <Link to={page.pageLink} key={page.title}>
                                    <Stack sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 1 }}>
                                        {page.icon}
                                        <Typography variant='body2'>{page.title}</Typography>
                                    </Stack>
                                </Link>
                            )
                        })
                    }
                </Paper>
            </Box>
        </>
    );
};