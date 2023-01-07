import * as React from 'react';
import { Grid, Typography, Stack, Button } from '@mui/material';
import { navigate } from 'gatsby';
import MainLayout from '../components/NavigationBar/MainLayout';
import JobPost from '../components/JobsPage/JobPost';

export default function SavedJobs() {
    const jobs = [];

    return (
        <MainLayout>
            <Typography variant='h5' sx={{ textAlign: 'center', margin: { xs: '8px 0 0', md: '24px 0' } }}>
                Списък запазени обяви
            </Typography>
            {
                jobs.length
                    ? (
                        <Grid container sx={{
                            maxWidth: 1100, margin: '16px auto',
                            justifyContent: { xs: 'center', md: 'normal' },
                        }} gap={3} >
                            {
                                jobs.map(job => (
                                    <JobPost key={job.id} job={job} />
                                ))
                            }
                        </Grid>
                    )
                    : (
                        <Stack sx={{ maxWidth: 1000, justifyContent: 'center', margin: '0 auto' }}>
                            <Typography variant='h6' sx={{ textAlign: 'center', margin: 5 }}>
                                Все още нямате запазени обяви 😔
                            </Typography>
                            <Typography variant='h6' sx={{ textAlign: 'center' }}>
                                Намерете подходящите за вас тук 😎
                            </Typography>
                            <Button
                                variant='contained'
                                sx={{ margin: '16px auto', width: { xs: '100%', md: '50%' } }}
                                onClick={() => navigate('/home')}
                            >Потърси</Button>
                        </Stack>
                    )
            }
        </MainLayout >
    )
}