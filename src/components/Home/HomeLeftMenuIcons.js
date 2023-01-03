import * as React from "react";
import { Avatar, Divider, Typography } from "@mui/material";
import { Link } from "gatsby";
import { StyledContainer, StyledStack } from "./StyledComponents";
import currentUser from "../db-files/currentUser";
import menuPages from "./menuPages";

export default function HomeLeftMenuIcons(props) {
    return (
        <StyledContainer>
            <StyledStack>
                <Avatar alt="profile-picture" src={currentUser.profilePicture} />
                <Typography variant="body2">{currentUser.username}</Typography>
            </StyledStack>
            {
                menuPages.map((p) => (
                    <Link to={p.path} key={p.title}>
                        <StyledStack>
                            <img alt='icon' width='28' height='28' src={p.icon} />
                            <Typography variant="body2">{p.title}</Typography>
                        </StyledStack>
                    </Link>
                ))
            }
            <Divider />
        </StyledContainer>
    )
}