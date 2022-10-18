import { Avatar, Button, Paper, Tab, Tabs, Stack, Typography } from "@mui/material";

import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import StoreIcon from '@mui/icons-material/Store';
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
import FirmRegistrationContext from "../components/RegisterPage/RegisterAsFirmComponents/firmRegisterContext";
import useFirmStateVariables from "../components/hooks/useFirmStateVariables";
import AddressFormFirmRegister from "../components/RegisterPage/RegisterAsFirmComponents/AddressFormFirmRegister";
import AdministrativeInfo from "../components/RegisterPage/RegisterAsFirmComponents/AdministrativeInfo";

const TabsChanger = ({ tab, tabsChangeHandler, tabs_info, tabs_data }) => {

    const resolution = useScreenResolution();
    const tabs_variant = resolution ? 'scrollable' : 'fullWidth';

    return (
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
    )
}

const ProfilePictureSection = () => {
    return (
        <Stack sx={{ marginBottom: 2, flexDirection: 'row', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ width: 70, height: 70 }} />
            <Typography>Профилна снимка</Typography>
        </Stack>
    )
};

const FreelancerSettings = () => {
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
                <TabsChanger
                    tab={tab} tabsChangeHandler={tabsChangeHandler}
                    tabs_info={tabs_info} tabs_data={tabs_data}
                />
            </FreelanceRegisterStateContext.Provider>
        </Navigation>
    )
};

const FirmSettings = () => {
    const {
        // administrative information
        bulstat, handleBulstatChange, companyName, handleCompanyNameChange,
        address, handleAddressChange, businessSector, handleBusinessSectorChange,
        website, handleWebsiteChange, employeesNumber, handleEmployeesNumberChange,
        companyResume, handleCompanyResumeChange, personPosition, handlePersonPositionChange,
        isImageUploaded, getImageUploaded, isCoverImageUploaded, getCoverImageUploaded,
        // address page registration
        firstName, handleFirstNameChange, lastName, handleLastNameChange,
        password, handlePasswordChange, secondPassword, handleSecondPasswordChange,
        email, handleEmailChange, phone, handlePhoneChange,
        // policy form
        policyClicked, handlePolicyClickedChange
    } = useFirmStateVariables();

    const [tab, setTab] = React.useState(0);
    const tabsChangeHandler = (event, newTab) => { setTab(newTab) };

    const tabs_info = [
        {
            index: 0,
            label: 'Адресна регистрация',
            icon: <ContactMailOutlinedIcon />,
        },
        {
            index: 1,
            label: 'Административна информация',
            icon: <StoreIcon />,
        },
    ];

    const tabs_data = {
        0: <AddressFormFirmRegister />,
        1: <AdministrativeInfo />,
    };

    return (
        <Navigation>
            <FirmRegistrationContext.Provider
                value={{
                    // administrative information
                    bulstat, handleBulstatChange, companyName, handleCompanyNameChange,
                    address, handleAddressChange, businessSector, handleBusinessSectorChange,
                    website, handleWebsiteChange, employeesNumber, handleEmployeesNumberChange,
                    companyResume, handleCompanyResumeChange, personPosition, handlePersonPositionChange,
                    isImageUploaded, getImageUploaded, isCoverImageUploaded, getCoverImageUploaded,
                    // address page registration
                    firstName, handleFirstNameChange, lastName, handleLastNameChange,
                    password, handlePasswordChange, secondPassword, handleSecondPasswordChange,
                    email, handleEmailChange, phone, handlePhoneChange,
                    // policy form
                    policyClicked, handlePolicyClickedChange
                }}
            >
                <TabsChanger
                    tab={tab} tabsChangeHandler={tabsChangeHandler}
                    tabs_info={tabs_info} tabs_data={tabs_data}
                />
            </FirmRegistrationContext.Provider>
        </Navigation>
    )
};

const ProjectFreelancerSettings = () => {
    const {
        // first page - administrative info section
        firstName, handleFirstNameChange, lastName, handleLastNameChange,
        password, handlePasswordChange, secondPassword, handleSecondPasswordChange,
        email, handleEmailChange, city, handleCityChange, isImageUploaded, getImageUploaded,
    } = useFreelanceStateVariables();

    const [tab, setTab] = React.useState(0);
    const tabsChangeHandler = (event, newTab) => { setTab(newTab) };

    const tabs_info = [
        {
            index: 0,
            label: 'Обща информация',
            icon: <ContactMailOutlinedIcon />,
        }
    ];

    const tabs_data = { 0: <AddressFormFreelancerRegister /> };

    return (
        <Navigation>
            <FreelanceRegisterStateContext.Provider
                value={{
                    // first page - administrative info section
                    firstName, handleFirstNameChange, lastName, handleLastNameChange,
                    password, handlePasswordChange, secondPassword, handleSecondPasswordChange,
                    email, handleEmailChange, city, handleCityChange, isImageUploaded, getImageUploaded,
                }}
            >
                <TabsChanger
                    tab={tab} tabsChangeHandler={tabsChangeHandler}
                    tabs_info={tabs_info} tabs_data={tabs_data}
                />
            </FreelanceRegisterStateContext.Provider>
        </Navigation>
    )
};

export default function Settings() {
    const currentUser = 'freelancer';

    const userMap = {
        'freelancer': () => <FreelancerSettings />,
        'firm': () => <FirmSettings />,
        'project-freelancer': () => <ProjectFreelancerSettings />
    };

    return (
        userMap[currentUser]()
    )
}