const commonRegistrationFields = (
    firstName, handleFirstNameChange, lastName, handleLastNameChange,
    password, handlePasswordChange, secondPassword, handleSecondPasswordChange,
    email, handleEmailChange
) => {
    return (
        [
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
                },
                value: firstName,
                updateFunction: handleFirstNameChange,
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
                },
                value: lastName,
                updateFunction: handleLastNameChange,
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
                },
                value: password,
                updateFunction: handlePasswordChange,
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
                },
                value: secondPassword,
                updateFunction: handleSecondPasswordChange,
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
                },
                value: email,
                updateFunction: handleEmailChange,
            },
        ]
    )
};

export default commonRegistrationFields