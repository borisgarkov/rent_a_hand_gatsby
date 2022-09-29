import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from "@mui/material";
import CategoriesDropDownList from "../CommonItems/CategoriesDropDownList";
import BaseRegistrationTextField from "../RegisterPage/CommonRegistrationComponents/BaseRegistrationTextField";
import * as React from "react";

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
        }
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
        }
    },
]

export const AddProjectTextFields = () => {

    const [payment, setPayment] = React.useState('на час');

    const handleChange = (event) => {
        setPayment(event.target.value);
    };

    return (
        <>
            <Grid container spacing={3}>
                {
                    projectCreationFields.map((x, index) => <BaseRegistrationTextField key={index} field={x} />)
                }
            </Grid>
            <Grid item xs={12} sx={{ marginTop: 2 }}>
                <CategoriesDropDownList />
            </Grid>
            <FormControl sx={{ marginTop: 4 }}>
                <FormLabel id="demo-controlled-radio-buttons-group">Заплащане</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={payment}
                    onChange={handleChange}
                    row
                >
                    <FormControlLabel value="на час" control={<Radio />} label="на час" />
                    <FormControlLabel
                        value="еднократно за целия проект"
                        control={<Radio />}
                        label="еднократно за целия проект"
                    />
                </RadioGroup>
            </FormControl>
            <Grid item xs={12} sx={{ marginTop: 2 }}>
                <TextField
                    type='number'
                    required
                    id='wage'
                    name='wage'
                    label='Заплащане в лв.'
                    fullWidth
                    variant="outlined"
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
                />
            </Grid>
        </>
    )
}