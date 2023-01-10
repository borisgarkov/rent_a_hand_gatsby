import * as React from "react";
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MessageIcon from '@mui/icons-material/Message';

import useScreenResolution from '../components/hooks/useScreenResolution';
import { Avatar, Box, Button, Card, Chip, Grid, Typography } from '@mui/material';
import currentUser from "../components/db-files/currentUser";
import * as styles from '../components/Home/home-styles.module.css';
import MainLayout from '../components/NavigationBar/MainLayout';
import ProfileTabs from "../components/ProfilePage/ProfileTabs";
import EditButton from "../components/ProfilePage/EditButton";
import { StaticImage } from "gatsby-plugin-image";

const Profile = (props) => {
    const isMobile = useScreenResolution('md');

    return (
        <>
            <Box sx={{
                width: '100%',
                height: { xs: '200px', lg: '300px' },
                position: 'relative',
            }}>
                <Box sx={{
                    width: '100%',
                    height: { xs: '200px', lg: '300px' },
                    position: 'relative',
                }} >
                    {/* <StaticImage src={currentUser.coverPicture} alt='cover' className={styles.coverImage} /> */}
                    <img src={currentUser.coverPicture} alt='cover' className={styles.coverImage} />
                    <EditButton editStyle={{
                        position: 'absolute',
                        bottom: 10,
                        right: '1%',
                        zIndex: 2,
                    }} />
                </Box>
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
                    minHeight: '180px',
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
                            columnGap: { xs: 4, md: 1 },
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
                        <Typography variant="h6">
                            {currentUser.username}
                        </Typography>
                        {
                            !isMobile &&
                            <Button variant='outlined'
                                sx={{ maxWidth: '113px', padding: 1, textTransform: 'none' }}
                            >
                                Съобщение
                            </Button>
                        }
                    </Box>
                    <Grid container sx={{
                        justifyContent: 'center',
                        gap: 2,
                        margin: '24px auto',
                        maxWidth: '80%'
                    }}>
                        {
                            currentUser.skills.map((skill, indx) => {
                                return (
                                    <Grid item key={indx}>
                                        <Chip label={skill} variant="filled" sx={{
                                            '&:hover': { backgroundColor: '#bdbdbd' }
                                        }} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Card>

                <ProfileTabs />
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