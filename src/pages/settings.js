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


const ProfilePictureSection = () => {
    return (
        <Stack sx={{ marginBottom: 2, flexDirection: 'row', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ width: 70, height: 70 }} />
            <Typography>Профилна снимка</Typography>
        </Stack>
    )
};


export default function Settings() {
    // first page registration - administrative info section
    const [firstName, setFirstName] = React.useState('');
    const handleFirstNameChange = (event) => { setFirstName(event.target.value) };

    const [lastName, setLastName] = React.useState('');
    const handleLastNameChange = (event) => { setLastName(event.target.value) };

    const [password, setPassword] = React.useState('');
    const handlePasswordChange = (event) => { setPassword(event.target.value) };

    const [secondPassword, setSecondPassword] = React.useState('');
    const handleSecondPasswordChange = (event) => { setSecondPassword(event.target.value) };

    const [email, setEmail] = React.useState('');
    const handleEmailChange = (event) => { setEmail(event.target.value) };

    const [city, setCity] = React.useState('');
    const handleCityChange = (event) => { setCity(event.target.value) };

    const [isImageUploaded, setIsImageUploaded] = React.useState(false);

    const getImageUploaded = (event) => {
        let imagePath = event.target.value;
        if (imagePath) {
            setIsImageUploaded(true);
        };
    };

    // second page registration - skills and education section
    const [profession, setProfession] = React.useState('');
    const handleProfessionChange = (event) => { setProfession(event.target.value) };

    const [telephone, setTelephone] = React.useState('');
    const handleTelephoneChange = (event) => { setTelephone(event.target.value) };

    const [expectedWage, setExpectedWage] = React.useState('');
    const handleExpectedWageChange = (event) => { setExpectedWage(event.target.value) };

    const [wantToWorkFullTime, setWantToWorkFullTime] = React.useState(false);
    const handleWantToWorkFullTimeChange = (event) => { setWantToWorkFullTime(event.target.checked) };

    const [inputSkillValue, setInputSkillValue] = React.useState('');
    const handleInputSkillChange = (event) => { setInputSkillValue(event.target.value) }

    const [skills, setSkills] = React.useState([]);

    const handleSkillChange = () => {
        if (inputSkillValue === '' || skills.includes(inputSkillValue)) { return };

        setSkills([...skills, inputSkillValue]);
        setInputSkillValue('');
    };

    const handleDeleteSkill = (curentSkill) => { setSkills(skills.filter(skill => skill !== curentSkill)) }

    const [university, setUniversity] = React.useState('');
    const handleUniversityChange = (event, newValue) => { setUniversity(newValue) };

    const [otherUniversity, setOtherUniversity] = React.useState('');
    const handleOtherUniversityChange = (event) => { setOtherUniversity(event.target.value) };

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