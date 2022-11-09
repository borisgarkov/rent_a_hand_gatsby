import {
    Divider, Pagination, Stack, TextField, Box, Avatar, Typography, Card, CardHeader,
    CardContent, Grid, Button, Autocomplete, FormControlLabel, Checkbox
} from '@mui/material';

import * as styles from '../components/JobsPage/job-style.module.css';
import * as React from "react";

import Navigation from '../components/NavigationBar/Navigation';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import { jobs } from '../components/JobsPage/test-jobs';
import { work_categories, work_type } from '../components/CommonItems/work-categories';
import JobsCatalog from '../components/JobsPage/JobsCatalog';

import cld from '../services/getCloudinaryImages';
import { scale } from '@cloudinary/url-gen/actions/resize';
import TalentsCatalog from '../components/JobsPage/TalentsCatalog';
import AutocompleteWorkCatsList from '../components/CommonItems/AutocompleteWorkCatsList';
import listOfCities from '../components/CommonItems/listOfCities';
import { useQuery } from 'react-query';

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
    const handlePageChange = (event) => { setCurrentPage(parseInt(event.target.innerText)) };

    const currentPageJobs = React.useMemo(() => {
        const firstPageIndex = (currentPage - 1) * totalJobsPerPage;
        const lastPageIndex = firstPageIndex + totalJobsPerPage;
        return jobs.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    const [workType, setWorkType] = React.useState(work_type[0]);
    const handleWorkTypeChange = (event, newValue) => { setWorkType(newValue) }

    const [currentWorkCategoty, setCurrentWorkCategoty] = React.useState(work_categories[0]);
    const handleCategoryChange = (event, newValue) => { setCurrentWorkCategoty(newValue) }

    const [currentCity, setCurrentCity] = React.useState(listOfCities[0]);
    const handleCurrentCityChange = (event, newValue) => { setCurrentCity(newValue) };

    const [avatarImage, setAvatarImage] = React.useState(imageMap[work_type[0]]);
    const [titleWorkType, setTitleWorkType] = React.useState(work_type[0]);

    const searchJobs = (event) => {
        if (!work_categories.includes(currentWorkCategoty) || !work_type.includes(workType)) { return };

        setAvatarImage(imageMap[workType]);
        setTitleWorkType(workType);
    };

    const [wantToWorkFullTime, setWantToWorkFullTime] = React.useState(false);
    const handleWantToWorkFullTimeChange = (event) => { setWantToWorkFullTime(event.target.checked) };

    const [searchByKeyWord, setSearchByKeyword] = React.useState('');
    const handleSearchByKeyword = (event) => { setSearchByKeyword(event.target.value) };

    const { data, isLoading } = useQuery(['users'], () => {
        return fetch('http://localhost:3000/users');
    });

    console.log(data)

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

                            <Autocomplete
                                noOptionsText='Няма намерени резултати'
                                disablePortal
                                id="work_type"
                                value={workType}
                                onChange={handleWorkTypeChange}
                                options={work_type}
                                fullWidth
                                renderInput={(params) => <TextField {...params} label='Тип работа' />}
                                sx={{ marginBottom: 2 }}
                            />

                            {
                                workType === 'Таланти'
                                    ? (
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={wantToWorkFullTime}
                                                    onChange={handleWantToWorkFullTimeChange}
                                                    color="secondary"
                                                    name="policy"
                                                />}
                                            label="Търси таланти за постоянна работа"
                                            sx={{ marginBottom: 3 }}
                                        />
                                    )
                                    : null
                            }

                            <AutocompleteWorkCatsList
                                workCategory={currentWorkCategoty}
                                handleWorkCategoryChange={handleCategoryChange}
                            />

                            <Autocomplete
                                noOptionsText='Няма намерени резултати'
                                disablePortal
                                id="work_type"
                                value={currentCity}
                                onChange={handleCurrentCityChange}
                                options={listOfCities}
                                fullWidth
                                renderInput={(params) => <TextField {...params} label='Населено място' />}
                                sx={{ marginTop: 2 }}
                            />

                        </CardContent>
                        <Divider />
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <ManageSearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField
                                    fullWidth
                                    id="searchByKeyword"
                                    label="Търси по ключова дума"
                                    variant="standard"
                                    value={searchByKeyWord}
                                    onChange={handleSearchByKeyword}
                                />
                            </Box>
                            <Button variant='contained' onClick={searchJobs} sx={{ marginTop: 5 }} fullWidth>Търси</Button>
                        </CardContent>
                    </Card>
                </Stack>
                {
                    titleWorkType === 'Таланти'
                        ? (
                            // '' === 'success' && (
                            <Grid container sx={{
                                maxWidth: 1000,
                                justifyContent: { xs: 'space-evenly', md: 'normal' }
                            }} gap={2}>
                                {[].map(user => (<TalentsCatalog key={user.id} user={user} />))}
                            </Grid>
                            // )
                        )
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