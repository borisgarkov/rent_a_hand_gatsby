import * as React from 'react';
import Navigation from '../components/NavigationBar/Navigation';
import { Grid, Typography, Stack, Button } from '@mui/material';
import TalentsCatalog from '../components/JobsPage/TalentsCatalog';
import { navigate } from 'gatsby';

export default function SavedTalents() {
    const textStyle = {
        textAlign: 'center'
    };

    const test_users = [];

    return (
        <Navigation>
            <Typography variant='h5' sx={{ ...textStyle, margin: { xs: '8px 0 0', md: '24px 0' } }}>
                Списък запазени таланти
            </Typography>
            {
                test_users.length
                    ? (
                        <Grid container sx={{
                            maxWidth: 1100, margin: '16px auto',
                            justifyContent: { xs: 'center', md: 'normal' },
                        }} gap={3} >
                            {test_users.map(user => (<TalentsCatalog key={user.id} user={user} />))}
                        </Grid>
                    )
                    : (
                        <Stack sx={{ maxWidth: 1000, justifyContent: 'center', margin: '0 auto' }}>
                            <Typography variant='h6'
                                sx={{ ...textStyle, margin: 5 }}
                            >Все още нямате запазени таланти 😔</Typography>

                            <Typography variant='h6' sx={textStyle}>Намерете подходящите хора за вашия проект 😎</Typography>
                            <Button
                                variant='contained'
                                sx={{ margin: '16px auto', width: { xs: '100%', md: '50%' } }}
                                onClick={() => navigate('/jobs')}
                            >Потърси</Button>
                        </Stack>
                    )
            }
        </Navigation >
    )
}