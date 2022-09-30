import BaseRegistrationTemplate from '../components/RegisterPage/CommonRegistrationComponents/BaseRegistrationTemplate';
import AddressFormFirmRegister from '../components/RegisterPage/RegisterAsFirmComponents/AddressFormFirmRegister';
import PersonalDataReview from '../components/RegisterPage/CommonRegistrationComponents/PersonalDataReview';
import AdministrativeInfo from '../components/RegisterPage/RegisterAsFirmComponents/AdministrativeInfo';
import * as React from "react";
import Navigation from '../components/NavigationBar/Navigation';

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
        content: <PersonalDataReview />,
    },
];


export default function RegisterAsFirmForm() {
    const [formData, setFormData] = React.useState({
        'bulstat': null,
        'name-bulgarian': null,
        'name-latin': null,
        'address': null,
        'business-sector': null,
        'website': null,
        'image': null,
        'name': null,
        'firstName': null,
        'lastName': null,
        'password1': null,
        'password2': null,
        'email': null,
        'phone': null,
        'person-position': null,
        'company-resume': null,
        'employeed-number': null,
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
                registrationTitle={'Регистрация за фирми'}
                steps={steps}
            />
        </Navigation>
    )
}