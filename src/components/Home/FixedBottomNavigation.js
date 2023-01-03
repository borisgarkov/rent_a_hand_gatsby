import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Link } from 'gatsby';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, Button, Stack, Typography } from '@mui/material';
import ConfirmationDialogRaw from '../JobsPage/AddJobModal';

const BottomNavigationItem = (props) => {
    const page = props.page

    return (
        <Stack sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 1 }}>
            {page.icon}
            <Typography sx={{ textAlign: 'center' }} variant='body2'>{page.title}</Typography>
        </Stack>
    )
};

export default function FixedBottomNavigation() {
    const [openJobModal, setOpenJobModal] = React.useState(false);

    const handleClickOnJobModal = () => {
        setOpenJobModal(true);
    };

    const handleCloseJobModal = (newValue) => {
        setOpenJobModal(false);
    };

    return (
        <>
            <Paper sx={{
                position: 'fixed', bottom: 0, left: 0, right: 0,
                display: 'flex', flexDirection: 'row',
                justifyContent: 'space-evenly',
                zIndex: 99,
            }}
                elevation={3}
            >
                <Link to='/home'>
                    <BottomNavigationItem page={{
                        title: 'Начало',
                        icon: <HomeIcon fontSize='small' />,
                    }} />
                </Link>

                <Button sx={{ padding: 0, margin: 0 }} onClick={handleClickOnJobModal}>
                    <BottomNavigationItem page={{
                        title: 'Обява',
                        icon: <AddCircleOutlineIcon fontSize='small' />,
                    }} />
                </Button>

                <Link to='/profile'>
                    <BottomNavigationItem page={{
                        title: 'Плофил',
                        icon: <PersonIcon fontSize='small' />,
                    }} />
                </Link>
            </Paper>
            <ConfirmationDialogRaw
                id="job-section"
                keepMounted
                open={openJobModal}
                onClose={handleCloseJobModal}
            />
        </>
    );
};