import * as React from "react";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MessageIcon from '@mui/icons-material/Message';

import useScreenResolution from '../components/hooks/useScreenResolution';
import { Avatar, Box, Button, Card, Grid, Typography } from '@mui/material';
import currentUser from "../components/db-files/currentUser";
import * as styles from '../components/Home/home-styles.module.css';

import MainLayout from '../components/NavigationBar/MainLayout';
import HomeLeftMenuIcons from '../components/Home/HomeLeftMenuIcons';
import HomeRightMenuSearchBar from '../components/Home/HomeRightMenuSearchBar';
import JobsCatalog from "../components/JobsPage/JobsCatalog";
import { jobs } from '../components/db-files/test-jobs';
import FixedBottomNavigation from "../components/Home/FixedBottomNavigation";

const Profile = (props) => {
    const isMobile = useScreenResolution('md');

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
            <Box sx={{ padding: { xs: '10px 0', md: '20px 70px' }, }}>
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
                        <Box>
                            <a href=""><FacebookIcon /></a>
                            <a href=""><InstagramIcon /></a>
                            <a href=""><TwitterIcon /></a>
                            <a href=""><LinkedInIcon /></a>
                        </Box>
                        <Typography variant="h6">
                            {currentUser.username}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                            {
                                isMobile && <a href=""><MessageIcon /></a>
                            }
                            <a href=""><LanguageIcon /></a>
                            <Box sx={{ display: 'flex', flexDirection: 'row', }}>
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
    const isMobile = useScreenResolution('lg');

    return (
        <MainLayout>
            {
                isMobile
                    ? <FixedBottomNavigation />
                    : <Grid item lg={2}>
                        <HomeLeftMenuIcons isMobile={isMobile} />
                    </Grid>
            }
            <Grid item lg={7} xs={12}>
                <Profile />
            </Grid>
            {
                !isMobile &&
                <Grid item sm={3}>
                    <HomeRightMenuSearchBar />
                </Grid>
            }
        </MainLayout>
    )
};