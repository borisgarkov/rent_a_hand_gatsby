import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField } from '@mui/material';
import * as React from 'react';

import CloseIcon from '@mui/icons-material/Close';


export const EditSectionButton = ({
    dialogTitle,
    textFieldValue,
    updateUserInfo,
    userDataPoint
}) => {

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    return (
        <>
            <IconButton
                onClick={handleClickOpen}
                sx={{
                    marginLeft: 'auto',
                }}
            >
                <EditOutlinedIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
                    <DialogTitle>{dialogTitle}</DialogTitle>
                    <IconButton
                        onClick={handleClose}
                        sx={{ margin: '0 8px 0 auto' }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Stack>
                <DialogContent >
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={dialogTitle}
                        type="text"
                        // value={textFieldValue}
                        defaultValue={textFieldValue}
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => updateUserInfo()}>Запази</Button>
                </DialogActions>
            </Dialog>
        </>
    )
};