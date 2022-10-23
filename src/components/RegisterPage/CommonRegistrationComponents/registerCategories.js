import setImageSize from "../../../utils/resizePicFromCloudinary";

const register_categories = [
    {
        category_description: 'Обяви за постоянна работа / стаж',
        category_image: setImageSize('AdobeStock_381098646_winuky'),
        additional_description: [
            'Вие сте фирма, която предлага работа?',
            'Споделете вашата обява за работа / стаж и намерете подходящия кандидат.',
            `След регистрация имате възможност да качвате обяви за постоянна работа
            и да споделите краткосрочни проекти / задачи`
        ],
    },
    {
        category_description: 'Проекти / задачи',
        category_image: setImageSize('constructions_gmbnrz'),
        additional_description: [
            'Имаш проект / задача, за който не се изисква дългосрочен трудов договор?',
            'Намери подходящ талант в нашата платформа, за да свърши нужната работа.',
        ]
    },
    {
        category_description: 'Искам да работя на свободна практика',
        category_image: setImageSize('AdobeStock_197246714_op2m3x'),
        additional_description: [
            'Искаш да работиш за себе си?',
            'Работи в удобно за теб време, където и когато поискаш.',
            'Намери подходящия проект за твоите умения, като споделиш опита и знанията си в нашата платформа.',
        ]
    },
];

export default register_categories