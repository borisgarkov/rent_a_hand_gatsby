import { Avatar, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import * as React from "react";

export default function TalentsCatalog({ user }) {
    return (
        <Grid item userId={user.id}>
            <Paper sx={{
                maxWidth: { xs: 145, md: 200 }, display: 'flex',
                flexDirection: 'column', alignItems: 'center',
            }}>
                <Avatar alt='profile picture' sx={{ width: 80, height: 80, marginTop: 1 }} />
                <Typography sx={{
                    textAlign: 'center', fontSize: '1rem', fontWeight: 'bold',
                    wordSpacing: '100px'
                }}>
                    {user.name}
                </Typography>

                <Typography variant='body2' sx={{
                    textAlign: 'center',
                    fontWeight: '100'
                }}>
                    {user.job}
                </Typography>
                <Stack sx={{ flexDirection: 'row', alignItems: 'center', margin: '16px 0' }}>
                    <PersonPinCircleIcon sx={{ color: 'secondary.main' }} />
                    <Typography variant='body2'>{user.city}</Typography>
                </Stack>
                <Button variant='contained' fullWidth>Виж профил</Button>
            </Paper>
        </Grid>
    )
}