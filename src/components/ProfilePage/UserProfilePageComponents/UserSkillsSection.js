import { Chip, Stack, Typography } from "@mui/material";
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';
import { skillsChipOnHoverCssStyle, userInfoIconHeadingCssStyle } from "./commonProfileCssStyles";
import * as React from 'react';
import user from "./testUser";

export const UserSkillsSection = () => {
    return (
        <Stack sx={{ ...userInfoIconHeadingCssStyle }}>
            <Stack sx={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 0.5,
            }}>
                <SquareFootOutlinedIcon sx={{ color: 'primary.main' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1, marginTop: 1 }}>Умения</Typography>
            </Stack>
            <Stack sx={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 1,
            }}>
                {
                    user.skills.map(skill => {
                        return (
                            <Chip key={skill} label={skill} variant="filled" sx={skillsChipOnHoverCssStyle} />
                        )
                    })
                }
            </Stack>
        </Stack>
    )
};