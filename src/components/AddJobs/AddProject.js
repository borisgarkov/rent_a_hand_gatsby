import { Button, Grid, Paper, Typography } from "@mui/material";
import { AddProjectTextFields } from "./AddProjectTextFields";
import * as React from "react";

export const AddProject = () => {
    return (
        <Grid container sx={{
            justifyContent: 'center',
            margin: '8px auto',
        }} >
            <Grid item xs={12} sm={6} component={Paper} sx={{ padding: { xs: 2, md: 5 } }}>
                <Typography variant='h5' sx={{ margin: '10px 0', fontWeight: 'bold' }}>Проект / задача</Typography>
                <AddProjectTextFields />
                <Button fullWidth sx={{ margin: '16px 0 0 0' }} variant='contained'>Създай проект / задача</Button>
            </Grid>
        </Grid>
    )
}