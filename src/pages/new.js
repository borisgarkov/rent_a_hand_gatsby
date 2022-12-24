import Search from "@mui/icons-material/Search";
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LogoutIcon from '@mui/icons-material/Logout';

import { styled, alpha } from '@mui/material/styles';
import { AppBar, Avatar, Badge, Box, Grid, IconButton, InputBase, Toolbar, Typography, Stack } from "@mui/material";
import * as React from "react";
import useScreenResolution from "../components/hooks/useScreenResolution";
import * as styles from '../components/Home/home-styles.module.css';
import { Link } from "gatsby";

const SearchBarStyled = styled('div')(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '40%',
    display: 'flex',
    alignItems: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    marginLeft: theme.spacing(2),
    width: '100%',
}));

const SearchSection = (props) => {
    return (
        <>
            {
                !props.isMobile &&
                < SearchBarStyled >
                    <Search />
                    <StyledInputBase
                        placeholder="Търси..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </SearchBarStyled >
            }
        </>
    )
};

const LeftMenu = () => {
    const pages = [
        { title: 'Начало', icon: <HomeIcon />, path: '/new' },
        { title: 'Профил', icon: <PersonIcon />, path: '/new' },
        { title: 'Абонамент', icon: <PaymentIcon />, path: '/new' },
        { title: 'Настройки', icon: <SettingsSuggestIcon />, path: '/new' },
        { title: 'Изход', icon: <LogoutIcon />, path: '/new' }
    ]

    return (
        <>
            {
                pages.map((p) => (
                    <Link to={p.path} key={p.title}>
                        <Stack direction='row' alignItems='center' columnGap={1} marginBottom={3}>
                            {p.icon}
                            <Typography variant="body1">{p.title}</Typography>
                        </Stack>
                    </Link>
                ))
            }
        </>
    )
};

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
}));

export default function Home() {
    const isMobile = useScreenResolution();
    const logoVariant = isMobile ? 'body2' : 'h6';

    const currentUser = {
        incomingMessages: 4,
        profilePicture: 'https://source.unsplash.com/random',
    }

    return (
        <>
            <AppBar position="static">
                <StyledToolbar>
                    <Typography variant={logoVariant}>
                        Rent A Hand
                    </Typography>
                    <SearchSection isMobile={isMobile} />
                    <div className={styles.notificationSection}>
                        {isMobile && <IconButton><Search className={styles.icon} /></IconButton>}
                        <IconButton>
                            <Badge color="secondary" badgeContent={currentUser.incomingMessages}>
                                <MailIcon className={styles.icon} />
                            </Badge>
                        </IconButton>
                        <Avatar alt="profile-picture" src={currentUser.profilePicture} />
                    </div>
                </StyledToolbar>
            </AppBar >
            <Grid container sx={{ height: '100vh' }}>
                <Grid sx={{ backgroundColor: 'red', height: '100%' }} item sm={2}>
                    <LeftMenu />
                </Grid>
                <Grid sx={{ backgroundColor: 'green', height: '100%' }} item sm={8}>
                    <LeftMenu />
                </Grid>
                <Grid sx={{ backgroundColor: 'white', height: '100%' }} item sm={2}>
                    <LeftMenu />
                </Grid>
            </Grid>
        </>
    )
}