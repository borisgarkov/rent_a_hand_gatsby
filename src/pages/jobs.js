import {
    Divider, FormControl, InputLabel, MenuList, Pagination, Select,
    Stack, TextField, Box, Avatar, Typography, Paper, Card, CardHeader,
    CardContent, Grid, Button
} from '@mui/material';

import * as styles from '../components/JobsPage/job-style.module.css';
import * as React from "react";

import Navigation from '../components/NavigationBar/Navigation';

import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import { jobs } from '../components/JobsPage/test-jobs';
import test_users from '../components/JobsPage/test_users';
import { work_type } from '../components/CommonItems/work-categories';
import JobsCatalog from '../components/JobsPage/JobsCatalog';

import cld from '../services/getCloudinaryImages';
import { scale } from '@cloudinary/url-gen/actions/resize';
import CategoriesDropDownList from '../components/CommonItems/CategoriesDropDownList';
import TalentsCatalog from '../components/JobsPage/TalentsCatalog';

const setImageSize = (image) => {
    return cld.image(`main page photos/${image}`).resize(scale().width(0.4)).toURL()
}

const job_offers_img = setImageSize('main_page_job_offers_sajflw');
const freelancer_img = setImageSize('main_page_freelancer_suf7mw');
const projects_img = setImageSize('project_photo_wadwlu');

const totalJobsCount = jobs.length;
const totalJobsPerPage = 10;
const totalPaginationPages = Math.ceil(totalJobsCount / totalJobsPerPage);

export default function JobsPage() {

    const allAvatarImages = [
        job_offers_img,
        projects_img,
        freelancer_img,
    ];

    let imageMap = {};
    work_type.forEach((key, indx) => imageMap[key] = allAvatarImages[indx]);

    const [currentPage, setCurrentPage] = React.useState(1);
    const [currentCity, setCurrentCity] = React.useState('');

    const [workType, setWorkType] = React.useState(work_type[0]);
    const [avatarImage, setAvatarImage] = React.useState(imageMap[work_type[0]]);
    const [titleWorkType, setTitleWorkType] = React.useState(work_type[0]);

    const handleWorkTypeChange = (event) => {
        setWorkType(event.target.value);
    }

    const currentPageJobs = React.useMemo(() => {
        const firstPageIndex = (currentPage - 1) * totalJobsPerPage;
        const lastPageIndex = firstPageIndex + totalJobsPerPage;
        return jobs.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    const handlePageChange = (event) => {
        setCurrentPage(parseInt(event.target.innerText));
    }

    const searchJobs = () => {
        setAvatarImage(imageMap[workType]);
        setTitleWorkType(workType);
    }

    return (
        <Navigation>
            <Stack sx={{
                flexDirection: { xs: 'column', md: 'row', },
                justifyContent: 'center',
                columnGap: 5,
                marginTop: { xs: 0, md: 10, }
            }}>
                <Stack sx={{
                    width: { xs: '100%', }, maxWidth: { sm: '400px', },
                    alignSelf: 'flex-start', flexGrow: 1,
                    position: { xs: 'static', md: 'sticky', },
                    margin: { xs: '15px auto', sm: 0, }, top: 80
                }}>
                    <Stack sx={{
                        flexDirection: 'row', gap: 2, alignItems: 'center',
                        margin: '16px 0', justifyContent: 'space-between'
                    }}>
                        <Avatar src={avatarImage} sx={{ width: 80, height: 80 }} />
                        <Typography variant='body1' sx={{ width: '100%' }}>{titleWorkType}</Typography>
                    </Stack>
                    <Card>
                        <CardHeader subheader='Филтър' />
                        <Divider />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', }}>
                            <FormControl variant='standard' sx={{ margin: 1 }}>
                                <InputLabel>Тип работа</InputLabel>
                                <Select value={workType} onChange={handleWorkTypeChange}>
                                    {
                                        work_type.map(work => (<MenuList key={work} value={work}>{work}</MenuList>))
                                    }
                                </Select>
                            </FormControl>
                            <CategoriesDropDownList cssStyle={{ margin: 1 }} fullwidth={false} />
                            <FormControl variant='standard' sx={{ margin: 1 }}>
                                <InputLabel>Населено място</InputLabel>
                                <Select value={currentCity}>
                                </Select>
                            </FormControl>
                        </CardContent>
                        <Divider />
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <ManageSearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField fullWidth id="input-with-sx" label="Търси по ключова дума" variant="standard" />
                            </Box>
                            <Button variant='contained' onClick={searchJobs} sx={{ marginTop: 5 }} fullWidth>Търси</Button>
                        </CardContent>
                    </Card>
                </Stack>
                {
                    titleWorkType == 'Таланти'
                        ?
                        <Grid container sx={{ maxWidth: 1000, justifyContent: { xs: 'space-evenly', md: 'normal' } }} gap={2} >
                            {test_users.map(user => (<TalentsCatalog key={user.id} user={user} />))}
                        </Grid>
                        :
                        <Grid container sx={{ maxWidth: 1000 }} gap={2}>
                            {currentPageJobs.map(job => (<JobsCatalog key={job.id} job={job} />))}
                        </Grid>
                }
            </Stack>



            <Stack spacing={2} sx={{ maxWidth: 1000, margin: 'auto', marginTop: 5, marginBottom: 5 }} >
                <Pagination
                    size='large'
                    count={totalPaginationPages}
                    color='primary'
                    page={currentPage}
                    onChange={handlePageChange}
                    className={styles.centerUlItems}
                />
            </Stack>
        </Navigation>
    )
}