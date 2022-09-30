import { Stack, Typography } from "@mui/material";
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import { userInfoIconHeadingCssStyle } from "./commonProfileCssStyles";
import { EditSectionButton } from "./EditSectionButton";
import * as React from 'react';

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
                <EditSectionButton />
            </Stack>
            <Typography variant='body2' sx={{
                marginBottom: 1,
                textAlign: 'justify',
                paddingLeft: { sm: '32px' },
                paddingRight: { sm: '10px' },
            }}>
                Hey I'm Preslav,
                Thanks for visiting my profile.
                The experience that i have at the moment is at 100% for me and every time i learn something its 100% more.
                I have good presentation skills in sales and excellent technical skills in process engineering.
                At the moment i am working as a process enginer in production factory with aluminium profiles.
                Making analysis for production process and solving problems in production with aluminium is one of
                my best abilities that i have and i want to help people here. Drawing on inventor 2021 mechanical parts
                for machines and using CAD ,CAM is also one of my other specialties. Designing new type of machine parts
                for specific situations in production and helping it get better at quality. Being communicative during work
                is my top skill that i have acquired during my working career till now. The more we go on the more it continues...
                For conclusion im a very kind and generous person that if something is interesting for me to do, im getting along with it very fast.
            </Typography>
        </Stack >
    )
};