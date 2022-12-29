import * as React from "react";
import { Box } from "@mui/material";
import cld from "../../services/getCloudinaryImages";
import SeachJobsSection from "../JobsPage/SearchJobsSection";
import { StyledContainer } from "./StyledComponents";

export default function HomeRightMenuSearchBar(props) {
    const logo = cld.image('main page photos/Rent_A_Hand_D1_dwb3is').toURL();

    return (
        <StyledContainer>
            <SeachJobsSection />
            <Box sx={{ position: 'fixed', bottom: 10, right: 45 }}>
                <img src={logo} alt='logo-pic' height='30' />
            </Box>
        </StyledContainer>
    )
};