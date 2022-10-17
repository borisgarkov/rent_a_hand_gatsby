import * as React from "react";

export default function useFirmStateVariables() {
    // administrative information
    const [bulstat, setBulstat] = React.useState('');
    const handleBulstatChange = (event) => { setBulstat(event.target.value) };

    const [companyName, setCompanyName] = React.useState('');
    const handleCompanyNameChange = (event) => { setCompanyName(event.target.value) };

    const [address, setAddress] = React.useState('');
    const handleAddressChange = (event) => { setAddress(event.target.value) };

    const [businessSector, setBusinessSector] = React.useState('');
    const handleBusinessSectorChange = (event) => { setBusinessSector(event.target.value) };

    const [website, setWebsite] = React.useState('');
    const handleWebsiteChange = (event) => { setWebsite(event.target.value) };

    const [employeesNumber, setEmployeesNumber] = React.useState('');
    const handleEmployeesNumberChange = (event) => { setEmployeesNumber(event.target.value) };

    const [companyResume, setCompanyResume] = React.useState('');
    const handleCompanyResumeChange = (event) => { setCompanyResume(event.target.value) };

    const [personPosition, setPersonPosition] = React.useState('Управител');
    const handlePersonPositionChange = (event) => { setPersonPosition(event.target.value) };

    const [isImageUploaded, setIsImageUploaded] = React.useState(false);
    const getImageUploaded = (event) => {
        let imagePath = event.target.value;
        if (imagePath) {
            setIsImageUploaded(true);
        };
    };

    const [isCoverImageUploaded, setIsCoverImageUploaded] = React.useState(false);
    const getCoverImageUploaded = (event) => {
        let imagePath = event.target.value;
        if (imagePath) {
            setIsCoverImageUploaded(true);
        };
    };

    // address page registration
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

    const [phone, setPhone] = React.useState('');
    const handlePhoneChange = (event) => { setPhone(event.target.value) };

    // policy form
    const [policyClicked, setPolicyClicked] = React.useState(true);
    const handlePolicyClickedChange = (event) => { setPolicyClicked(event.target.checked) };

    return ({
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
    })
}