import { Stack, Typography } from "@mui/material";
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import { userInfoIconHeadingCssStyle } from "./commonProfileCssStyles";
import * as React from 'react';
import user from "./testUser";

export const UserResumeSection = () => {
    return (
        <Stack sx={{
            flexDirection: 'column',
            ...userInfoIconHeadingCssStyle
        }}>
            <Stack sx={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                gap: 1,
            }}>
                <TextSnippetOutlinedIcon sx={{ color: 'primary.main' }} />
                <Typography fontWeight='bold' variant='h6'>Резюме</Typography>
            </Stack>
            <Typography variant='body2' sx={{
                marginBottom: 1,
                textAlign: 'justify',
                paddingLeft: { sm: '32px' },
                paddingRight: { sm: '10px' },
            }}>
                {user.resume}
            </Typography>
        </Stack >
    )
};