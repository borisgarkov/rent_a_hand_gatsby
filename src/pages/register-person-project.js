import BaseRegistrationTemplate from "../components/RegisterPage/CommonRegistrationComponents/BaseRegistrationTemplate";
import PersonalDataReview from "../components/RegisterPage/CommonRegistrationComponents/PersonalDataReview";
import AddressFormFreelancerRegister from "../components/RegisterPage/RegisterAsFreelancerComponents/AddressFormFreelancerRegister";

import ProjectDescription from "../components/RegisterPage/CommonRegistrationComponents/ProjectDescription";
import * as React from "react";
import Navigation from "../components/NavigationBar/Navigation";

const steps = [
    {
        label: 'Обща информация',
        content: <AddressFormFreelancerRegister />,
    },
    {
        label: 'Описание на проекта',
        content: <ProjectDescription />,
    },
    {
        label: 'Политика за поверителност',
        content: <PersonalDataReview />,
    },
];


export default function RegisterProjectAsPersonForm() {
    const [formData, setFormData] = React.useState({
        'title': null,
        'category': null,
        'time': null,
        'firstName': null,
        'lastName': null,
        'password1': null,
        'password2': null,
        'email': null,
        'city': null,
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
                registrationTitle={'Регистрация в \' Проекти\''}
                steps={steps}
            />
        </Navigation>
    )
}