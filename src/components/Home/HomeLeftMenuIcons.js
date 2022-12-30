import * as React from "react";
import { Avatar, Divider, Typography } from "@mui/material";
import { Link } from "gatsby";
import { StyledContainer, StyledStack } from "./StyledComponents";
import useScreenResolution from "../hooks/useScreenResolution";

import homeIcon from '../../images/main-page-icons/icons8-home-page-96.png';
import profileIcon from '../../images/main-page-icons/icons8-profile-96.png';
import subscribeIcon from '../../images/main-page-icons/icons8-tags-96.png';
import addJonIcon from '../../images/main-page-icons/icons8-job-seeker-96.png';
import savedJobsIcon from '../../images/main-page-icons/icons8-talent-64.png';
import settingsIcon from '../../images/main-page-icons/icons8-settings-58.png';
import logoutIcon from '../../images/main-page-icons/icons8-logout-64.png';
import currentUser from "../db-files/currentUser";

export default function HomeLeftMenuIcons(props) {
    const isMobile = useScreenResolution('lg');

    const pages = [
        { title: 'Начало', icon: homeIcon, path: '/home' },
        { title: 'Профил', icon: profileIcon, path: '/profile' },
        { title: 'Абонамент', icon: subscribeIcon, path: '/home' },
        { title: 'Добави обява', icon: addJonIcon, path: '/home' },
        { title: 'Запазени обяви', icon: savedJobsIcon, path: '/home' },
        { title: 'Настройки', icon: settingsIcon, path: '/home' },
        { title: 'Изход', icon: logoutIcon, path: '/' }
    ];

    return (
        <StyledContainer>
            {
                !props.isMobile
                && <StyledStack>
                    <Avatar alt="profile-picture" src={currentUser.profilePicture} />
                    <Typography variant="body2">{currentUser.username}</Typography>
                </StyledStack>
            }
            {
                pages.map((p) => (
                    <Link to={p.path} key={p.title}>
                        <StyledStack>
                            <img alt='icon' width='28' height='28' src={p.icon} />
                            {
                                !props.isMobile &&
                                <Typography variant="body2">{p.title}</Typography>
                            }
                        </StyledStack>
                    </Link>
                ))
            }
            <Divider />
        </StyledContainer>
    )
}