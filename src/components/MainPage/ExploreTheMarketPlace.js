import { Box, Divider, Grid, Typography } from '@mui/material';
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
import AppsIcon from '@mui/icons-material/Apps';

import * as styles from './explore-categories.module.css'
import { Link } from 'gatsby';

export default function ExploreTheMarketPlace() {
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
        {
            category: 'Виж всички',
            icon: <AppsIcon fontSize='large' />
        }
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
                            className={styles.gridParent}
                            item xs={5} md={2}
                            sx={{ cursor: 'pointer', textAlign: 'center', }}
                        >
                            <Link to='/login'>
                                <Box className={styles.icon}>
                                    {x.icon}
                                </Box>
                                <Divider className={styles.divider} sx={{
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
                            </Link>
                        </Grid>
                    )
                }
            </Grid>
        </>
    )
};