import * as React from "react";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MessageIcon from '@mui/icons-material/Message';

import useScreenResolution from '../components/hooks/useScreenResolution';
import { Avatar, Box, Button, Card, Grid, Stack, Typography } from '@mui/material';
import currentUser from "../components/db-files/currentUser";
import * as styles from '../components/Home/home-styles.module.css';

import MainLayout from '../components/NavigationBar/MainLayout';
import JobsCatalog from "../components/JobsPage/JobsCatalog";
import { jobs } from '../components/db-files/test-jobs';
import { Link } from "gatsby";
import { subscriptionPage, savedJobsPage, settingsPage, exitPage } from '../components/Home/menuPages';


const Profile = (props) => {
    const isMobile = useScreenResolution('md');
    const isBelowLargeResolution = useScreenResolution('lg');

    const userProfilePages = [subscriptionPage, savedJobsPage, settingsPage, exitPage];

    return (
        <>
            <Box sx={{
                width: '100%',
                height: { xs: '200px', lg: '300px' },
                position: 'relative',
            }}>
                <img src={currentUser.coverPicture} className={styles.coverImage} alt='cover' />
                <Avatar src={currentUser.profilePicture} alt='profile-pic' sx={{
                    width: { xs: '100px', lg: '180px' },
                    height: { xs: '100px', lg: '180px' },
                    position: 'absolute',
                    top: { xs: '150px', lg: '200px' },
                    left: 0,
                    right: 0,
                    margin: 'auto',
                }} />
            </Box>
            <Box sx={{
                padding: { xs: '10px 0', md: '20px 70px' },
                margin: { xs: '0 auto 100px', lg: '0 auto' }
            }}>
                <Card sx={{
                    borderRadius: '15px',
                    height: '180px',
                }}>
                    <Box sx={{
                        padding: '60px 60px 0',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Box sx={{
                            display: 'flex',
                            columnGap: { xs: 6, md: 1 },
                        }}>
                            <a href="/"><FacebookIcon /></a>
                            <a href="/"><InstagramIcon /></a>
                            <a href="/"><TwitterIcon /></a>
                            <a href="/"><LinkedInIcon /></a>
                        </Box>
                        <Typography variant="h6">
                            {currentUser.username}
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            columnGap: { xs: 4, md: 1 },
                            margin: { xs: '16px auto', md: '0' }
                        }}>
                            {
                                isMobile && <a href="/"><MessageIcon /></a>
                            }
                            <a href="/"><LanguageIcon /></a>
                            <Box sx={{
                                display: 'flex',
                            }}>
                                <LocationOnIcon />
                                <Typography>{currentUser.location}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    {
                        !isMobile &&
                        <Button variant='outlined'
                            sx={{ margin: '16px auto', display: 'block' }}>
                            Съобщение
                        </Button>
                    }
                </Card>
                {
                    isBelowLargeResolution &&
                    <Card sx={{
                        margin: '16px auto',
                        backgroundColor: '#eeeeee',
                        borderRadius: '15px',
                        height: '180px',
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        gap: 2,
                    }}>
                        {
                            userProfilePages.map(p => {
                                return (
                                    <Link to={p.path} key={p.title}>
                                        <Stack sx={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            columnGap: 1,
                                            margin: '2px auto'
                                        }}>
                                            <img alt='icon' width='28' height='28' src={p.icon} />
                                            <Typography variant="body1">{p.title}</Typography>
                                        </Stack>
                                    </Link>
                                )
                            })
                        }
                    </Card>
                }
                <Grid container sx={{ margin: '24px auto', }} gap={2}>
                    {
                        jobs.map(job => (
                            <JobsCatalog key={job.id} job={job} />
                        ))
                    }
                </Grid>
            </Box >
        </>
    )
};

export default function ProfilePage() {
    return (
        <MainLayout>
            <Profile />
        </MainLayout>
    )
};