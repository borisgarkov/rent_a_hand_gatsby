import * as React from "react";
import Grid from '@mui/material/Grid';
import BaseRegistrationTextField from '../CommonRegistrationComponents/BaseRegistrationTextField';
import ImageUpload from '../CommonRegistrationComponents/ImageUpload';
import commonRegistrationFields from '../CommonRegistrationComponents/commonRegistrationFields';
import FreelanceRegisterStateContext from "./freelanceRegisterContext";

export default function AddressFormFreelancerRegister() {
    const {
        firstName, handleFirstNameChange, lastName, handleLastNameChange,
        password, handlePasswordChange, secondPassword, handleSecondPasswordChange,
        email, handleEmailChange, city, handleCityChange, isImageUploaded, getImageUploaded
    } = React.useContext(FreelanceRegisterStateContext);

    const registrationFields = [
        ...commonRegistrationFields(
            firstName, handleFirstNameChange, lastName, handleLastNameChange,
            password, handlePasswordChange, secondPassword, handleSecondPasswordChange,
            email, handleEmailChange, city, handleCityChange
        ),
        {
            type: 'text',
            textField: 'city',
            id: 'city',
            label: 'Населено място',
            autoComplete: '',
            required: true,
            displaySizeProps: {
                xs: 12,
                sm: 6,
            },
            value: city,
            updateFunction: handleCityChange,
        },
    ];

    return (
        <Grid container spacing={3}>
            {
                registrationFields.map((x, index) => <BaseRegistrationTextField key={index} field={x} />)
            }
            <ImageUpload
                uploadImageText={'Избери Профилна снимка *'}
                isImageUploaded={isImageUploaded}
                getImageUploaded={getImageUploaded}
            />
        </Grid>
    );
}