import { Grid, Paper, Stack } from "@mui/material";
import cld from "../../services/getCloudinaryImages";
import Copyright from "../CommonItems/Copyright";
import SocialMediaIcons from "../CommonItems/SocialMediaIcons";
import * as React from "react";
import Navigation from "../NavigationBar/Navigation";
import { StaticImage } from "gatsby-plugin-image";

export default function BaseLoginRegisterTemplate(props) {
    const image = cld.image('main page photos/working_woman_b4fwse').toURL();

    return (
        <Navigation>
            <Grid container sx={{ height: '100vh' }}>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                // sx={{
                //     backgroundImage: `url(${image})`,
                //     backgroundRepeat: 'no-repeat',
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center',
                // }}
                >
                    <StaticImage
                        src='https://res.cloudinary.com/jobsportal/image/upload/v1672991628/main%20page%20photos/login_picture.png'
                        alt='login img'
                    />
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} >
                    <Stack sx={{ my: 8, mx: { xs: 4, md: 8 }, alignItems: 'center' }}>
                        {
                            props.children
                        }
                        <Copyright sx={{ mt: 5 }} />
                        <SocialMediaIcons sx={{ margin: '5px 0' }} />
                    </Stack>
                </Grid>
            </Grid >
        </Navigation>
    )
};