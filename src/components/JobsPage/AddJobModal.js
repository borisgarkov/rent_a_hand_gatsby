import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl, FormLabel, Grid, IconButton, Stack, TextField, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AutocompleteWorkCatsList from '../CommonItems/AutocompleteWorkCatsList';
import AutocompleteCitiesList from '../CommonItems/AutocompleteCitiesList';
import useScreenResolution from '../hooks/useScreenResolution';
import useJobsModalData from '../hooks/useJobsModalData';

export default function AddJobModal(props) {
    const { onClose, value: valueProp, open, modaltitle, currentJob, ...other } = props;
    const [value, setValue] = React.useState(valueProp);

    const {
        position, handlePositionChange,
        workCategory, handleWorkCategoryChange,
        city, handleCityChange,
        salary, handleSalaryChange,
        jobDescription, handleJobDescriptionChange,
        jobType, handleJobTypeChange
    } = useJobsModalData({ 'currentJob': currentJob });

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const handleCancel = () => { onClose(); };
    const handleOk = () => { onClose(value); };

    const isMobile = useScreenResolution('lg');

    return (
        <Dialog
            fullScreen={isMobile ? true : false}
            open={open}
            {...other}
        >
            <Stack sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <DialogTitle>
                    {modaltitle}
                </DialogTitle>
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
                            label="????????????????"
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
                            <FormLabel id="work-type">?????? ????????a</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="work-type"
                                name="work-type"
                                value={jobType}
                                onChange={handleJobTypeChange}
                            >
                                <FormControlLabel value="??????????????" control={<Radio />} label="??????????????" />
                                <FormControlLabel value="??????????????" control={<Radio />} label="??????????????" />
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
                            label="?????????????????? ?? ????."
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
                            label="???????????????? ???? ??????????????"
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
                <Button fullWidth variant='outlined' onClick={handleOk}>
                    {modaltitle}
                </Button>
            </DialogActions>
        </Dialog>
    );
};