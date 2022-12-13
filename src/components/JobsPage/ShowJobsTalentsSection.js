import * as React from "react";
import { Grid } from "@mui/material";
import useSearchDataBase from "./hooks/useSearchDataBase";
import JobsCatalog from "./JobsCatalog";
import TalentsCatalog from "./TalentsCatalog";

const ShowJobsTalentsSection = (titleWorkType) => {
    const endPoint = titleWorkType.titleWorkType === 'Таланти' ? 'users' : 'jobs';
    const data = useSearchDataBase(endPoint);

    console.log('from ShowJobsTalentsSection + ' + data)

    if (Array.isArray(data)) {
        return (
            <Grid
                container
                sx={{ maxWidth: 1000, justifyContent: { xs: 'space-evenly', md: 'normal' } }}
                gap={2}
            >
                {
                    titleWorkType.titleWorkType === 'Таланти'
                        ? data.map(user => (<TalentsCatalog key={user.id} user={user} />))
                        : data.map(job => (<JobsCatalog key={job.id} job={job} />))
                }
            </Grid>
        )
    }

    return data;
};

export default ShowJobsTalentsSection;