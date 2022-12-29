import * as React from "react";
import { Avatar, Box, Card, CardHeader, Grid } from "@mui/material";
import AddJob from "../JobsPage/AddJob";
import JobsCatalog from "../JobsPage/JobsCatalog";
import currentUser from "../JobsPage/currentUser";
import { jobs } from "../JobsPage/test-jobs";

export default function FeedSection(props) {
    return (
        <Box sx={{ margin: '0 auto', padding: { md: '20px 70px' } }}>
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
                <AddJob />
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