import Grid from '@mui/material/Grid';
import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import BaseRegistrationTextField from '../CommonRegistrationComponents/BaseRegistrationTextField';
import * as React from "react";

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
        }
    },
    {
        type: 'number',
        textField: 'wage',
        id: 'wage',
        label: 'Заплащане на час',
        autoComplete: 'wage',
        required: false,
        displaySizeProps: {
            xs: 12,
        }
    },
    {
        type: 'text',
        textField: 'education',
        id: 'education',
        label: 'Образование',
        autoComplete: 'education',
        required: false,
        displaySizeProps: {
            xs: 12,
        }
    },
]


export default function SkillsEducationFormFreelancerRegister() {
    const [workType, setWorkType] = React.useState('желая да работя само на свободна практика')

    const handleChange = (event) => {
        setWorkType(event.target.value)
    };

    const freelanceWork = 'интересувам се от проекти / задачи';
    const fullTimeJob = 'интересувам се от проекти / задачи и предложения за постоянна работа';

    return (
        <Grid container spacing={3}>
            {
                registrationFields.map((x, index) => <BaseRegistrationTextField key={index} field={x} />)
            }

            <Grid item xs={12}>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={workType}
                    onChange={handleChange}
                    row
                >
                    <FormControlLabel value={freelanceWork} control={<Radio />} label={freelanceWork} />
                    <FormControlLabel value={fullTimeJob} control={<Radio />} label={fullTimeJob} />
                </RadioGroup>
            </Grid>

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    multiline
                    label="Добави кратко резюме за себе си"
                    id="resume"
                    name="resume"
                    required
                    InputProps={{
                        rows: 5
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    multiline
                    label="Добави твоите умения"
                    id="skills"
                    name="skills"
                    required
                    InputProps={{
                        rows: 5
                    }}
                />
            </Grid>
        </Grid>

    );
}