import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import { Typography } from '@mui/material';
import useScreenResolution from '../hooks/useScreenResolution';
import currentUser from '../db-files/currentUser';
import AddJobModal from './AddJobModal';

export default function AddJobFromPost(props) {
    const isMobile = useScreenResolution('md');

    const [openJobModal, setOpenJobModal] = React.useState(false);
    const handleClickOnJobModal = () => { setOpenJobModal(true); };
    const handleCloseJobModal = () => { setOpenJobModal(false); };

    return (
        <>
            <ListItem
                button
                aria-haspopup="true"
                aria-controls="job-section"
                aria-label="job-section"
                sx={{
                    backgroundColor: '#f0f2f5',
                    borderRadius: 2,
                    "&:hover": {
                        backgroundColor: '#e4e6e9',
                    }
                }}
                onClick={handleClickOnJobModal}
            >
                <Typography variant={isMobile ? 'body2' : 'body1'}>
                    Искаш ли да качиш обява, {currentUser.username}?
                </Typography>
            </ListItem>
            <AddJobModal
                id="job-section"
                keepMounted
                open={openJobModal}
                onClose={handleCloseJobModal}
                modaltitle='Добави обява'
            />
        </>
    );
}