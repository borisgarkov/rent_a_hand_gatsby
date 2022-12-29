import { Grid } from "@mui/material";
import * as React from "react";
import useScreenResolution from "../components/hooks/useScreenResolution";
import HomeRightMenuSearchBar from "../components/Home/HomeRightMenuSearchBar";
import HomeLeftMenuIcons from "../components/Home/HomeLeftMenuIcons";
import MainLayout from "../components/NavigationBar/MainLayout";
import FeedSection from '../components/Home/FeedSection';

export default function Home(props) {
    const isMobile = useScreenResolution('lg');

    return (
        <MainLayout>
            <Grid item sm={2} xs={2}>
                <HomeLeftMenuIcons isMobile={isMobile} />
            </Grid>
            <Grid item lg={7} xs={10}>
                <FeedSection />
            </Grid>
            {
                !isMobile &&
                <Grid item sm={3}>
                    <HomeRightMenuSearchBar />
                </Grid>
            }
        </MainLayout>
    )
}