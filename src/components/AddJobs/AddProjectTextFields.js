import {
    FormControl, FormControlLabel, FormLabel,
    Grid, Radio, RadioGroup, TextField
} from "@mui/material";
import BaseRegistrationTextField from
    "../RegisterPage/CommonRegistrationComponents/BaseRegistrationTextField";
import * as React from "react";
import AutocompleteWorkCatsList from "../CommonItems/AutocompleteWorkCatsList";
import AutocompleteCitiesList from "../CommonItems/AutocompleteCitiesList";

export const AddProjectTextFields = ({ context }) => {

    const {
        projectTitle, handleProjectTitleChange, projectDuration, handleProjectDurationChange,
        workCategory, handleWorkCategoryChange, payment, handlePaymentChange,
        paymentType, handlePaymentTypeChange, projectDescription, handleProjectDescriptionChange,
        projectCity, handleProjectCityChange
    } = React.useContext(context)

    const projectCreationFields = [
        {
            type: 'text',
            textField: 'project-title',
            id: 'project-title',
            label: 'Заглавие на проекта',
            autoComplete: 'title',
            required: true,
            displaySizeProps: {
                xs: 12,
            },
            value: projectTitle,
            updateFunction: handleProjectTitleChange,
        },
        {
            type: 'text',
            textField: 'project-duration',
            id: 'project-duration',
            label: 'Продължителност на проекта',
            autoComplete: 'time',
            required: true,
            displaySizeProps: {
                xs: 12,
            },
            value: projectDuration,
            updateFunction: handleProjectDurationChange,
        },
    ]

    return (
        <>
            <Grid container spacing={3}>
                {
                    projectCreationFields.map((x, index) => <BaseRegistrationTextField key={index} field={x} />)
                }
            </Grid>
            <Grid item xs={12} sx={{ marginTop: 2 }}>
                <AutocompleteWorkCatsList
                    workCategory={workCategory}
                    handleWorkCategoryChange={handleWorkCategoryChange}
                />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: 2 }}>
                <AutocompleteCitiesList city={projectCity} handleCityChange={handleProjectCityChange} />
            </Grid>
            <FormControl sx={{ marginTop: 4 }}>
                <FormLabel id="paymentType">Заплащане</FormLabel>
                <RadioGroup
                    aria-labelledby="paymentType"
                    name="paymentType"
                    value={paymentType}
                    onChange={handlePaymentTypeChange}
                    row
                >
                    <FormControlLabel value="на час" control={<Radio />} label="на час" />
                    <FormControlLabel value="еднократно за целия проект"
                        control={<Radio />} label="еднократно за целия проект" />
                </RadioGroup>
            </FormControl>
            <Grid item xs={12} sx={{ marginTop: 2 }}>
                <TextField
                    type='number'
                    required
                    id='payment'
                    name='payment'
                    label='Заплащане в лв.'
                    fullWidth
                    variant="outlined"
                    value={payment}
                    onChange={handlePaymentChange}
                />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: 2 }}>
                <TextField
                    fullWidth
                    multiline
                    label="Добави описание към проекта"
                    id="project-description"
                    name="project-description"
                    required
                    InputProps={{ rows: 10 }}
                    variant='outlined'
                    value={projectDescription}
                    onChange={handleProjectDescriptionChange}
                />
            </Grid>
        </>
    )
}