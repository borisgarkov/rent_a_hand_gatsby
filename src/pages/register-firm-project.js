import * as React from "react";
import useFirmStateVariables from "../components/hooks/useFirmStateVariables";
import useProjectStateVariables from "../components/hooks/useProjectStateVariables";
import Navigation from "../components/NavigationBar/Navigation";
import BaseRegistrationTemplate from
    '../components/RegisterPage/CommonRegistrationComponents/BaseRegistrationTemplate';
import PersonalDataReview from
    '../components/RegisterPage/CommonRegistrationComponents/PersonalDataReview';
import ProjectDescription from
    '../components/RegisterPage/CommonRegistrationComponents/ProjectDescription';
import AddressFormFirmRegister from
    '../components/RegisterPage/RegisterAsFirmComponents/AddressFormFirmRegister';
import AdministrativeInfo from
    '../components/RegisterPage/RegisterAsFirmComponents/AdministrativeInfo';
import FirmRegistrationContext from
    "../components/RegisterPage/RegisterAsFirmComponents/firmRegisterContext";

export default function RegisterProjectAsFirm() {

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

    const {
        // project information form
        projectTitle, handleProjectTitleChange, projectDuration, handleProjectDurationChange,
        workCategory, handleWorkCategoryChange, payment, handlePaymentChange,
        paymentType, handlePaymentTypeChange, projectDescription, handleProjectDescriptionChange,
    } = useProjectStateVariables();


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