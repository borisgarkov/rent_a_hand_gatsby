import { Button, Grid, Paper, Tab, Tabs, TextField } from "@mui/material";

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import * as React from 'react';

import useScreenResolution from "../components/hooks/useScreenResolution";
import ImageUpload from "../components/RegisterPage/CommonRegistrationComponents/ImageUpload";
import commonRegistrationFields from "../components/RegisterPage/CommonRegistrationComponents/commonRegistrationFields";
import BaseRegistrationTextField from "../components/RegisterPage/CommonRegistrationComponents/BaseRegistrationTextField";
import Navigation from "../components/NavigationBar/Navigation";

const GeneralInfo = () => {

    const fields = [
        ...commonRegistrationFields.slice(0, 2),
        ...commonRegistrationFields.slice(4),
        {
            type: 'text',
            textField: 'city',
            id: 'city',
            label: 'Населено място',
            autoComplete: '',
            required: true,
            displaySizeProps: {
                xs: 12,
                sm: 6,
            }
        },
    ];

    return (
        <>
            <Grid container spacing={3} sx={{ padding: 2 }}>
                {
                    fields.map((x, index) => <BaseRegistrationTextField key={index} field={x} />)
                }
                <ImageUpload uploadImageText={'Избери Профилна снимка *'} />
            </Grid>

            <Button sx={{ margin: '16px 0' }} fullWidth>Запази промени</Button>
        </>
    )
};

const PasswordUpdate = () => {

    const fields = [
        {
            type: 'old-password',
            textField: 'old-password',
            id: 'old-password',
            label: 'Предишна парола',
            autoComplete: '',
            required: true,
            displaySizeProps: {
                xs: 12,
            }
        },
        ...commonRegistrationFields.slice(2, 4),
    ];

    return (
        <>
            <Grid container spacing={3} sx={{ padding: 2 }}>
                {
                    fields.map((x, index) => <BaseRegistrationTextField key={index} field={x} />)
                }
            </Grid>

            <Button sx={{ margin: '16px 0' }} fullWidth>Запази промени</Button>
        </>
    )
};

const Resume = () => {
    const fields = [
        {
            type: 'text',
            textField: 'profession',
            id: 'profession',
            label: 'Професия',
            autoComplete: 'profession',
            required: true,
            displaySizeProps: {
                xs: 12,
            }
        },
        {
            type: 'number',
            textField: 'wage',
            id: 'wage',
            label: 'Заплащане на час',
            autoComplete: 'wage',
            required: false,
            displaySizeProps: {
                xs: 12,
            }
        },
    ]

    return (
        <>
            <Grid container spacing={3} sx={{ padding: 2 }}>
                {
                    fields.map((x, index) => <BaseRegistrationTextField key={index} field={x} />)
                }
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        multiline
                        label="Кратко резюме"
                        id="company-resume"
                        name="company-resume"
                        required
                        InputProps={{
                            rows: 5
                        }}
                    />
                </Grid>
            </Grid>

            <Button sx={{ margin: '16px 0' }} fullWidth>Запази промени</Button>
        </>
    )
};

const Education = () => {
    const fields = [
        {
            type: 'text',
            textField: 'education',
            id: 'education',
            label: 'Образование',
            autoComplete: 'education',
            required: false,
            displaySizeProps: {
                xs: 12,
            }
        },
    ];

    return (
        <>
            <Grid container spacing={3} sx={{ padding: 2 }}>
                {
                    fields.map((x, index) => <BaseRegistrationTextField key={index} field={x} />)
                }
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        multiline
                        label="Добави твоите умения"
                        id="skills"
                        name="skills"
                        required
                        InputProps={{
                            rows: 5
                        }}
                    />
                </Grid>
            </Grid>

            <Button sx={{ margin: '16px 0' }} fullWidth>Запази промени</Button>
        </>
    )
};


export default function Settings() {
    const [tab, setTab] = React.useState(0);

    const tabsChangeHandler = (event, newTab) => { setTab(newTab); };

    const tabs_info = [
        {
            index: 0,
            label: 'Обща информация',
            icon: <AccountCircleOutlinedIcon />,
        },
        {
            index: 1,
            label: 'Парола',
            icon: <VpnKeyOutlinedIcon />,
        },
        {
            index: 2,
            label: 'Резюме',
            icon: <ContactMailOutlinedIcon />,
        },
        {
            index: 3,
            label: 'Образование / умения',
            icon: <SchoolOutlinedIcon />,
        },
    ];

    const tabs_data = {
        0: <GeneralInfo />,
        1: <PasswordUpdate />,
        2: <Resume />,
        3: <Education />,
    };

    const resolution = useScreenResolution();

    const tabs_variant = resolution ? 'scrollable' : 'fullWidth';

    return (
        <Navigation>
            <Paper sx={{
                width: { xs: '100%', lg: 800 }, margin: '16px auto',
            }}>
                <Tabs
                    value={tab}
                    centered
                    sx={{ marginBottom: 5 }} onChange={tabsChangeHandler}
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                    variant={tabs_variant}
                >
                    {
                        tabs_info.map(x => (
                            <Tab key={x.label} wrapped label={x.label} icon={x.icon}
                                iconPosition='top' value={x.value}
                                sx={{ padding: { xs: '0 10px', md: '0 50px', }, }}
                            />
                        ))
                    }
                </Tabs>
                {tabs_data[tab]}
            </Paper>
        </Navigation>
    )
}