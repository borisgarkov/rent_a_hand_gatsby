import { Stack, Typography } from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment';
import SchoolIcon from '@mui/icons-material/School';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { userInfoIconHeadingCssStyle } from "./commonProfileCssStyles";
import * as React from 'react';
import user from "./testUser";

export const UserSalaryAndEducationSection = () => {

    return (
        <>
            <Stack sx={{
                flexDirection: 'row',
                alignItems: 'center',
                ...userInfoIconHeadingCssStyle,
                gap: 2,
            }}>
                <PaymentIcon sx={{ color: '#666666', alignSelf: 'flex-start' }} />
                <Stack>
                    <Typography variant='body1' fontWeight='bold'>
                        Заплащане
                    </Typography>
                    <Typography variant='body1' >
                        {user.wage} лв / час
                    </Typography>
                </Stack>
            </Stack >
            <Stack sx={{
                flexDirection: 'row',
                alignItems: 'center',
                ...userInfoIconHeadingCssStyle,
                gap: 2,
            }}>
                <DoneAllIcon sx={{ color: '#666666', alignSelf: 'flex-start' }} />
                <Stack>
                    <Typography variant='body1'>
                        Интересувам се от предложения за постоянна работа
                    </Typography>
                </Stack>
            </Stack >
            <Stack sx={{
                flexDirection: 'row',
                alignItems: 'center',
                ...userInfoIconHeadingCssStyle,
                gap: 2,
            }}>
                <SchoolIcon sx={{ color: '#666666', alignSelf: 'flex-start' }} />
                <Stack spacing={1}>
                    <Typography variant='body1' fontWeight='bold'>
                        Образование
                    </Typography>
                    <Typography variant='body2'>
                        {user.university}
                    </Typography>
                </Stack>
            </Stack>
        </>
    )
}
