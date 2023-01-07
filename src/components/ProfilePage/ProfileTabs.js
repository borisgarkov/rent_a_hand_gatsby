import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Grid, Stack } from '@mui/material';
import { jobs } from '../db-files/test-jobs';
import JobPost from '../JobsPage/JobPost';
import useScreenResolution from '../hooks/useScreenResolution';
import { subscriptionPage, savedJobsPage, settingsPage, exitPage } from '../Home/menuPages';
import { Link } from 'gatsby';

import PaymentIcon from '@mui/icons-material/Payment';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box >
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const JobsPostsList = (props) => {
    return (
        <Grid container sx={{ margin: '24px auto', }} gap={2}>
            {
                jobs.map(job => (
                    <JobPost key={job.id} job={job} />
                ))
            }
        </Grid>
    )
};

const AdditionalProfilePages = () => {
    const userProfilePages = [subscriptionPage, savedJobsPage, settingsPage, exitPage];

    const muiIcons = {
        'Абонамент': <PaymentIcon />,
        'Запазени обяви': <FolderSpecialIcon />,
        'Настройки': <SettingsIcon />,
        'Изход': <LogoutIcon />,
    };

    return (
        <Stack sx={{
            gap: 2,
            marginTop: 2,
        }}>
            {
                userProfilePages.map(p => {
                    return (
                        <Link to={p.path} key={p.title}>
                            <Button sx={{
                                borderRadius: 5
                            }}
                                fullWidth
                                variant="outlined"
                                startIcon={muiIcons[p.title]}
                            >
                                {p.title}
                            </Button>
                        </Link>
                    )
                })
            }
        </Stack>
    )
};

export default function ProfileTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => { setValue(newValue) };

    const isBelowLargeResolution = useScreenResolution('lg');

    return (
        <>
            {
                isBelowLargeResolution
                    ? <Box sx={{ width: '100%', marginTop: 2 }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label='Обяви' {...a11yProps(0)} />
                                <Tab label='Настройки' {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <JobsPostsList />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <AdditionalProfilePages />
                        </TabPanel>
                    </Box>
                    : <JobsPostsList />
            }
        </>
    );
};