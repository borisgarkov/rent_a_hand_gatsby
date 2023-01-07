import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import {
    Avatar, CardActionArea,
    IconButton, Stack, Tooltip, Typography
} from '@mui/material';
import * as React from "react";

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import WorkIcon from '@mui/icons-material/Work';

import * as styles from '../ProfilePage/profile-page-style.module.css';
import { navigate } from 'gatsby';
import useScreenResolution from '../hooks/useScreenResolution';
import JobPreviewDialog from './JobPreviewDialog';

export default function JobPost({ job }) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => { setOpen(true) };
    const handleClose = () => { setOpen(false) };
    const isMobile = useScreenResolution('md');

    return (
        <Grid item xs={12} key={job.id}
            sx={{
                margin: { xs: 'auto 5px auto', lg: '0 auto' },
            }}
        >
            <Card sx={{
                display: 'flex',
                borderRadius: '15px',
                flexDirection: { xs: 'column', md: 'row' },
                '&.css-1b7w4n7-MuiCardContent-root:last-child': { padding: 0 }
            }}>
                <Stack sx={{
                    backgroundColor: '#eeeeee',
                    justifyContent: 'space-between',
                }}>
                    <CardHeader
                        title='Rent a Hand'
                        avatar={
                            <Avatar
                                src='https://source.unsplash.com/random'
                                className={styles.imageStyle}
                                sx={{ margin: 0, cursor: 'pointer' }}
                                style={{ 'margin': 0 }}
                                onClick={() => navigate('/profile')}
                            />
                        }
                        titleTypographyProps={{ fontSize: { sm: '1rem' }, fontWeight: 'bold', }}
                        sx={{
                            flexDirection: 'row',
                            padding: '8px 16px 0',
                            overflow: 'hidden',
                        }}
                    />
                    <CardContent sx={{
                        display: 'flex',
                        gap: 2,
                        flexDirection: { xs: 'column', lg: 'row' },
                        paddingTop: { xs: 0, lg: 2 },
                        paddingBottom: { xs: 0, lg: 2 },
                        '&.MuiCardContent-root:last-child': { paddingBottom: '16px' },
                    }}>
                        {
                            !isMobile
                            && <Stack sx={{ flexDirection: 'row', alignItems: 'center', cursor: 'pointer', gap: 1 }}>
                                <WorkIcon sx={{ color: 'primary.main' }} fontSize='small' />
                                <Typography variant='body2'>Всички обяви</Typography>
                            </Stack>
                        }

                    </CardContent>
                </Stack>
                <Stack sx={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    flexGrow: 1
                }}>
                    <CardActionArea onClick={handleClickOpen} sx={{ height: '100%', width: '100%' }}>
                        <CardHeader
                            title={job.title}
                            subheader={job.datePosted}
                            titleTypographyProps={{
                                fontSize: { xs: '0.875rem', lg: '1rem' },
                                fontWeight: 'bold', textOverflow: ''
                            }}
                            subheaderTypographyProps={{ fontSize: '0.875rem' }}
                            sx={{ paddingBottom: { xs: 0, lg: 2 } }}
                        />
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: { xs: 1, lg: 5 },
                        }}>
                            <Stack sx={{ flexDirection: 'row', gap: 1 }}>
                                <LocationOnIcon sx={{ color: 'primary.main' }} fontSize='small' />
                                <Typography variant='body2'>{job.city}</Typography>
                            </Stack>
                            <Stack sx={{ flexDirection: 'row', gap: 1 }}>
                                <HomeRepairServiceIcon sx={{ color: 'primary.main' }} fontSize='small' />
                                <Typography variant='body2'>{job.jobCategory}</Typography>
                            </Stack>
                        </CardContent>
                    </CardActionArea>
                    {/* <Tooltip title="Премахни от запазени">
                        <IconButton sx={{ marginLeft: 'auto' }}>
                            <BookmarkAddedIcon sx={{ color: '#f37327' }} />
                        </IconButton>
                    </Tooltip> */}
                    <Stack>
                        <Tooltip title="Добави в запазени">
                            <IconButton sx={{ marginLeft: 'auto' }}>
                                <BookmarkAddIcon sx={{ color: '#176ab4' }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Редактирай обява">
                            <IconButton sx={{ marginLeft: 'auto' }}>
                                <EditOutlinedIcon sx={{ color: '#176ab4' }} />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Stack>
                <JobPreviewDialog job={job} handleClose={handleClose} open={open} />
            </Card >
        </Grid >
    )
}