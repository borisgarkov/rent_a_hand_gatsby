import Grid from '@mui/material/Grid';
import { Button, Chip, FormControlLabel, TextField, Typography, Stack, Autocomplete, Checkbox } from '@mui/material';
import BaseRegistrationTextField from '../CommonRegistrationComponents/BaseRegistrationTextField';
import * as React from "react";
import universitiesList from './univerisitiesList';
import FreelanceRegisterStateContext from './freelanceRegisterContext';
import AutocompleteWorkCatsList from '../../CommonItems/AutocompleteWorkCatsList';

export default function SkillsEducationFormFreelancerRegister() {
    const {
        workCategory, handleWorkCategoryChange,
        profession, handleProfessionChange, telephone, handleTelephoneChange,
        expectedWage, handleExpectedWageChange,
        wantToWorkFullTime, handleWantToWorkFullTimeChange, inputSkillValue, handleInputSkillChange,
        skills, handleSkillChange, handleDeleteSkill, university, handleUniversityChange,
        otherUniversity, handleOtherUniversityChange
    } = React.useContext(FreelanceRegisterStateContext);

    const registrationFields = [
        {
            type: 'text',
            textField: 'profession',
            id: 'profession',
            label: 'Професия',
            autoComplete: 'profession',
            required: true,
            displaySizeProps: {
                xs: 12,
            },
            value: profession,
            updateFunction: handleProfessionChange
        },
        {
            type: 'tel',
            textField: 'telephone',
            id: 'telephone',
            label: 'Телефон',
            autoComplete: 'telephone',
            required: true,
            displaySizeProps: {
                xs: 12,
            },
            value: telephone,
            updateFunction: handleTelephoneChange
        },
        {
            type: 'number',
            textField: 'expectedWage',
            id: 'expectedWage',
            label: 'Заплащане на час',
            autoComplete: 'expectedWage',
            required: false,
            displaySizeProps: {
                xs: 12,
            },
            value: expectedWage,
            updateFunction: handleExpectedWageChange
        },
    ];

    return (
        <Grid container spacing={3}>
            {
                registrationFields.map((x, index) => <BaseRegistrationTextField key={index} field={x} />)
            }

            <Grid item xs={12} >
                <AutocompleteWorkCatsList
                    workCategory={workCategory}
                    handleWorkCategoryChange={handleWorkCategoryChange}
                    label='Избери категория, в която да се показва профила ти при търсене'
                />
            </Grid>

            <Grid item xs={12}>
                <Autocomplete
                    disablePortal
                    id="university"
                    value={university}
                    onChange={handleUniversityChange}
                    options={universitiesList}
                    fullWidth
                    renderInput={(params) => <TextField {...params} label="Университет" />}
                />
            </Grid>
            {
                university === 'Друг'
                    ? <Grid item xs={12}>
                        <TextField
                            id='otherUniversity'
                            type='text'
                            fullWidth
                            label='Моля, въведете Вашия университет'
                            value={otherUniversity}
                            onChange={handleOtherUniversityChange}
                        />
                    </Grid>
                    : null
            }

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    multiline
                    label="Добави кратко резюме за себе си"
                    id="resume"
                    name="resume"
                    required
                    InputProps={{ rows: 5 }}
                />
            </Grid>

            <Grid item xs={12}>
                <Typography sx={{ margin: '0 0 16px' }}>Добави твоите умения</Typography>
                <TextField fullWidth sx={{ margin: '0 0 24px' }} value={inputSkillValue} onChange={handleInputSkillChange} />
                <Button variant='contained' sx={{ margin: '0 0 16px' }} onClick={handleSkillChange} >+ Добави умение</Button>

                <Stack direction="row" spacing={1}>
                    {
                        skills.map((skill) => (<Chip label={skill} onDelete={() => handleDeleteSkill(skill)} key={skill} />))
                    }
                </Stack>
            </Grid>

            <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox checked={wantToWorkFullTime}
                        onChange={handleWantToWorkFullTimeChange} color="secondary" name="policy" />}
                    label="Интересувам се от предложения за постоянна работа"
                />
            </Grid>
        </Grid>
    );
}