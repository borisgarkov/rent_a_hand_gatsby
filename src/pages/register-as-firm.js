import BaseRegistrationTemplate from
    '../components/RegisterPage/CommonRegistrationComponents/BaseRegistrationTemplate';
import AddressFormFirmRegister from
    '../components/RegisterPage/RegisterAsFirmComponents/AddressFormFirmRegister';
import PersonalDataReview from
    '../components/RegisterPage/CommonRegistrationComponents/PersonalDataReview';
import AdministrativeInfo from
    '../components/RegisterPage/RegisterAsFirmComponents/AdministrativeInfo';
import * as React from "react";
import Navigation from '../components/NavigationBar/Navigation';
import FirmRegistrationContext from
    '../components/RegisterPage/RegisterAsFirmComponents/firmRegisterContext';
import useFirmStateVariables from
    '../components/hooks/useFirmStateVariables';

export default function RegisterAsFirmForm() {
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
                    // policy form
                    policyClicked, handlePolicyClickedChange
                }}
            >
                <BaseRegistrationTemplate registrationTitle={'Регистрация за фирми'} steps={steps} />
            </FirmRegistrationContext.Provider>
        </Navigation>
    )
}