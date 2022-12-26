import Search from "@mui/icons-material/Search";
import MailIcon from '@mui/icons-material/Mail';

import homeIcon from '../images/main-page-icons/icons8-home-page-96.png';
import profileIcon from '../images/main-page-icons/icons8-profile-96.png';
import subscribeIcon from '../images/main-page-icons/icons8-tags-96.png';
import addJonIcon from '../images/main-page-icons/icons8-job-seeker-96.png';
import savedJobsIcon from '../images/main-page-icons/icons8-talent-64.png';
import settingsIcon from '../images/main-page-icons/icons8-settings-58.png';
import logoutIcon from '../images/main-page-icons/icons8-logout-64.png';

import { styled, alpha } from '@mui/material/styles';
import {
    AppBar, Avatar, Badge, Box, Grid, IconButton,
    InputBase, Toolbar, Typography, Stack, Container, Divider
} from "@mui/material";
import * as React from "react";
import useScreenResolution from "../components/hooks/useScreenResolution";
import * as styles from '../components/Home/home-styles.module.css';
import { Link } from "gatsby";
import Test from "../components/Home/Test";

const currentUser = {
    incomingMessages: 4,
    profilePicture: 'https://source.unsplash.com/random',
    username: 'rent_a_hand',
}


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
                    <Search sx={{ paddingLeft: 2 }} />
                    <StyledInputBase
                        placeholder="Търси..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </SearchBarStyled >
            }
        </>
    )
};

const StyledContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(10),
        backgroundColor: '#f5f5f5',
        color: '#555',
        border: '1px solid #ece7e7',
    },
    paddingLeft: 0,
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    height: '100vh',
    position: 'sticky',
    top: 0
}));

const StyledStack = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: theme.spacing(1),
    marginBottom: theme.spacing(2),
    ":hover": {
        backgroundColor: '#ffffff',
        borderRadius: '5px',
    }
}));

const LeftMenu = (props) => {
    const pages = [
        { title: 'Начало', icon: homeIcon, path: '/new' },
        { title: 'Профил', icon: profileIcon, path: '/new' },
        { title: 'Абонамент', icon: subscribeIcon, path: '/new' },
        { title: 'Добави обява', icon: addJonIcon, path: '/new' },
        { title: 'Запазени обяви', icon: savedJobsIcon, path: '/new' },
        { title: 'Настройки', icon: settingsIcon, path: '/new' },
        { title: 'Изход', icon: logoutIcon, path: '/new' }
    ];

    return (
        <StyledContainer>
            <StyledStack>
                <Avatar alt="profile-picture" src={currentUser.profilePicture} />
                <Typography variant="body2">{currentUser.username}</Typography>
            </StyledStack>
            <Box sx={{ marginBottom: 4 }}></Box>
            {
                pages.map((p) => (
                    <Link to={p.path} key={p.title}>
                        <StyledStack>
                            <img alt='icon-picture' width='28' height='28' src={p.icon} />
                            {
                                !props.isMobile &&
                                <Typography variant="body2">{p.title}</Typography>
                            }
                        </StyledStack>
                    </Link>
                ))
            }
            <Divider />
        </StyledContainer>
    )
};

const Feed = () => {
    return (
        <>
            <Test />
            <Test />
            <Test />
            <Test />
            <Test />
            <Test />
        </>
    )
};

const RightMenu = () => {
    return (
        <StyledContainer>

        </StyledContainer>
    )
};

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
}));

export default function Home() {
    const isMobile = useScreenResolution();
    const logoVariant = isMobile ? 'body2' : 'h6';

    return (
        <>
            <AppBar position="fixed" sx={{ right: 0 }}>
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
                <Grid item sm={2} xs={2}>
                    <LeftMenu isMobile={isMobile} />
                </Grid>
                <Grid item sm={7} xs={10}>
                    <Feed />
                </Grid>
                <Grid item sm={3} xs={0}>
                    <RightMenu />
                </Grid>
            </Grid>
        </>
    )
}