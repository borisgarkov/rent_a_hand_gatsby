import { Button, TextField, Typography, Avatar } from "@mui/material";
import SyncLockIcon from '@mui/icons-material/SyncLock';
import * as React from "react";
import BasePasswordTemplate from "../components/LoginPage/BasePasswordTemplate";
import Navigation from "../components/NavigationBar/Navigation";

export default function PasswordReset() {
    return (
        <Navigation>
            <BasePasswordTemplate>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <SyncLockIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Нова парола
                </Typography>
                <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='password'
                    label='Парола'
                    name='password'
                    type='password'
                />
                <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='password2'
                    label='Потвърди парола'
                    name='password2'
                    type='password2'
                />
                <Button sx={{ marginTop: 5, marginBottom: 2 }} variant='contained' fullWidth>Запази парола</Button>
            </BasePasswordTemplate>
        </Navigation>
    );
};