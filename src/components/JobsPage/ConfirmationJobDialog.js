import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { work_categories } from '../db-files/work-categories';
import listOfCities from '../db-files/listOfCities';
import { IconButton, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function ConfirmationDialogRaw(props) {
    const { onClose, value: valueProp, open, isCategory, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(value);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth="xs"
            TransitionProps={{ onEntering: handleEntering }}
            open={open}
            {...other}
        >
            <Stack sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <DialogTitle>
                    {
                        isCategory
                            ? 'Категория'
                            : 'Населено място'
                    }
                </DialogTitle>
                <IconButton onClick={handleCancel} sx={{ marginRight: 1 }}>
                    <CloseIcon />
                </IconButton>
            </Stack>
            <DialogContent dividers>
                <RadioGroup
                    ref={radioGroupRef}
                    aria-label="job-section"
                    name="job-section"
                    value={value}
                    onChange={handleChange}
                >
                    {
                        isCategory
                            ? work_categories.map((option) => (
                                <FormControlLabel
                                    key={option}
                                    value={option}
                                    control={<Radio />}
                                    label={option}
                                />
                            ))
                            : listOfCities.map((option) => (
                                <FormControlLabel
                                    key={option}
                                    value={option}
                                    control={<Radio />}
                                    label={option}
                                />
                            ))
                    }
                </RadioGroup>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleOk}>Избери</Button>
            </DialogActions>
        </Dialog>
    );
}

export default function ConfirmationJobDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(
        props.isCategory
            ? work_categories[0]
            : listOfCities[0]
    );

    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = (newValue) => {
        setOpen(false);

        if (newValue) {
            setValue(newValue);
        }
    };

    const jobSection = props.isCategory;

    return (
        <Box sx={{
            width: '100%', maxWidth: 360,
            border: '1px solid #d0d2d4', borderRadius: 1,
            marginBottom: 2,
            borderRadius: '15px',
        }}>
            <ListItem
                button
                aria-haspopup="true"
                aria-controls="job-section"
                aria-label="job-section"
                onClick={handleClickListItem}
            >
                <ListItemText primary={jobSection ? 'Категория' : 'Населено място'} secondary={value} />
            </ListItem>
            <ConfirmationDialogRaw
                id="job-section"
                keepMounted
                open={open}
                onClose={handleClose}
                value={value}
                isCategory={jobSection}
            />
        </Box>
    );
}