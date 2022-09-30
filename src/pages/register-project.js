import BaseRegisterPageCategories from '../components/RegisterPage/CommonRegistrationComponents/BaseRegisterPageCategories';
import setImageSize from '../utils/resizePicFromCloudinary';
import * as React from "react";
import Navigation from '../components/NavigationBar/Navigation';

const register_categories = [
    {
        category_description: 'Юридическо лице',
        category_image: setImageSize('AdobeStock_377903904_ib8koh'),
    },
    {
        category_description: 'Физическо лице',
        category_image: setImageSize('AdobeStock_266764469_c1u8up'),
    },
];

const registerUrlMap = {
    'Юридическо лице': '/register-firm-project',
    'Физическо лице': '/register-person-project',
}

export default function ProjectRegistrationCategories() {
    const [selectedCategoryValue, setSelectedCategoryValue] = React.useState(register_categories[0].category_description);

    const handleChange = (event) => {
        setSelectedCategoryValue(event.currentTarget.innerText);
    };

    return (
        <Navigation>
            <BaseRegisterPageCategories
                register_categories={register_categories}
                registerUrlMap={registerUrlMap}
                selectedCategoryValue={selectedCategoryValue}
                handleChange={handleChange}
            />
        </Navigation>
    )
};