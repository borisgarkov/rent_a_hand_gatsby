import { Stack, Typography } from "@mui/material";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { userInfoIconHeadingCssStyle } from './commonProfileCssStyles';
import * as React from 'react';
import user from "./testUser";

export const UserJobSection = () => {
    return (
        <Stack sx={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            ...userInfoIconHeadingCssStyle,
        }}>
            <WorkOutlineOutlinedIcon sx={{ color: 'primary.main' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>{user.userJob}</Typography>
        </Stack>
    )
}