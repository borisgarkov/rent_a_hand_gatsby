import { Card, Divider, Stack } from "@mui/material";

import { ProfileHeading } from "../components/ProfilePage/UserProfilePageComponents/ProfileHeading";
import { UserJobSection } from "../components/ProfilePage/UserProfilePageComponents/UserJobSection";
import { UserResumeSection } from "../components/ProfilePage/UserProfilePageComponents/UserResumeSection";
import { UserSkillsSection } from "../components/ProfilePage/UserProfilePageComponents/UserSkillsSection";
import { UserSalaryAndEducationSection } from "../components/ProfilePage/UserProfilePageComponents/UserSalaryAndEducationSection";
import { SaveUserToFavouriteSection } from "../components/ProfilePage/UserProfilePageComponents/SaveUserToFavouriteSection";

import * as React from 'react';

import userData from '../components/ProfilePage/UserProfilePageComponents/testUser';
import Navigation from "../components/NavigationBar/Navigation";

export default function UserProfilePage() {

    const [currentUser, setCurrentUser] = React.useState(userData);

    const updateUserInfo = (info) => {
        setCurrentUser({ ...currentUser, info });
    };

    return (
        <Navigation>
            <ProfileHeading />
            <Card sx={{
                maxWidth: 950,
                margin: 'auto',
                display: 'flex',
                flexDirection: {
                    xs: 'column-reverse',
                    md: 'row',
                },

                marginBottom: 2
            }}>
                <Stack sx={{
                    padding: 1,
                    flexGrow: 1,
                }}>
                    <UserSalaryAndEducationSection updateUserInfo={updateUserInfo} currentUser={currentUser} />
                </Stack>

                <Divider orientation="vertical" flexItem={true} />

                <Stack sx={{
                    flexBasis: '70%',
                }}>
                    <UserJobSection />
                    <Divider />
                    <UserResumeSection />
                    <Divider />
                    <UserSkillsSection />
                </Stack>
            </Card>

            <SaveUserToFavouriteSection />
        </Navigation>
    )
}