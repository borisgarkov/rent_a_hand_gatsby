import AddressFormFreelancerRegister from
    '../components/RegisterPage/RegisterAsFreelancerComponents/AddressFormFreelancerRegister';
import SkillsEducationFormFreelancerRegister from
    '../components/RegisterPage/RegisterAsFreelancerComponents/SkillsEducationFormFreelancerRegister';
import PersonalDataReview from
    '../components/RegisterPage/CommonRegistrationComponents/PersonalDataReview';
import BaseRegistrationTemplate from
    '../components/RegisterPage/CommonRegistrationComponents/BaseRegistrationTemplate';
import * as React from "react";
import Navigation from '../components/NavigationBar/Navigation';
import FreelanceRegisterStateContext from
    '../components/RegisterPage/RegisterAsFreelancerComponents/freelanceRegisterContext';
import useFreelanceStateVariables from
    '../components/hooks/useFreelanceStateVariables';

export default function RegisterAsFreelancerForm() {
    const {
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
    } = useFreelanceStateVariables();

    const steps = [
        {
            label: 'Обща информация',
            content: <AddressFormFreelancerRegister />,
        },
        {
            label: 'Умения и образование',
            content: <SkillsEducationFormFreelancerRegister />,
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
                    // second page - skills and education section
                    profession, handleProfessionChange, telephone, handleTelephoneChange,
                    expectedWage, handleExpectedWageChange,
                    wantToWorkFullTime, handleWantToWorkFullTimeChange, inputSkillValue, handleInputSkillChange,
                    skills, handleSkillChange, handleDeleteSkill, university, handleUniversityChange,
                    otherUniversity, handleOtherUniversityChange,
                    // third page - policy section
                    policyClicked, handlePolicyClickedChange
                }}
            >
                <BaseRegistrationTemplate registrationTitle={'Регистрация в \'Таланти\''} steps={steps} />
            </FreelanceRegisterStateContext.Provider>
        </Navigation>
    );
}
