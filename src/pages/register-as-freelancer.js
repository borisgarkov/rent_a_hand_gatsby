import AddressFormFreelancerRegister from '../components/RegisterPage/RegisterAsFreelancerComponents/AddressFormFreelancerRegister';
import SkillsEducationFormFreelancerRegister from '../components/RegisterPage/RegisterAsFreelancerComponents/SkillsEducationFormFreelancerRegister';
import PersonalDataReview from '../components/RegisterPage/CommonRegistrationComponents/PersonalDataReview';
import BaseRegistrationTemplate from '../components/RegisterPage/CommonRegistrationComponents/BaseRegistrationTemplate';
import * as React from "react";
import Navigation from '../components/NavigationBar/Navigation';

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
        content: <PersonalDataReview />,
    },
];

export default function RegisterAsFreelancerForm() {
    const [formData, setFormData] = React.useState({
        'firstName': null,
        'lastName': null,
        'password1': null,
        'password2': null,
        'email': null,
        'city': null,
        'profession': null,
        'wage': null,
        'education': null,
    })

    const handleFormDataSubmit = (newData) => {
        // console.log(newData);
        setFormData(newData);
    }

    return (
        <Navigation>
            <BaseRegistrationTemplate
                formData={formData}
                handleFormDataSubmit={handleFormDataSubmit}
                registrationTitle={'Регистрация в \' Таланти\''}
                steps={steps}
            />
        </Navigation>
    );
}
