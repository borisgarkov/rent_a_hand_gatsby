import * as React from "react";
import { Avatar, Box, Card, CardHeader, Grid } from "@mui/material";
import AddJobFromPost from "../JobsPage/AddJobFromPost";
import JobsCatalog from "../JobsPage/JobsCatalog";
import { jobs } from "../db-files/test-jobs";
import currentUser from "../db-files/currentUser";

export default function FeedSection(props) {
    return (
        <Box sx={{ margin: { xs: '0 auto 100px', lg: '0 auto' }, padding: { md: '20px 70px' } }}>
            <Card sx={{
                margin: { xs: '70px 5px 20px', lg: '80px 0 20px' },
                display: 'flex',
                flexDirection: 'row',
                padding: 1,
                height: { xs: '55px', md: '75px' },
                borderRadius: '15px',
            }}>
                <CardHeader
                    avatar={<Avatar
                        src={currentUser.profilePicture}
                        sx={{
                            width: { xs: 24, md: 56 },
                            height: { xs: 24, md: 56 },
                        }}
                    />}
                    sx={{ padding: { xs: 0, md: 2 } }}
                />
                <AddJobFromPost />
            </Card>
            <Grid container sx={{ margin: '0 auto', }} gap={2}>
                {
                    jobs.map(job => (
                        <JobsCatalog key={job.id} job={job} />
                    ))
                }
            </Grid>
        </Box >
    )
};