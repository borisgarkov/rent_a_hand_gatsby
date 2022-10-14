import BaseRegistrationTemplate from "../components/RegisterPage/CommonRegistrationComponents/BaseRegistrationTemplate";
import PersonalDataReview from "../components/RegisterPage/CommonRegistrationComponents/PersonalDataReview";
import AddressFormFreelancerRegister from "../components/RegisterPage/RegisterAsFreelancerComponents/AddressFormFreelancerRegister";

import ProjectDescription from "../components/RegisterPage/CommonRegistrationComponents/ProjectDescription";
import * as React from "react";
import Navigation from "../components/NavigationBar/Navigation";
import FreelanceRegisterStateContext from "../components/RegisterPage/RegisterAsFreelancerComponents/freelanceRegisterContext";


export default function RegisterProjectAsPersonForm() {

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
            label: 'Обща информация',
            content: <AddressFormFreelancerRegister />,
        },
        {
            label: 'Описание на проекта',
            content: <ProjectDescription context={FreelanceRegisterStateContext} />,
        },
        {
            label: 'Политика за поверителност',
            content: <PersonalDataReview context={FreelanceRegisterStateContext} />,
        },
    ];

    return (
        <Navigation>
            <FreelanceRegisterStateContext.Provider
                value={{
                    // first page - administrative info section
                    firstName, handleFirstNameChange, lastName, handleLastNameChange,
                    password, handlePasswordChange, secondPassword, handleSecondPasswordChange,
                    email, handleEmailChange, city, handleCityChange, isImageUploaded, getImageUploaded,
                    // project information form
                    projectTitle, handleProjectTitleChange, projectDuration, handleProjectDurationChange,
                    workCategory, handleWorkCategoryChange, payment, handlePaymentChange,
                    paymentType, handlePaymentTypeChange, projectDescription, handleProjectDescriptionChange,
                    // policy form
                    policyClicked, handlePolicyClickedChange
                }}
            >
                <BaseRegistrationTemplate registrationTitle={'Регистрация в \' Проекти\''} steps={steps} />
            </FreelanceRegisterStateContext.Provider>
        </Navigation>
    )
}