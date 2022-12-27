import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Avatar, Box, Button, CardActionArea, Divider, IconButton, Stack, Typography } from '@mui/material';
import * as React from "react";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import CloseIcon from '@mui/icons-material/Close';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import WorkIcon from '@mui/icons-material/Work';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import { imageStyle } from '../ProfilePage/profile-page-style.module.css';
import cld from '../../services/getCloudinaryImages';
import { navigate } from 'gatsby';

const logo = cld.image('main page photos/Rent_A_Hand_D1_ekcqtj').toURL();

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function JobsCatalog({ job }) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => { setOpen(true) };
    const handleClose = () => { setOpen(false) };

    return (
        <Grid item xs={12} key={job.id} sx={{
            margin: {
                xs: 'auto',
                sm: '0 auto',
            }
        }}>
            <Card sx={{
                display: 'flex',
                '&.css-1b7w4n7-MuiCardContent-root:last-child': { padding: 0 }
            }}>
                <Stack sx={{ width: { xs: '40%', sm: '30%' }, backgroundColor: '#eeeeee' }}>
                    <CardHeader
                        title='Rent A Hand'
                        subheader='ИТ'
                        avatar={
                            <Avatar
                                src='https://source.unsplash.com/random'
                                className={imageStyle}
                                sx={{ margin: 0, }}
                                style={{ 'margin': 0 }}
                            />
                        }
                        titleTypographyProps={{ fontSize: { sm: '1rem' }, fontWeight: 'bold', }}
                        subheaderTypographyProps={{ fontSize: { sm: '0.875rem' } }}
                        sx={{
                            flexDirection: { xs: 'column', sm: 'row' },
                            padding: { xs: '5px 0 0 0', sm: 2 },
                        }}
                    />
                    <CardContent sx={{
                        display: 'flex',
                        gap: 2,
                        flexDirection: { xs: 'column', sm: 'row' },
                        paddingTop: { xs: 0, sm: 2 },
                        paddingBottom: { xs: 0, sm: 2 },
                        '&.MuiCardContent-root:last-child': { paddingBottom: '16px' },
                    }}>
                        <Stack sx={{ flexDirection: 'row', alignItems: 'center', cursor: 'pointer', gap: 1 }}>
                            <WorkIcon sx={{ color: 'primary.main' }} fontSize='small' />
                            <Typography variant='body2'>Всички обяви</Typography>
                        </Stack>
                        <Stack sx={{ flexDirection: 'row', alignItems: 'center', cursor: 'pointer', gap: 1 }}>
                            <PersonOutlineIcon sx={{ color: 'primary.main' }} fontSize='small' />
                            <Typography variant='body2'>Профил</Typography>
                        </Stack>
                    </CardContent>
                </Stack>
                <Stack sx={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    width: '70%',
                }}>
                    <Divider orientation='vertical' flexItem />
                    <CardActionArea onClick={handleClickOpen} sx={{ height: '100%' }}>
                        <CardHeader
                            title={job.title}
                            subheader={job.datePosted}
                            titleTypographyProps={{
                                fontSize: { xs: '0.875rem', sm: '1rem' },
                                fontWeight: 'bold', textOverflow: ''
                            }}
                            subheaderTypographyProps={{ fontSize: '0.875rem' }}
                            sx={{ paddingBottom: { xs: 0, sm: 2 } }}
                        />
                        <CardContent sx={{
                            display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 1, sm: 5 },
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
                    <IconButton sx={{ marginLeft: 'auto' }}>
                        <BookmarkAddedIcon sx={{ color: '#f37327' }} />
                    </IconButton>
                </Stack>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>
                        <Box
                            marginBottom={2}
                            sx={{
                                display: 'flex',
                                alignItems: 'baseline',
                                columnGap: 2,
                            }}
                        >
                            <Avatar>{job.publisher.slice(0, 1)}</Avatar>
                            <Typography id="transition-modal-title" variant="h6" component="h2" mb={2}>
                                {job.publisher}
                            </Typography>
                            <IconButton onClick={handleClose} sx={{
                                alignSelf: 'flex-start', marginLeft: 'auto'
                            }} >
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        {job.title}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            {job.description}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => (navigate('/job-description'))}>
                            Прегледай обява
                        </Button>
                    </DialogActions>
                </Dialog>
            </Card >
        </Grid >
    )
}