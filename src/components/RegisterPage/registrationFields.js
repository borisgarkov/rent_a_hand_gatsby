const registrationFields = (
    username, handleUsernameChange,
    password, handlePasswordChange,
    secondPassword, handleSecondPasswordChange,
    email, handleEmailChange,
) => {
    return (
        [
            {
                type: 'email',
                textField: 'email',
                id: 'email',
                label: 'Имейл адрес',
                autoComplete: '',
                required: true,
                displaySizeProps: {
                    xs: 12,
                },
                value: email,
                updateFunction: handleEmailChange,
            },
            {
                type: 'text',
                textField: 'username',
                id: 'username',
                label: 'Потребителско име',
                required: true,
                displaySizeProps: {
                    xs: 12,
                },
                value: username,
                updateFunction: handleUsernameChange,
            },
            {
                type: 'password',
                textField: 'password1',
                id: 'password1',
                label: 'Парола',
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
                required: true,
                displaySizeProps: {
                    xs: 12,
                },
                value: secondPassword,
                updateFunction: handleSecondPasswordChange,
            },
        ]
    )
};

export default registrationFields;