const commonRegistrationFields = [
    {
        type: 'text',
        textField: 'firstName',
        id: 'firstName',
        label: 'Име',
        autoComplete: 'given-name',
        required: true,
        displaySizeProps: {
            xs: 12,
            sm: 6,
        }
    },
    {
        type: 'text',
        textField: 'lastName',
        id: 'lastName',
        label: 'Фамилия',
        autoComplete: 'family-name',
        required: true,
        displaySizeProps: {
            xs: 12,
            sm: 6,
        }
    },
    {
        type: 'password',
        textField: 'password1',
        id: 'password1',
        label: 'Парола',
        autoComplete: '',
        required: true,
        displaySizeProps: {
            xs: 12,
        }
    },
    {
        type: 'password',
        textField: 'password2',
        id: 'password2',
        label: 'Потвърди парола',
        autoComplete: '',
        required: true,
        displaySizeProps: {
            xs: 12,
        }
    },
    {
        type: 'email',
        textField: 'email',
        id: 'email',
        label: 'Имейл адрес',
        autoComplete: '',
        required: true,
        displaySizeProps: {
            xs: 12,
            sm: 6,
        }
    },
]

export default commonRegistrationFields