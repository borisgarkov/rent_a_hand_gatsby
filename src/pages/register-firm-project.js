import * as React from "react";
import Navigation from "../components/NavigationBar/Navigation";
import BaseRegistrationTemplate from '../components/RegisterPage/CommonRegistrationComponents/BaseRegistrationTemplate';
import PersonalDataReview from '../components/RegisterPage/CommonRegistrationComponents/PersonalDataReview';
import ProjectDescription from '../components/RegisterPage/CommonRegistrationComponents/ProjectDescription';
import AddressFormFirmRegister from '../components/RegisterPage/RegisterAsFirmComponents/AddressFormFirmRegister';
import AdministrativeInfo from '../components/RegisterPage/RegisterAsFirmComponents/AdministrativeInfo';

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
        content: <ProjectDescription />,
    },
    {
        label: 'Политика за поверителност',
        content: <PersonalDataReview />,
    },
];


export default function RegisterProjectAsFirm() {
    return (
        <Navigation>
            <BaseRegistrationTemplate
                registrationTitle={'Регистрация за фирми'}
                steps={steps}
            />
        </Navigation>
    )
}