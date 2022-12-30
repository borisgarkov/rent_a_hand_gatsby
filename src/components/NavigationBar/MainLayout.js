import * as React from "react";
import Search from "@mui/icons-material/Search";
import MailIcon from '@mui/icons-material/Mail';
import {
    AppBar, Avatar, Badge, CssBaseline, Grid,
    IconButton, InputBase, ThemeProvider, Toolbar, Typography
} from "@mui/material";
import { theme } from "../../utils/mainTheme";
import { styled, alpha } from '@mui/material/styles';
import * as styles from '../Home/home-styles.module.css';
import useScreenResolution from "../hooks/useScreenResolution";
import currentUser from "../db-files/currentUser";

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
                    <Search sx={{ paddingLeft: 2 }} fontSize='large' />
                    <StyledInputBase
                        placeholder="Търси..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </SearchBarStyled >
            }
        </>
    )
};

export default function MainLayout(props) {
    const isMobile = useScreenResolution('lg');
    const logoVariant = isMobile ? 'body2' : 'h6';

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ right: 0 }}>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
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
                </Toolbar>
            </AppBar >
            <Grid container sx={{ height: '100vh' }}>
                {
                    props.children
                }
            </Grid>
        </ThemeProvider >
    )
}