import { Stack, Typography } from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment';
import SchoolIcon from '@mui/icons-material/School';
import { EditSectionButton } from "./EditSectionButton";
import { userInfoIconHeadingCssStyle } from "./commonProfileCssStyles";
import * as React from 'react';

export const UserSalaryAndEducationSection = ({ updateUserInfo, currentUser }) => {

    return (
        <>
            <Stack sx={{
                flexDirection: 'row',
                alignItems: 'center',
                ...userInfoIconHeadingCssStyle,
                gap: 2,
                marginBottom: 5,
            }}>
                <PaymentIcon sx={{ color: '#666666', alignSelf: 'flex-start' }} />
                <Stack>
                    <Typography variant='body1' fontWeight='bold'>
                        Заплащане
                    </Typography>
                    <Typography variant='body1' >
                        {currentUser.wage} лв / час
                    </Typography>
                </Stack>
                <EditSectionButton dialogTitle={'Заплащане'}
                    textFieldValue={currentUser.wage}
                    userDataPoint={'wage'}
                    updateUserInfo={updateUserInfo} />
            </Stack >
            <Stack sx={{
                flexDirection: 'row',
                alignItems: 'center',
                ...userInfoIconHeadingCssStyle,
                gap: 2,
                marginBottom: 5,
            }}>
                <SchoolIcon sx={{ color: '#666666', alignSelf: 'flex-start' }} />
                <Stack spacing={1}>
                    <Typography variant='body1' fontWeight='bold'>
                        Образование
                    </Typography>
                    <Typography variant='body2'>
                        {currentUser.university1}
                    </Typography>
                    <Typography variant='body2'>
                        {currentUser.university2}
                    </Typography>
                </Stack>
                <EditSectionButton dialogTitle={'Образование'} textFieldValue={currentUser.university1} userDataPoint={'university1'} updateUserInfo={updateUserInfo} />
            </Stack>
        </>
    )
}
