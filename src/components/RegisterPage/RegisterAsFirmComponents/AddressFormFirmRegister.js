import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import BaseRegistrationTextField from "../CommonRegistrationComponents/BaseRegistrationTextField";
import ImageUpload from "../CommonRegistrationComponents/ImageUpload";
import * as React from "react";
import FirmRegistrationContext from "./firmRegisterContext";


export default function AddressFormFirmRegister() {

    const {
        // administrative information
        bulstat, handleBulstatChange, companyName, handleCompanyNameChange,
        address, handleAddressChange, businessSector, handleBusinessSectorChange,
        website, handleWebsiteChange, employeesNumber, handleEmployeesNumberChange,
        companyResume, handleCompanyResumeChange, personPosition, handlePersonPositionChange,
        isImageUploaded, getImageUploaded, isCoverImageUploaded, getCoverImageUploaded
    } = React.useContext(FirmRegistrationContext);

    const registrationFields = [
        {
            type: 'text',
            textField: 'bulstat',
            id: 'bulstat',
            label: 'ЕИК/БУЛСТАТ',
            autoComplete: '',
            required: true,
            displaySizeProps: {
                xs: 12,
            },
            value: bulstat,
            updateFunction: handleBulstatChange,
        },
        {
            type: 'text',
            textField: 'company-name',
            id: 'company-name',
            label: 'Име на Компанията',
            autoComplete: '',
            required: true,
            displaySizeProps: {
                xs: 12,
            },
            value: companyName,
            updateFunction: handleCompanyNameChange,
        },
        {
            type: 'text',
            textField: 'address',
            id: 'address',
            label: 'Адрес на компанията по регистрация',
            autoComplete: '',
            required: true,
            displaySizeProps: {
                xs: 12,
            },
            value: address,
            updateFunction: handleAddressChange,
        },
        {
            type: 'text',
            textField: 'business-sector',
            id: 'business-sector',
            label: 'Бизнес сектор',
            autoComplete: 'business-sector',
            required: true,
            displaySizeProps: {
                xs: 12,
            },
            value: businessSector,
            updateFunction: handleBusinessSectorChange,
        },
        {
            type: 'url',
            textField: 'website',
            id: 'website',
            label: 'Сайт на компанията',
            autoComplete: 'website',
            required: false,
            displaySizeProps: {
                xs: 12,
            },
            value: website,
            updateFunction: handleWebsiteChange,
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
            value: employeesNumber,
            updateFunction: handleEmployeesNumberChange,
        },
    ];


    return (
        <Grid container spacing={3}>
            {
                registrationFields.map((x, index) => <BaseRegistrationTextField key={index} field={x} />)
            }
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    multiline
                    label="Кратко резюме на компанията"
                    id="resume"
                    name="resume"
                    required
                    InputProps={{
                        rows: 5
                    }}
                    value={companyResume}
                    onChange={handleCompanyResumeChange}
                />
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="input-person-position">Вашата длъжност във фирмата</InputLabel>
                    <Select
                        labelId="person-position"
                        id="person-position"
                        name="person-position"
                        label="Вашата длъжност във фирмата"
                        value={personPosition}
                        onChange={handlePersonPositionChange}
                    >
                        <MenuItem value={'Управител'}>Управител</MenuItem>
                        <MenuItem value={'Собственик'}>Собственик</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <ImageUpload
                uploadImageText={'Прикачи фирмено лого *'}
                isImageUploaded={isImageUploaded}
                getImageUploaded={getImageUploaded}
            />
            <ImageUpload
                uploadImageText={'Прикачи снимка за корица *'}
                isImageUploaded={isCoverImageUploaded}
                getImageUploaded={getCoverImageUploaded}
            />
        </Grid>
    )
}