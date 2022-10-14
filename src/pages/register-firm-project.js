import * as React from "react";
import Navigation from "../components/NavigationBar/Navigation";
import BaseRegistrationTemplate from '../components/RegisterPage/CommonRegistrationComponents/BaseRegistrationTemplate';
import PersonalDataReview from '../components/RegisterPage/CommonRegistrationComponents/PersonalDataReview';
import ProjectDescription from '../components/RegisterPage/CommonRegistrationComponents/ProjectDescription';
import AddressFormFirmRegister from '../components/RegisterPage/RegisterAsFirmComponents/AddressFormFirmRegister';
import AdministrativeInfo from '../components/RegisterPage/RegisterAsFirmComponents/AdministrativeInfo';
import FirmRegistrationContext from "../components/RegisterPage/RegisterAsFirmComponents/firmRegisterContext";

export default function RegisterProjectAsFirm() {

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

    // project information form
    const [projectTitle, setProjectTitle] = React.useState('');
    const handleProjectTitleChange = (event) => { setProjectTitle(event.target.value) };

    const [projectDuration, setProjectDuration] = React.useState('');
    const handleProjectDurationChange = (event) => { setProjectDuration(event.target.value) };

    const [workCategory, setWorkCategory] = React.useState('ИТ');
    const handleWorkCategoryChange = (event, newValue) => { setWorkCategory(newValue) };

    const [payment, setPayment] = React.useState('');
    const handlePaymentChange = (event) => { setPayment(event.target.value) };

    const [paymentType, setPaymentType] = React.useState('на час');
    const handlePaymentTypeChange = (event) => { setPaymentType(event.target.value) };

    const [projectDescription, setProjectDescription] = React.useState('');
    const handleProjectDescriptionChange = (event) => { setProjectDescription(event.target.value) };


    // policy form
    const [policyClicked, setPolicyClicked] = React.useState(true);
    const handlePolicyClickedChange = (event) => { setPolicyClicked(event.target.checked) };

    const steps = [
        {
            label: 'Адресна регистрация',
            content: <AddressFormFirmRegister />,
        },
        {
            label: 'Административна информация',
            content: <AdministrativeInfo />,
        },
        {
            label: 'Описание на проекта',
            content: <ProjectDescription context={FirmRegistrationContext} />,
        },
        {
            label: 'Политика за поверителност',
            content: <PersonalDataReview context={FirmRegistrationContext} />,
        },
    ];


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
                    // project information form
                    projectTitle, handleProjectTitleChange, projectDuration, handleProjectDurationChange,
                    workCategory, handleWorkCategoryChange, payment, handlePaymentChange,
                    paymentType, handlePaymentTypeChange, projectDescription, handleProjectDescriptionChange,
                    // policy form
                    policyClicked, handlePolicyClickedChange
                }}
            >
                <BaseRegistrationTemplate registrationTitle={'Регистрация за фирми'} steps={steps} />
            </FirmRegistrationContext.Provider>
        </Navigation>
    )
}