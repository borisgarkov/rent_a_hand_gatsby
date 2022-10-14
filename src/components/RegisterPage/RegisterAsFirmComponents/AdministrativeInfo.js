import Grid from "@mui/material/Grid";
import BaseRegistrationTextField from "../CommonRegistrationComponents/BaseRegistrationTextField";
import commonRegistrationFields from "../CommonRegistrationComponents/commonRegistrationFields";
import * as React from "react";
import FirmRegistrationContext from "./firmRegisterContext";

export default function AdministrativeInfo() {
    const {
        firstName, handleFirstNameChange, lastName, handleLastNameChange,
        password, handlePasswordChange, secondPassword, handleSecondPasswordChange,
        email, handleEmailChange, phone, handlePhoneChange
    } = React.useContext(FirmRegistrationContext);

    const registrationFields = [
        ...commonRegistrationFields(
            firstName, handleFirstNameChange, lastName, handleLastNameChange,
            password, handlePasswordChange, secondPassword, handleSecondPasswordChange,
            email, handleEmailChange
        ),
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
            value: phone,
            updateFunction: handlePhoneChange,
        },
    ];

    return (
        <Grid container spacing={3}>
            {
                registrationFields.map((x, index) => <BaseRegistrationTextField key={index} field={x} />)
            }
        </Grid>
    )
}