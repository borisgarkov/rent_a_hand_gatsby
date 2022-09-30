import { Chip, Stack, Typography } from "@mui/material";
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';
import { skillsChipOnHoverCssStyle, userInfoIconHeadingCssStyle } from "./commonProfileCssStyles";
import { EditSectionButton } from "./EditSectionButton";
import * as React from 'react';

export const UserSkillsSection = () => {
    return (
        <Stack sx={{
            ...userInfoIconHeadingCssStyle
        }}>
            <Stack sx={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 0.5,
            }}>
                <SquareFootOutlinedIcon sx={{ color: 'primary.main' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1, marginTop: 1 }}>Умения</Typography>
                <EditSectionButton />
            </Stack>
            <Stack sx={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 1,
            }}>
                <Chip label="Databases" variant="filled" sx={skillsChipOnHoverCssStyle} />
                <Chip label="Nagios" variant="filled" sx={skillsChipOnHoverCssStyle} />
                <Chip label="Zabbix" variant="filled" sx={skillsChipOnHoverCssStyle} />
            </Stack>
        </Stack>
    )
};