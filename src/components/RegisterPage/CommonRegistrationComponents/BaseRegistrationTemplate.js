import { Box, Button, Grid, Paper, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import * as React from "react";

export default function BaseRegistrationTemplate({ registrationTitle, steps }) {

    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1) };
    const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1) };

    return (
        <Grid container sx={{
            height: '100%',
            justifyContent: 'center',
            margin: '8px auto',
        }}>
            <Grid item xs={12} sm={8} component={Paper} sx={{ padding: { xs: 2, md: 5 } }}>
                <Typography variant='h5' sx={{ margin: '10px', fontWeight: 'bold' }}>{registrationTitle}</Typography>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel
                                optional={
                                    index === steps.length - 1
                                        ? <Typography variant="caption">Последна стъпка</Typography>
                                        : null
                                }
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                {step.content}
                                <Box sx={{ mb: 2, mt: 2 }}>
                                    <Button
                                        variant='contained'
                                        onClick={handleNext}
                                    >
                                        {index === steps.length - 1 ? 'Завърши регистрация' : 'Продължи'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                    >
                                        Назад
                                    </Button>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {
                    activeStep === steps.length
                    && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            <Typography>Всички стъпки са попълнени - моля проверете имейл адреса си за потвърждение</Typography>
                        </Paper>
                    )
                }
            </Grid>
        </Grid >
    );
};