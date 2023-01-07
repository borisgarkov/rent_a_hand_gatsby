import { Grid, Paper, Stack } from "@mui/material";
import Copyright from "../CommonItems/Copyright";
import SocialMediaIcons from "../CommonItems/SocialMediaIcons";
import * as React from "react";
import Navigation from "../NavigationBar/Navigation";
import { StaticImage } from "gatsby-plugin-image";
import useScreenResolution from "../hooks/useScreenResolution";

export default function BaseLoginRegisterTemplate(props) {
    const isMobile = useScreenResolution('lg');
    const image = 'https://res.cloudinary.com/jobsportal/image/upload/v1672991628/main%20page%20photos/login_picture.png';

    return (
        <Navigation>
            <Grid container sx={{ height: '100vh' }}>
                {
                    !isMobile &&
                    <Grid item lg={7}>
                        <StaticImage src={image} alt='login img' />
                    </Grid>
                }
                <Grid item xs={12} lg={5} component={Paper} >
                    <Stack sx={{ my: 8, mx: { xs: 4, md: 8 }, alignItems: 'center' }}>
                        {
                            props.children
                        }
                        <Copyright sx={{ mt: 5 }} />
                        <SocialMediaIcons sx={{ margin: '5px 0' }} />
                    </Stack>
                </Grid>
            </Grid>
        </Navigation>
    )
};