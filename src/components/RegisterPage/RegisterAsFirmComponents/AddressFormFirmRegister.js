import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import BaseRegistrationTextField from "../CommonRegistrationComponents/BaseRegistrationTextField";
import ImageUpload from "../CommonRegistrationComponents/ImageUpload";
import * as React from "react";

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
        }
    },
    {
        type: 'text',
        textField: 'name-bulgarian',
        id: 'name-bulgarian',
        label: 'Име на Компанията (на Кирилица)',
        autoComplete: '',
        required: true,
        displaySizeProps: {
            xs: 12,
        }
    },
    {
        type: 'text',
        textField: 'name-latin',
        id: 'name-latin',
        label: 'Име на Компанията (на Латиница)',
        autoComplete: '',
        required: true,
        displaySizeProps: {
            xs: 12,
        }
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
        }
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
        }
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
        }
    },
]

export default function AddressFormFirmRegister() {
    const [personPosition, setPersonPosition] = React.useState('Управител');

    const handleChange = (event) => {
        setPersonPosition(event.target.value);
    };

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
                        onChange={handleChange}
                    >
                        <MenuItem value={'Управител'}>Управител</MenuItem>
                        <MenuItem value={'Собственик'}>Собственик</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <ImageUpload uploadImageText={'Прикачи фирмено лого *'} />
        </Grid>
    )
}