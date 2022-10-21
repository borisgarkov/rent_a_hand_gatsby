import { Button, Grid, Paper, Typography } from "@mui/material";
import { AddProjectTextFields } from "../components/AddJobs/AddProjectTextFields";
import * as React from "react";
import Navigation from "../components/NavigationBar/Navigation";
import useProjectStateVariables from "../components/hooks/useProjectStateVariables";

const AddProjectContext = React.createContext();

const AddProject = () => {

    const {
        // project information form
        projectTitle, handleProjectTitleChange, projectDuration, handleProjectDurationChange,
        workCategory, handleWorkCategoryChange, payment, handlePaymentChange,
        paymentType, handlePaymentTypeChange, projectDescription, handleProjectDescriptionChange,
        projectCity, handleProjectCityChange
    } = useProjectStateVariables();

    return (
        <Navigation>
            <AddProjectContext.Provider
                value={{
                    // project information form
                    projectTitle, handleProjectTitleChange, projectDuration, handleProjectDurationChange,
                    workCategory, handleWorkCategoryChange, payment, handlePaymentChange,
                    paymentType, handlePaymentTypeChange, projectDescription, handleProjectDescriptionChange,
                    projectCity, handleProjectCityChange
                }}
            >
                <Grid container sx={{
                    justifyContent: 'center',
                    margin: '8px auto',
                }} >
                    <Grid item xs={12} sm={6} component={Paper} sx={{ padding: { xs: 2, md: 5 } }}>
                        <Typography variant='h5' sx={{ margin: '10px 0', fontWeight: 'bold' }}>Проект / задача</Typography>
                        <AddProjectTextFields context={AddProjectContext} />
                        <Button fullWidth sx={{ margin: '16px 0 0 0' }} variant='contained'>Създай проект / задача</Button>
                    </Grid>
                </Grid>
            </AddProjectContext.Provider>
        </Navigation>
    )
}

export default AddProject