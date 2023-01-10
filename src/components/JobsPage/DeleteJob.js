import * as React from "react";
import { IconButton, Tooltip, Button } from "@mui/material";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteJob() {
    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
    const handleClickOpen = () => { setOpenDeleteModal(true); };
    const handleClose = () => { setOpenDeleteModal(false); };

    return (
        <>
            <Tooltip title="Изтрий обява">
                <IconButton sx={{ marginLeft: 'auto' }} onClick={handleClickOpen}>
                    <DeleteForeverOutlinedIcon sx={{ color: 'red' }} />
                </IconButton>
            </Tooltip>
            <Dialog
                open={openDeleteModal}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Искате ли да изтриете тази обява? 😔
                </DialogTitle>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose}>Откажи</Button>
                    <Button onClick={handleClose}>Да</Button>
                </DialogActions>
            </Dialog>
        </>
    )
};