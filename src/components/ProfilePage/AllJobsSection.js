import { Avatar, Button, Card, CardActionArea, CardContent, CardHeader, Divider, Stack, Typography } from "@mui/material"
import cld from "../../services/getCloudinaryImages";
import * as styles from './profile-page-style.module.css';
import * as React from "react";

const logo = cld.image('main page photos/Rent_A_Hand_D1_ekcqtj').toURL();

const AllJobsSection = ({ jobs, sectionTitle }) => {
    const topJobs = jobs.slice(0, 5);

    return (
        <Stack sx={{ maxWidth: 950, margin: '10px auto 0', }}>
            <CardContent><Typography variant="h6">{sectionTitle}</Typography></CardContent>
            {
                topJobs.map(job => (
                    <CardActionArea key={job.id} sx={{ marginBottom: 0.5 }}>
                        <Card>
                            <CardHeader
                                title={job.title}
                                subheader={`${job.datePosted} - ${job.city}`}
                                avatar={
                                    <Avatar
                                        className={styles.imageStyle}
                                        src={logo}
                                        sx={{ backgroundColor: 'white', border: '1px solid #e2e2e2' }}
                                        alt='logo'
                                    />
                                }
                            />
                        </Card>
                        <Divider />
                    </CardActionArea>
                ))
            }
            <Button >Виж всички {sectionTitle} ( {jobs.length} )</Button>
        </Stack >
    )
}

export default AllJobsSection