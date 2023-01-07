import * as React from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import useScreenResolution from '../hooks/useScreenResolution';
import { Link } from 'gatsby';

const anchor = 'right';

const MainMenuSection = ({ toggleDrawer }) => {
    return (
        <IconButton
            id='menu-button'
            aria-haspopup='true'
            aria-controls='pages-menu'
            aria-label='pages-menu'
            onClick={toggleDrawer(anchor, true)}
            sx={{
                display: {
                    xs: 'block',
                    sm: 'none',
                },
                color: 'primary.main',
            }}
        >
            <MenuIcon />
        </IconButton>
    )
};

export default function MainPageMenuDrawer({ menuItems, isUserLoggedIn, isUserSection }) {

    const isMobile = useScreenResolution();
    const [state, setState] = React.useState({ right: false, });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: isMobile ? 250 : 500 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {
                    menuItems.map((page) => (
                        <Link to={page.path} key={page.title}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {page.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={page.title} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))
                }
            </List>
        </Box>
    );

    return (
        <Box key={anchor}>
            <MainMenuSection toggleDrawer={toggleDrawer} />
            <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
            >
                {list(anchor)}
            </Drawer>
        </Box>
    );
};
