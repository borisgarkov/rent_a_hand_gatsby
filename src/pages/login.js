import { Button, Grid, Link, TextField, Typography, Avatar } from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import * as React from "react";
import { navigate } from "gatsby";
import BaseLoginRegisterTemplate from "../components/LoginPage/BaseLoginRegisterTemplate";

export default function LoginPage() {
    const linkProps = {
        variant: "body2",
        sx: { cursor: 'pointer' }
    };

    return (
        <BaseLoginRegisterTemplate>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOpenIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Вход
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
            <TextField
                margin='normal'
                required
                fullWidth
                id='password'
                label='Парола'
                name='password'
                type='password'
            />
            <Button
                sx={{ marginTop: 5, marginBottom: 2 }}
                variant='contained'
                fullWidth
                onClick={() => (navigate('/home'))}
            >
                Влез
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link {...linkProps}
                        onClick={() => (navigate('/forgotten-password'))}
                    > Забравена парола?</Link>
                </Grid>
                <Grid item>
                    <Typography variant="body2">Нямате акаунт?</Typography>
                    <Link
                        {...linkProps}
                        onClick={() => (navigate('/register'))}
                    >
                        Регистрирайте се
                    </Link>
                </Grid>
            </Grid>
        </BaseLoginRegisterTemplate>
    );
};