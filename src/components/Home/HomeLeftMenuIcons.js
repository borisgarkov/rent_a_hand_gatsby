import * as React from "react";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { Link } from "gatsby";
import { StyledContainer, StyledStack } from "./StyledComponents";
import currentUser from "../db-files/currentUser";
import {
    homePage, profilePage, subscriptionPage,
    addJobPost, savedJobsPage, settingsPage, exitPage
} from './menuPages';
import AddJobModal from "../JobsPage/AddJobModal";

export default function HomeLeftMenuIcons(props) {
    const [openJobModal, setOpenJobModal] = React.useState(false);

    const handleClickOnJobModal = () => { setOpenJobModal(true); };
    const handleCloseJobModal = () => { setOpenJobModal(false); };

    const upperPartMenuPages = [homePage, profilePage, subscriptionPage];
    const lowerPartMenuPages = [savedJobsPage, settingsPage, exitPage];

    return (
        <StyledContainer>
            <Link to='/profile'>
                <StyledStack>
                    <Avatar alt="profile-picture" src={currentUser.profilePicture} />
                    <Typography variant="body2">{currentUser.username}</Typography>
                </StyledStack>
            </Link>
            {
                upperPartMenuPages.map((p) => (
                    <Link to={p.path} key={p.title}>
                        <StyledStack>
                            <img alt='icon' width='28' height='28' src={p.icon} />
                            <Typography variant="body2">{p.title}</Typography>
                        </StyledStack>
                    </Link>
                ))
            }
            <Box onClick={handleClickOnJobModal} sx={{ cursor: 'pointer' }}>
                <StyledStack>
                    <img alt='icon' width='28' height='28' src={addJobPost.icon} />
                    <Typography variant="body2">{addJobPost.title}</Typography>
                </StyledStack>
            </Box>
            {
                lowerPartMenuPages.map((p) => (
                    <Link to={p.path} key={p.title}>
                        <StyledStack>
                            <img alt='icon' width='28' height='28' src={p.icon} />
                            <Typography variant="body2">{p.title}</Typography>
                        </StyledStack>
                    </Link>
                ))
            }
            <Divider />
            <AddJobModal
                id="job-section"
                keepMounted
                open={openJobModal}
                onClose={handleCloseJobModal}
                modaltitle='Добави обява'
            />
        </StyledContainer>
    )
};