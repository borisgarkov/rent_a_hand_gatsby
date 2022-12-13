import {
    Divider, Pagination, Stack, TextField, Box, Avatar, Typography, Card, CardHeader,
    CardContent, Grid, Button, Autocomplete, FormControlLabel, Checkbox
} from '@mui/material';

import { centerUlItems } from './job-style.module.css';
import * as React from "react";

import Navigation from '../NavigationBar/Navigation';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import AutocompleteWorkCatsList from '../CommonItems/AutocompleteWorkCatsList';
import { work_type } from '../CommonItems/work-categories';
import listOfCities from '../CommonItems/listOfCities';

import useJobsStateVariables from './hooks/useJobsStateVariables';
import { queryParametersController } from './utils/addQueryParatemers';
import ShowJobsTalentsSection from './ShowJobsTalentsSection';


export default function MainJobsPage() {
    const queryParamsDict = queryParametersController();
    console.log('MainJobsPage ' + queryParamsDict);

    const {
        workType, handleWorkTypeChange, currentWorkCategoty, handleCategoryChange,
        currentCity, handleCurrentCityChange, avatarImage, titleWorkType,
        searchJobs, wantToWorkFullTime, handleWantToWorkFullTimeChange,
        searchByKeyWord, handleSearchByKeyword,
    } = useJobsStateVariables(queryParamsDict);

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
                            <Button
                                variant='contained'
                                onClick={searchJobs}
                                sx={{ marginTop: 5 }}
                                fullWidth
                            >
                                Търси
                            </Button>
                        </CardContent>
                    </Card>
                </Stack>
                <ShowJobsTalentsSection titleWorkType={titleWorkType} />
            </Stack>

            <Stack spacing={2} sx={{
                maxWidth: 1000, margin: 'auto',
                marginTop: 5, marginBottom: 5
            }} >
                <Pagination
                    size='large'
                    count={1}
                    color='primary'
                    page={1}
                    className={centerUlItems}
                />
            </Stack>
        </Navigation >
    )
}