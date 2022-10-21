import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import * as React from "react";
import Navigation from "../components/NavigationBar/Navigation";
import AutocompleteWorkCatsList from "../components/CommonItems/AutocompleteWorkCatsList";
import { work_categories } from "../components/CommonItems/work-categories";
import listOfCities from "../components/CommonItems/listOfCities";
import AutocompleteCitiesList from "../components/CommonItems/AutocompleteCitiesList";

const AddJob = () => {
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

    return (
        <Navigation>
            <Grid container sx={{
                justifyContent: 'center',
                margin: '8px auto',
            }} >
                <Grid item xs={12} sm={6} component={Paper} sx={{ padding: { xs: 2, md: 5 } }}>

                    <Typography variant='h5' sx={{ margin: '10px 0', fontWeight: 'bold' }}>Обява за работа</Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                type='text'
                                fullWidth
                                label="Позиция"
                                id="job-title"
                                name="job-title"
                                required
                                variant='outlined'
                                value={position}
                                onChange={handlePositionChange}
                            />
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
                                label="Заплащане на месец в лв."
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
                                label="Описание на позицията"
                                id="job-description"
                                name="job-description"
                                required
                                InputProps={{ rows: 10 }}
                                variant='outlined'
                                color='primary'
                                value={jobDescription}
                                onChange={handleJobDescriptionChange}
                            />
                        </Grid>
                    </Grid>
                    <Button fullWidth sx={{ margin: '16px 0 0 0' }} variant='contained'>Създай обява</Button>
                </Grid>
            </Grid >
        </Navigation>
    )
}

export default AddJob