// add skills section
{/* <Grid item xs={12}>
    <Typography sx={{ margin: '0 0 16px' }}>Добави твоите умения</Typography>
    <TextField fullWidth sx={{ margin: '0 0 24px' }} 
    value={inputSkillValue} 
    onChange={handleInputSkillChange} />
    <Button variant='contained' sx={{ margin: '0 0 16px' }} onClick={handleSkillChange} >+ Добави умение</Button>

    <Stack direction="row" spacing={1}>
        {
            skills.map((skill) => (<Chip label={skill} onDelete={() => handleDeleteSkill(skill)} key={skill} />))
        }
    </Stack>
</Grid> */}


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