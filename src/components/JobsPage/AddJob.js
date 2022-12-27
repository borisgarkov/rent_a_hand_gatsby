import * as React from 'react';
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
import { work_categories } from '../CommonItems/work-categories';
import listOfCities from '../CommonItems/listOfCities';
import { FormControl, FormLabel, Grid, IconButton, Stack, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import currentUser from './currentUser';
import AutocompleteWorkCatsList from '../CommonItems/AutocompleteWorkCatsList';
import AutocompleteCitiesList from '../CommonItems/AutocompleteCitiesList';
import useScreenResolution from '../hooks/useScreenResolution';

const ConfirmationDialogRaw = (props) => {
    const { onClose, value: valueProp, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);

    const [position, setPosition] = React.useState('');
    const handlePositionChange = (event) => { setPosition(event.target.value) };

    const [workCategory, setWorkCategory] = React.useState(work_categories[0]);
    const handleWorkCategoryChange = (event, newValue) => { setWorkCategory(newValue) };

    const [city, setCity] = React.useState(listOfCities[0]);
    const handleCityChange = (event, newValue) => { setCity(newValue) };

    const [salary, setSalary] = React.useState('');
    const handleSalaryChange = (event) => { setSalary(event.target.value) };

    const [jobDescription, setJobDescription] = React.useState('');
    const handleJobDescriptionChange = (event) => { setJobDescription(event.target.value) };

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(value);
    };

    const [jobType, setJobType] = React.useState('Проекти');

    const handleJobTypeChange = (event) => {
        setJobType(event.target.value);
    };

    return (
        <Dialog
            sx={{
                '& .MuiDialog-paper': { width: '80%', maxHeight: 500 },
                // maxWidth: { md: 'sm' }
            }}
            maxWidth="sm"
            open={open}
            {...other}
        >
            <Stack sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <DialogTitle>Добави обявa</DialogTitle>
                <IconButton onClick={handleCancel} sx={{ marginRight: 1 }}>
                    <CloseIcon />
                </IconButton>
            </Stack>
            <DialogContent dividers>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            type='text'
                            fullWidth
                            label="Заглавие"
                            id="job-title"
                            name="job-title"
                            required
                            variant='outlined'
                            value={position}
                            onChange={handlePositionChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl sx={{ marginBottom: 2 }}>
                            <FormLabel id="work-type">Тип обявa</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="work-type"
                                name="work-type"
                                value={jobType}
                                onChange={handleJobTypeChange}
                            >
                                <FormControlLabel value="Проекти" control={<Radio />} label="Проекти" />
                                <FormControlLabel value="Таланти" control={<Radio />} label="Таланти" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <AutocompleteWorkCatsList workCategory={workCategory}
                            handleWorkCategoryChange={handleWorkCategoryChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <AutocompleteCitiesList city={city} handleCityChange={handleCityChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type='number'
                            fullWidth
                            label="Заплащане в лв."
                            id="job-salary"
                            name="job-salary"
                            variant='outlined'
                            value={salary}
                            onChange={handleSalaryChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            multiline
                            label="Описание на обявата"
                            id="job-description"
                            name="job-description"
                            required
                            InputProps={{ rows: 5 }}
                            variant='outlined'
                            color='primary'
                            value={jobDescription}
                            onChange={handleJobDescriptionChange}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button fullWidth variant='outlined' onClick={handleOk}>Добави</Button>
            </DialogActions>
        </Dialog>
    );
}

export default function AddJob(props) {
    const [open, setOpen] = React.useState(false);
    const isMobile = useScreenResolution('md');

    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = (newValue) => {
        setOpen(false);
    };

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
                onClick={handleClickListItem}
            >
                <Typography variant={isMobile ? 'body2' : 'body1'}>
                    Искаш ли да качиш обява, {currentUser.username}?
                </Typography>
            </ListItem>
            <ConfirmationDialogRaw
                id="job-section"
                keepMounted
                open={open}
                onClose={handleClose}
            />
        </>
    );
}