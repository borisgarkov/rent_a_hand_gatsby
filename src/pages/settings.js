import { Avatar, Button, Paper, Tab, Tabs, Stack, Typography } from "@mui/material";

import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import * as React from 'react';

import useScreenResolution from "../components/hooks/useScreenResolution";
import Navigation from "../components/NavigationBar/Navigation";
import AddressFormFreelancerRegister from
    "../components/RegisterPage/RegisterAsFreelancerComponents/AddressFormFreelancerRegister";
import SkillsEducationFormFreelancerRegister from
    "../components/RegisterPage/RegisterAsFreelancerComponents/SkillsEducationFormFreelancerRegister";
import FreelanceRegisterStateContext from
    "../components/RegisterPage/RegisterAsFreelancerComponents/freelanceRegisterContext";
import useFreelanceStateVariables from "../components/hooks/useFreelanceStateVariables";

const ProfilePictureSection = () => {
    return (
        <Stack sx={{ marginBottom: 2, flexDirection: 'row', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ width: 70, height: 70 }} />
            <Typography>Профилна снимка</Typography>
        </Stack>
    )
};

export default function Settings() {
    const {
        // first page - administrative info section
        firstName, handleFirstNameChange, lastName, handleLastNameChange,
        password, handlePasswordChange, secondPassword, handleSecondPasswordChange,
        email, handleEmailChange, city, handleCityChange, isImageUploaded, getImageUploaded,
        // second page - skills and education section
        workCategory, handleWorkCategoryChange,
        profession, handleProfessionChange, telephone, handleTelephoneChange,
        expectedWage, handleExpectedWageChange,
        wantToWorkFullTime, handleWantToWorkFullTimeChange, inputSkillValue, handleInputSkillChange,
        skills, handleSkillChange, handleDeleteSkill, university, handleUniversityChange,
        otherUniversity, handleOtherUniversityChange,
    } = useFreelanceStateVariables();

    const [tab, setTab] = React.useState(0);
    const tabsChangeHandler = (event, newTab) => { setTab(newTab) };

    const tabs_info = [
        {
            index: 0,
            label: 'Обща информация',
            icon: <ContactMailOutlinedIcon />,
        },
        {
            index: 1,
            label: 'Умения и образование',
            icon: <SchoolOutlinedIcon />,
        },
    ];

    const tabs_data = {
        0: <AddressFormFreelancerRegister />,
        1: <SkillsEducationFormFreelancerRegister />,
    };

    const resolution = useScreenResolution();

    const tabs_variant = resolution ? 'scrollable' : 'fullWidth';

    return (
        <Navigation>
            <FreelanceRegisterStateContext.Provider
                value={{
                    // first page - administrative info section
                    firstName, handleFirstNameChange, lastName, handleLastNameChange,
                    password, handlePasswordChange, secondPassword, handleSecondPasswordChange,
                    email, handleEmailChange, city, handleCityChange, isImageUploaded, getImageUploaded,
                    // second page - skills and education section
                    workCategory, handleWorkCategoryChange,
                    profession, handleProfessionChange, telephone, handleTelephoneChange,
                    expectedWage, handleExpectedWageChange,
                    wantToWorkFullTime, handleWantToWorkFullTimeChange, inputSkillValue, handleInputSkillChange,
                    skills, handleSkillChange, handleDeleteSkill, university, handleUniversityChange,
                    otherUniversity, handleOtherUniversityChange,
                }}
            >
                <Paper sx={{
                    width: { xs: '100%', lg: 900 }, margin: '16px auto', padding: { xs: 0, lg: '0 40px 8px' }
                }}>
                    <Tabs
                        value={tab}
                        centered
                        sx={{ marginBottom: 5 }} onChange={tabsChangeHandler}
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="tabs scroll"
                        variant={tabs_variant}
                    >
                        {
                            tabs_info.map(t => (
                                <Tab key={t.label} wrapped label={t.label} icon={t.icon}
                                    iconPosition='top' value={t.value}
                                    sx={{ padding: { xs: '0 10px', md: '0 50px', }, }}
                                />
                            ))
                        }
                    </Tabs>
                    {
                        tab === 0
                            ? <ProfilePictureSection />
                            : null
                    }
                    {
                        tabs_data[tab]
                    }
                    <Button sx={{ margin: '16px 0' }} fullWidth variant='contained'>Запази промените</Button>
                </Paper>
            </FreelanceRegisterStateContext.Provider>
        </Navigation>
    )
}