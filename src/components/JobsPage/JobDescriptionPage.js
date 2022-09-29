import * as React from "react";
import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Divider, Stack, Typography, Box } from "@mui/material";
import { jobs, projects } from './test-jobs'

import WorkIcon from '@mui/icons-material/Work';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BackToTopButton from "../CommonItems/BackToTopButton";

import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';

import cld from "../../services/getCloudinaryImages";

const coverImage = cld.image('main page photos/main_pageworking_desk_m3ay3c').toURL();



const job = jobs[3];

const iconMetaDataStyle = {
    color: '#666666',
};

const jobMetaData = [
    {
        icon: <WorkIcon sx={iconMetaDataStyle} />,
        text: job.jobCategory,
    },
    {
        icon: <LocalOfferIcon sx={iconMetaDataStyle} />,
        text: job.salary,
    },
];

const flexContainerJobMetaDataStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 1,
};

const SideAllJobsMenu = ({ jobs, title, icon }) => {
    return (
        <Card sx={{ maxWidth: 433, alignSelf: 'flex-start', width: '100%' }}>
            <Stack sx={{ flexDirection: 'row', alignItems: 'center', marginLeft: 2 }}>
                {icon}
                <CardHeader subheader={`${title} ${job.publisher}`} />
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

export default function JobDescriptionPage() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column-reverse', md: 'row', },
                gap: 1,
                justifyContent: 'center',
                marginTop: { xs: 1, md: 5, },
                marginBottom: 2,
            }}>
                <Stack sx={{ gap: 2 }}>
                    <SideAllJobsMenu jobs={jobs} title='Други обяви от' icon={<BusinessCenterOutlinedIcon />} />
                    <SideAllJobsMenu jobs={projects} title='Други проекти от' icon={<DesignServicesOutlinedIcon />} />
                </Stack>
                <Card sx={{ maxWidth: 676 }}>
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
                                <Stack key={x.text} sx={{ ...flexContainerJobMetaDataStyle }} marginBottom={2}>
                                    {x.icon}
                                    <Typography variant="body2">{x.text}</Typography>
                                </Stack>
                            ))
                        }

                        <Stack spacing={1} sx={{ marginTop: 5 }}>
                            <Typography variant="body2">Споделено от</Typography>
                            <Stack spacing={2} sx={{ flexDirection: 'row', alignItems: 'flex-start', columnGap: 2 }}>
                                <Avatar alt='profile img' />
                                <Typography variant="body2">{job.publisher}</Typography>
                            </Stack>
                        </Stack>
                        <Typography variant="body2" sx={{ margin: '16px 0', textAlign: 'justify', }}>
                            {job.description}
                        </Typography>
                        <Button variant='contained'>Свържи се</Button>
                    </CardContent>
                    <BackToTopButton />
                </Card>
            </Box>
        </>
    )
}