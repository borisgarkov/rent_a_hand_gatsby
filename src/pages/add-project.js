import { Button, Grid, Paper, Typography } from "@mui/material";
import { AddProjectTextFields } from "../components/AddJobs/AddProjectTextFields";
import * as React from "react";
import Navigation from "../components/NavigationBar/Navigation";

const AddProjectContext = React.createContext();

const AddProject = () => {

    // project information form
    const [projectTitle, setProjectTitle] = React.useState('');
    const handleProjectTitleChange = (event) => { setProjectTitle(event.target.value) };

    const [projectDuration, setProjectDuration] = React.useState('');
    const handleProjectDurationChange = (event) => { setProjectDuration(event.target.value) };

    const [workCategory, setWorkCategory] = React.useState('ИТ');
    const handleWorkCategoryChange = (event, newValue) => { setWorkCategory(newValue) };

    const [payment, setPayment] = React.useState('');
    const handlePaymentChange = (event) => { setPayment(event.target.value) };

    const [paymentType, setPaymentType] = React.useState('на час');
    const handlePaymentTypeChange = (event) => { setPaymentType(event.target.value) };

    const [projectDescription, setProjectDescription] = React.useState('');
    const handleProjectDescriptionChange = (event) => { setProjectDescription(event.target.value) };

    return (
        <Navigation>
            <AddProjectContext.Provider
                value={{
                    // project information form
                    projectTitle, handleProjectTitleChange, projectDuration, handleProjectDurationChange,
                    workCategory, handleWorkCategoryChange, payment, handlePaymentChange,
                    paymentType, handlePaymentTypeChange, projectDescription, handleProjectDescriptionChange,
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