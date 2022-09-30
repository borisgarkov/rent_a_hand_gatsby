import { Avatar, Button, CardActionArea, CardContent, CardHeader, Divider, Stack, Typography } from "@mui/material"
import cld from "../../services/getCloudinaryImages";
import * as styles from './profile-page-style.module.css';
import * as React from "react";

const logo = cld.image('main page photos/Rent_A_Hand_D1_ekcqtj').toURL();

const AllJobsSection = ({ jobs, sectionTitle }) => {
    return (
        <Stack sx={{ maxWidth: 1100, margin: '10px auto 0', }}>
            <CardContent><Typography variant="h6">{sectionTitle}</Typography></CardContent>
            {
                jobs.map(job => (
                    <CardActionArea key={job.id}>
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
                        <Divider />
                    </CardActionArea>
                ))
            }
            <Button >Виж всички {sectionTitle} ( {jobs.length} )</Button>
        </Stack >
    )
}

export default AllJobsSection