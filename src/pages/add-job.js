import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import CategoriesDropDownList from "../components/CommonItems/CategoriesDropDownList";
import * as React from "react";
import Navigation from "../components/NavigationBar/Navigation";


const AddJob = () => {
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
                                variant='standard'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CategoriesDropDownList />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type='text'
                                fullWidth
                                label="Населено място"
                                id="job-city"
                                name="job-city"
                                required
                                variant='standard'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type='number'
                                fullWidth
                                label="Заплащане на месец"
                                id="job-salary"
                                name="job-salary"
                                variant='standard'
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
                                variant='standard'
                                color='primary'
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