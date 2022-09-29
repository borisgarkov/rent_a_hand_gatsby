import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link, Stack, Typography } from "@mui/material";
import * as React from "react";

const socialMediaIcons = [
    {
        icon: <FacebookIcon sx={{ color: '#0c89ef' }} />,
        link: "https://www.facebook.com/Rent-A-Hand-Bulgaria-101820744973512",
    },
    {
        icon: <InstagramIcon sx={{ color: '#b930ad' }} />,
        link: "https://www.instagram.com/rent_a_hand_bulgaria/",
    },
    {
        icon: <LinkedInIcon sx={{ color: '#0a66c2' }} />,
        link: "https://www.linkedin.com/company/rent-a-hand-bulgaria/",
    },
]

export default function SocialMediaIcons({ sx }) {
    return (
        <Stack sx={{
            flexDirection: 'row',
            gap: 2,
            margin: '0 auto',
            ...sx
        }}>
            <Typography variant="body1">
                Социални мрежи
            </Typography>
            {
                socialMediaIcons.map(x => {
                    return (
                        <Link
                            key={x.link}
                            color="inherit"
                            href={x.link}
                            target="_blank"
                            rel="noopener"
                        >
                            {x.icon}
                        </Link>
                    )
                })
            }
        </Stack>
    )
}