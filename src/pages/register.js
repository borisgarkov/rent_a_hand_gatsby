import BaseRegisterPageCategories
    from '../components/RegisterPage/CommonRegistrationComponents/BaseRegisterPageCategories';
import register_categories
    from '../components/RegisterPage/CommonRegistrationComponents/registerCategories';
import * as React from "react";
import Navigation from '../components/NavigationBar/Navigation';


const registerUrlMap = {
    'Обяви за постоянна работа / стаж': '/register-as-firm',
    'Проекти / задачи': '/register-project',
    'Искам да работя на свободна практика': '/register-as-freelancer',
}

export default function RegisterPageCategories() {

    return (
        <Navigation>
            <BaseRegisterPageCategories
                register_categories={register_categories}
                registerUrlMap={registerUrlMap}
            />
        </Navigation>
    )
}