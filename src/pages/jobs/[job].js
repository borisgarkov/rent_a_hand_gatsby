import * as React from "react";
import {
    Avatar, Button, Card, CardContent, CardHeader,
    CardMedia, Divider, Stack, Typography, Box
} from "@mui/material";
import { jobs } from "../../components/db-files/test-jobs";
import WorkIcon from '@mui/icons-material/Work';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import cld from "../../services/getCloudinaryImages";
import MainLayout from "../../components/NavigationBar/MainLayout";

const fetchJobInfo = (currentJobId) => {
    return jobs.filter(obj => {
        return obj.id == currentJobId
    });
};

const SideAllJobsMenu = ({ currentJob, jobs, title, icon }) => {
    return (
        <Card sx={{ alignSelf: 'flex-start', width: '100%', marginBottom: '100px' }}>
            <Stack sx={{ flexDirection: 'row', alignItems: 'center', marginLeft: 2 }}>
                {icon}
                <CardHeader subheader={`${title} ${currentJob.publisher}`} />
            </Stack>
            {
                jobs.map(job => (
                    <React.Fragment key={job.id}>
                        <CardHeader
                            title={job.title}
                            subheader={job.datePosted}
                            avatar={
                                <Avatar>{job.publisher.slice(0, 1)}</Avatar>
                            }
                        />
                        <Divider />
                    </React.Fragment>
                ))
            }
        </Card>
    )
};

export default function JobPost(props) {
    const coverImage = cld.image('main page photos/main_pageworking_desk_m3ay3c').toURL();
    const job = fetchJobInfo(props.job)[0];

    if (job === undefined) {
        return (
            <MainLayout>
                <Typography variant="h5" sx={{
                    paddingTop: 15,
                    textAlign: 'center',
                }}>
                    Упсс... нищо не е намерено 😟
                </Typography>
            </MainLayout>
        )
    };

    const jobMetaData = [
        {
            icon: <WorkIcon sx={{ color: '#666666' }} />,
            text: job.jobCategory,
        },
        {
            icon: <LocalOfferIcon sx={{ color: '#666666' }} />,
            text: job.salary,
        },
    ];

    return (
        <MainLayout>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                paddingTop: 10,
                margin: '0 auto',
                maxWidth: { lg: '80%' }
            }}>
                <Card sx={{ width: '100%' }}>
                    <CardHeader
                        title={job.title}
                        subheader={`${job.city}`}
                    />
                    <CardMedia
                        component='img'
                        height='200'
                        image={coverImage}
                        alt='card img'
                        sx={{ marginBottom: 2 }}
                    />
                    <CardContent>
                        {
                            jobMetaData.map(x => (
                                <Stack key={x.text} sx={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    columnGap: 1,
                                    marginBottom: 2
                                }}>
                                    {x.icon}
                                    <Typography variant="body2">{x.text}</Typography>
                                </Stack>
                            ))
                        }

                        <Stack spacing={1} sx={{ marginTop: 5 }}>
                            <Typography variant="body2">Споделено от</Typography>
                            <Stack spacing={2} sx={{
                                flexDirection: 'row',
                                alignItems: 'flex-start', columnGap: 2
                            }}>
                                <Avatar alt='profile img' />
                                <Typography variant="body2">{job.publisher}</Typography>
                            </Stack>
                        </Stack>
                        <Typography variant="body2" sx={{ margin: '16px 0' }}>
                            {
                                job.description
                            }
                        </Typography>
                        <Button variant='contained'>Свържи се</Button>
                    </CardContent>
                </Card>
                <Stack sx={{ gap: 2 }}>
                    <SideAllJobsMenu currentJob={job} jobs={jobs} title='Други обяви от'
                        icon={<BusinessCenterOutlinedIcon />} />
                </Stack>
            </Box>
        </MainLayout >
    )
};