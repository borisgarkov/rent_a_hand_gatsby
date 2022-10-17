import * as React from 'react';

export default function useFreelanceStateVariables(params) {
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

    // third page - - policy section
    const [policyClicked, setPolicyClicked] = React.useState(true);
    const handlePolicyClickedChange = (event) => { setPolicyClicked(event.target.checked) };

    return ({
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
        // third page - policy section
        policyClicked, handlePolicyClickedChange
    })
}