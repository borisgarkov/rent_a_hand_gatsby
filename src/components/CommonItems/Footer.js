import { Stack } from "@mui/material";
import Copyright from "./Copyright";
import SocialMediaIcons from "./SocialMediaIcons";
import * as React from "react";

export default function Footer() {
    return (
        <Stack
            component="footer"
            sx={{
                py: 3,
                px: 2,
                backgroundColor: '#eeeeee',
                alignItems: 'center',
            }}>
            <SocialMediaIcons />
            <Copyright />
        </Stack>
    )
}