import {
    Avatar, Box, Card,
    CardContent, CardHeader,
    CardMedia, Chip, Divider, Stack, Typography
} from "@mui/material";

import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import DocumentScannerTwoToneIcon from '@mui/icons-material/DocumentScannerTwoTone';
import MapsHomeWorkTwoToneIcon from '@mui/icons-material/MapsHomeWorkTwoTone';
import useScreenResolution from "../components/hooks/useScreenResolution";
import AllJobsSection from "../components/ProfilePage/AllJobsSection";
import * as React from "react";
import * as styles from '../components/ProfilePage/profile-page-style.module.css';

import { jobs, projects } from "../components/JobsPage/test-jobs";
import cld from "../services/getCloudinaryImages";
import Navigation from "../components/NavigationBar/Navigation";

const header_image = cld.image('main page photos/main_pageworking_desk_m3ay3c').toURL();
const logo = cld.image('main page photos/Rent_A_Hand_D1_ekcqtj').toURL();


const companyInfo = `
    DXC Technology is a Fortune 500 global IT services leader.
    Our more than 130,000 people in 70-plus countries are entrusted by our
    customers to deliver what matters most. We use the power
    of technology to deliver mission-critical IT services across
    the Enterprise Technology Stack to drive business impact.
    DXC is an employer of choice with strong values, and fosters a
    culture of inclusion, belonging, and corporate citizenship. We are DXC.
    DXC Technology is a Fortune 500 global IT services leader.
    Our more than 130,000 people in 70-plus countries are entrusted by our
    customers to deliver what matters most. We use the power
    of technology to deliver mission-critical IT services across
    the Enterprise Technology Stack to drive business impact.
    DXC is an employer of choice with strong values, and fosters a
    culture of inclusion, belonging, and corporate citizenship. We are DXC.
    DXC Technology is a Fortune 500 global IT services leader.
    Our more than 130,000 people in 70-plus countries are entrusted by our
    customers to deliver what matters most. We use the power
    of technology to deliver mission-critical IT services across
    the Enterprise Technology Stack to drive business impact.
    DXC is an employer of choice with strong values, and fosters a
    culture of inclusion, belonging, and corporate citizenship. We are DXC.
`;


export default function CompanyProfilePage() {
    const isBelowMediumResolution = useScreenResolution('md');

    return (
        <Navigation>
            <Card sx={{ maxWidth: 1100, margin: '10px auto', position: 'relative' }}>
                <CardMedia
                    src={header_image}
                    alt='card img'
                    component='img'
                    sx={{ height: { sx: 100, md: 400 } }}
                />
                {
                    isBelowMediumResolution ?
                        null :
                        <Avatar
                            className={styles.imageStyle}
                            src={logo}
                            sx={{
                                width: 120, height: 120,
                                position: 'absolute',
                                top: '340px', left: '40px',
                                backgroundColor: 'white',
                                border: '1px solid #e2e2e2'
                            }}
                            alt='logo'
                        />
                }
                <CardHeader title='Rent A Hand' titleTypographyProps={{ textAlign: 'center' }} />
                <Stack sx={{ flexDirection: { sx: 'column', md: 'row' }, gap: 3 }}>
                    <CardContent sx={{ flexBasis: { md: '80%' } }}>
                        <Typography variant="h6">За компанията</Typography>
                        <Divider sx={{ margin: '0 auto 16px', backgroundColor: 'primary.light', }} />
                        <Typography sx={{ textAlign: 'justify' }}>{companyInfo}</Typography>
                    </CardContent>
                    <CardContent sx={{ flexBasis: { md: '50%' } }}>
                        <Typography variant="h6" >Рент Ъ Хенд</Typography>
                        <Divider sx={{ margin: '0 auto 16px', backgroundColor: 'primary.light', }} />
                        <Box sx={{ marginBottom: 2 }}>
                            <Chip icon={<HomeTwoToneIcon />} label="Уебсайт" variant="outlined"
                                onClick={() => window.open('https://rent-a-hand-823c6.web.app/', '_blank')}
                            />
                        </Box>
                        <Box sx={{ marginBottom: 2 }}>
                            <Chip icon={<MapsHomeWorkTwoToneIcon />}
                                label="Бизнес сектор: Строителство"
                                variant="outlined" />
                        </Box>
                        <Box sx={{ marginBottom: 2 }}>
                            <Chip icon={<PeopleAltTwoToneIcon />} label="Брой служители: 100" variant="outlined" />
                        </Box>
                        <Chip icon={<DocumentScannerTwoToneIcon />} label="БУЛСТАТ: 58451654" variant="outlined" />

                    </CardContent>
                </Stack>
            </Card>
            <AllJobsSection jobs={jobs} sectionTitle='Обяви за работа' />
            <AllJobsSection jobs={projects} sectionTitle='Проекти' />
        </Navigation>
    )
}