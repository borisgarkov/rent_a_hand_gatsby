import KeyIcon from '@mui/icons-material/Key';
import { Avatar, Button, TextField, Typography } from '@mui/material';
import BasePasswordTemplate from '../components/LoginPage/BasePasswordTemplate';
import * as React from "react";
import Navigation from '../components/NavigationBar/Navigation';


export default function ForgottenPassword() {
    return (
        <Navigation>
            <BasePasswordTemplate>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <KeyIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Забравена парола
                </Typography>
                <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    label='Имейл адрес'
                    name='email'
                    autoComplete='email'
                />
                <Typography variant='body2'>
                    На посочения от Вас имейл адрес ще бъдат изпратени инструкции как да възстановите паролата си.
                </Typography>
                <Button sx={{ marginTop: 5, marginBottom: 2 }} variant='contained' fullWidth>Възстанови парола</Button>
            </BasePasswordTemplate>
        </Navigation>
    )
}