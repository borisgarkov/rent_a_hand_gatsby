import { Grid, Paper, Stack } from "@mui/material";
import cld from "../../services/getCloudinaryImages";
import Copyright from "../CommonItems/Copyright";
import SocialMediaIcons from "../CommonItems/SocialMediaIcons";
import * as React from "react";
import Navigation from "../NavigationBar/Navigation";

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
                    sx={{
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
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