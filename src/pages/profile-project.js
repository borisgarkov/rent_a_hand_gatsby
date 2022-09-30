import { Avatar, Box, Button, Card, Stack, Typography } from "@mui/material";
import { projects } from "../components/JobsPage/test-jobs";
import * as React from 'react';
import AllJobsSection from "../components/ProfilePage/AllJobsSection";

import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Navigation from "../components/NavigationBar/Navigation";

const ProjectProfilePage = () => {
    return (
        <Navigation>
            <Card sx={{
                marginTop: { xs: 1, sm: '15px' }, marginBottom: 2, marginLeft: 'auto', marginRight: 'auto', maxWidth: 1100
            }}>
                <Stack sx={{
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 4,
                    alignItems: { xs: 'center', sm: 'center' },
                    padding: 1,
                    height: { sm: 120 }
                }}>
                    <Avatar sx={{ width: 70, height: 70, marginLeft: { sm: 2 } }} />
                    <Stack sx={{
                        flexDirection: { sm: 'row' },
                        gap: 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%'
                    }}>
                        <Stack sx={{ flexDirection: { xs: 'row', sm: 'column' }, alignItems: 'center', gap: { xs: 1, sm: 0 } }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Иван Иванов</Typography>
                            <Stack sx={{
                                flexDirection: 'row',
                                gap: 0.5,
                            }}>
                                <LocationOnIcon sx={{ color: 'primary.main' }} size='small' />
                                <Typography variant="body1">Бургас</Typography>
                            </Stack>
                        </Stack>
                        <Button
                            variant='contained'
                            startIcon={<MessageOutlinedIcon />}
                            sx={{ marginLeft: { sm: 'auto' }, marginRight: { sm: 5 }, width: { xs: '100%', sm: '20%' } }}
                        >
                            Свържи се
                        </Button>
                    </Stack>
                </Stack>
            </Card>

            <Box sx={{ height: { md: '100vh' } }}>
                <AllJobsSection jobs={projects} sectionTitle='Проекти' />
            </Box>
        </Navigation>
    )
};

export default ProjectProfilePage;