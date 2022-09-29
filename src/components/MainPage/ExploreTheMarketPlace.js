import { Box, Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import * as React from "react";

import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import CarRepairOutlinedIcon from '@mui/icons-material/CarRepairOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import * as styles from './explore-categories.module.css'
import register_categories from '../RegisterPage/CommonRegistrationComponents/registerCategories';

import RegisterCard from '../RegisterPage/RegisterCard';
import { Link } from 'gatsby';


export default function ExploreTheMarketPlace() {

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    const categories = [
        {
            category: 'ИТ',
            icon: <TerminalOutlinedIcon fontSize='large' />,
        },
        {
            category: 'Ремонтни дейности',
            icon: <BuildOutlinedIcon fontSize='large' />,
        },
        {
            category: 'Монтажни дейности',
            icon: <HomeRepairServiceOutlinedIcon fontSize='large' />,
        },
        {
            category: 'Занаяти',
            icon: <EngineeringOutlinedIcon fontSize='large' />,
        },
        {
            category: 'Поддръжка на автомобили',
            icon: <CarRepairOutlinedIcon fontSize='large' />,
        },
        {
            category: 'Здраве и фитнес',
            icon: <FitnessCenterOutlinedIcon fontSize='large' />,
        },
        {
            category: 'Транспорт и логистика',
            icon: <LocalShippingOutlinedIcon fontSize='large' />,
        },
        {
            category: 'Продажби, ПР и маркетинг',
            icon: <LoyaltyOutlinedIcon fontSize='large' />,
        },
        {
            category: 'Финанси/Счетоводни услуги',
            icon: <AccountBalanceOutlinedIcon fontSize='large' />,
        },
    ];

    return (
        <>
            <Typography variant='h5' sx={{ margin: '50px auto', textAlign: 'center' }}>
                Разгледай нашите категории
            </Typography>
            <Grid
                container gap={2}
                sx={{ justifyContent: 'center', margin: '50px auto 100px', maxWidth: 1100, rowGap: '34px' }}
            >
                {
                    categories.map(x =>
                        <Grid
                            key={x.category}
                            className={styles['grid-parent']}
                            item xs={5} md={2}
                            sx={{ cursor: 'pointer', textAlign: 'center', }} onClick={handleClickOpen}
                        >
                            <Box className={styles['icon']}>
                                {x.icon}
                            </Box>
                            <Divider className={styles['divider']} sx={{
                                width: '20%', margin: '0 auto', bgcolor: '#176ab4',
                                border: '1px solid #176ab4',
                            }} />
                            <Typography variant='body1' sx={{
                                width: '100%', textAlign: 'center',
                                margin: '0 auto', overflowWrap: 'break-word',
                            }}
                            >
                                {x.category}
                            </Typography>
                        </Grid>
                    )
                }
            </Grid>
            <Dialog open={open} onClose={handleClose} maxWidth='lg' fullWidth>
                <Stack sx={{
                    flexDirection: 'row',
                    alignItems: 'baseline'
                }}>
                    <DialogTitle>Търси в</DialogTitle>
                    <IconButton onClick={handleClose} sx={{ margin: '0 8px   0 auto' }}>
                        <CloseOutlinedIcon />
                    </IconButton>
                </Stack>
                <DialogContent>
                    <Stack sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: 2, lg: 5 },
                        justifyContent: 'center',
                    }}>
                        {
                            register_categories.map(x => {
                                return (
                                    <Link key={x.category_description} to='/jobs'>
                                        <RegisterCard
                                            category_image={x.category_image}
                                            category_description={x.category_description}
                                        />
                                    </Link>
                                )
                            })
                        }
                    </Stack>
                </DialogContent>
            </Dialog>
        </>
    )
}