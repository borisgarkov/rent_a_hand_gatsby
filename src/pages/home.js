import { Grid } from "@mui/material";
import * as React from "react";
import useScreenResolution from "../components/hooks/useScreenResolution";
import HomeRightMenuSearchBar from "../components/Home/HomeRightMenuSearchBar";
import HomeLeftMenuIcons from "../components/Home/HomeLeftMenuIcons";
import MainLayout from "../components/NavigationBar/MainLayout";
import FeedSection from '../components/Home/FeedSection';
import FixedBottomNavigation from "../components/Home/FixedBottomNavigation";

export default function Home(props) {
    const isMobile = useScreenResolution('lg');

    return (
        <MainLayout>
            {
                isMobile
                    ? <FixedBottomNavigation />
                    : <Grid item lg={2}>
                        <HomeLeftMenuIcons isMobile={isMobile} />
                    </Grid>
            }
            <Grid item lg={7} xs={12}>
                <FeedSection />
            </Grid>
            {
                !isMobile &&
                <Grid item lg={3}>
                    <HomeRightMenuSearchBar />
                </Grid>
            }
        </MainLayout>
    )
}