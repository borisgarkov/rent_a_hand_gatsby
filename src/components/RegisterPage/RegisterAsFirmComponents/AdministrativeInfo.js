import Grid from "@mui/material/Grid";
import BaseRegistrationTextField from "../CommonRegistrationComponents/BaseRegistrationTextField";
import commonRegistrationFields from "../CommonRegistrationComponents/commonRegistrationFields";
import * as React from "react";


const registrationFields = [
    ...commonRegistrationFields,
    {
        type: 'tel',
        textField: 'phone',
        id: 'phone',
        label: 'Телефон за връзка',
        autoComplete: 'phone',
        required: true,
        displaySizeProps: {
            xs: 12,
            sm: 6,
        },
    },
    {
        type: 'number',
        textField: 'employees-number',
        id: 'employees-number',
        label: 'Брой служители',
        autoComplete: '',
        required: true,
        displaySizeProps: {
            xs: 12,
        },
    },
];

export default function AdministrativeInfo() {
    return (
        <Grid container spacing={3}>
            {
                registrationFields.map((x, index) => <BaseRegistrationTextField key={index} field={x} />)
            }
        </Grid>
    )
}