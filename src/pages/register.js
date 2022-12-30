import { Button, Grid, Link, Typography, Avatar } from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import * as React from "react";
import { navigate } from "gatsby";
import BaseLoginRegisterTemplate from "../components/LoginPage/BaseLoginRegisterTemplate";
import registrationFields from "../components/RegisterPage/registrationFields";
import BaseRegistrationTextField from "../components/RegisterPage/BaseRegistrationTextField";

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
                Регистрация
            </Typography>
            <Grid container>
                {
                    registrationFields().map((x, index) =>
                        <BaseRegistrationTextField key={index} field={x} />
                    )
                }
            </Grid>
            <Button
                sx={{ marginTop: 5, marginBottom: 2 }}
                variant='contained'
                fullWidth
                onClick={() => (navigate('/home'))}
            >
                Регистрация
            </Button>
            <Grid container>
                <Grid item>
                    <Typography variant="body2">Вече имате акаунт?</Typography>
                    <Link
                        {...linkProps}
                        onClick={() => (navigate('/login'))}
                    >
                        Влез
                    </Link>
                </Grid>
            </Grid>
        </BaseLoginRegisterTemplate>
    );
};