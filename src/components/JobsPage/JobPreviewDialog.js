import * as React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { navigate } from 'gatsby';
import useScreenResolution from "../hooks/useScreenResolution";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function JobPreviewDialog({ job, handleClose, open }) {
    const isMobile = useScreenResolution('md');

    return (
        <Dialog
            fullScreen={isMobile ? true : false}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="job-dialog-description"
        >
            <DialogTitle>
                <Box
                    marginBottom={2}
                    sx={{
                        display: 'flex',
                        alignItems: 'baseline',
                        columnGap: 2,
                    }}
                >
                    <Avatar>{job.publisher.slice(0, 1)}</Avatar>
                    <Typography id="transition-modal-title" variant="h6" component="h2" mb={2}>
                        {job.publisher}
                    </Typography>
                    <IconButton onClick={handleClose} sx={{
                        alignSelf: 'flex-start', marginLeft: 'auto'
                    }} >
                        <CloseIcon />
                    </IconButton>
                </Box>
                {
                    job.title
                }
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="job-dialog-description">
                    {job.description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => (navigate(`/jobs/${job.id}`))}>
                    Прегледай обява
                </Button>
            </DialogActions>
        </Dialog>
    );
}