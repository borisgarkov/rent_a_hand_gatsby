import { Card, Divider, Stack } from "@mui/material";

import { ProfileHeading } from "../components/ProfilePage/UserProfilePageComponents/ProfileHeading";
import { UserJobSection } from "../components/ProfilePage/UserProfilePageComponents/UserJobSection";
import { UserResumeSection } from "../components/ProfilePage/UserProfilePageComponents/UserResumeSection";
import { UserSkillsSection } from "../components/ProfilePage/UserProfilePageComponents/UserSkillsSection";
import { UserSalaryAndEducationSection } from "../components/ProfilePage/UserProfilePageComponents/UserSalaryAndEducationSection";
import { SaveUserToFavouriteSection } from "../components/ProfilePage/UserProfilePageComponents/SaveUserToFavouriteSection";

import * as React from 'react';
import Navigation from "../components/NavigationBar/Navigation";
import AllJobsSection from "../components/ProfilePage/AllJobsSection";
import { projects } from "../components/JobsPage/test-jobs";

export default function UserProfilePage() {

    return (
        <Navigation>
            <ProfileHeading />
            <Card sx={{
                maxWidth: 950, margin: 'auto',
                display: 'flex',
                flexDirection: {
                    xs: 'column-reverse',
                    md: 'row',
                },
                marginBottom: 2
            }}>
                <Stack sx={{ flexBasis: '30%' }}>
                    <UserSalaryAndEducationSection />
                </Stack>

                <Divider orientation="vertical" flexItem={true} />

                <Stack sx={{ flexBasis: '70%' }}>
                    <UserJobSection />
                    <Divider />
                    <UserResumeSection />
                    <Divider />
                    <UserSkillsSection />
                </Stack>
            </Card>

            <AllJobsSection jobs={projects} sectionTitle='Проекти' />
            <SaveUserToFavouriteSection />
        </Navigation>
    )
}