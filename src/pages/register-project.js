import BaseRegistrationTemplate from
    "../components/RegisterPage/CommonRegistrationComponents/BaseRegistrationTemplate";
import PersonalDataReview from
    "../components/RegisterPage/CommonRegistrationComponents/PersonalDataReview";
import AddressFormFreelancerRegister from
    "../components/RegisterPage/RegisterAsFreelancerComponents/AddressFormFreelancerRegister";

import ProjectDescription from "../components/RegisterPage/CommonRegistrationComponents/ProjectDescription";
import * as React from "react";
import Navigation from "../components/NavigationBar/Navigation";
import FreelanceRegisterStateContext from
    "../components/RegisterPage/RegisterAsFreelancerComponents/freelanceRegisterContext";
import useFreelanceStateVariables from "../components/hooks/useFreelanceStateVariables";
import useProjectStateVariables from "../components/hooks/useProjectStateVariables";


export default function RegisterProjectAsPersonForm() {

    const {
        // first page - administrative info section
        firstName, handleFirstNameChange, lastName, handleLastNameChange,
        password, handlePasswordChange, secondPassword, handleSecondPasswordChange,
        email, handleEmailChange, city, handleCityChange, isImageUploaded, getImageUploaded,
        // policy form
        policyClicked, handlePolicyClickedChange
    } = useFreelanceStateVariables();

    const {
        // project information form
        projectTitle, handleProjectTitleChange, projectDuration, handleProjectDurationChange,
        workCategory, handleWorkCategoryChange, payment, handlePaymentChange,
        paymentType, handlePaymentTypeChange, projectDescription, handleProjectDescriptionChange,
        projectCity, handleProjectCityChange,
    } = useProjectStateVariables();


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
                    projectCity, handleProjectCityChange,
                    // policy form
                    policyClicked, handlePolicyClickedChange
                }}
            >
                <BaseRegistrationTemplate registrationTitle={'Регистрация в \' Проекти\''} steps={steps} />
            </FreelanceRegisterStateContext.Provider>
        </Navigation>
    )
}