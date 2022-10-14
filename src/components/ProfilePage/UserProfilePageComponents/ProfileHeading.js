import { Avatar, Button, Card, Rating, Stack, Typography } from "@mui/material";

import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useScreenResolution from "../../hooks/useScreenResolution";
import * as React from 'react';
import user from "./testUser";


const BaseNameCityConnectHeadingSection = () => {
    return (
        <Stack sx={{
            flexDirection: { sm: 'row' },
            gap: 2,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
        }}>
            <Stack sx={{
                flexDirection: { xs: 'row', sm: 'column' },
                alignItems: 'center',
                gap: { xs: 1, sm: 0 }
            }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {user.firstName} {user.lastName}
                </Typography>
                <Stack sx={{
                    flexDirection: 'row',
                    gap: 0.5,
                }}>
                    <LocationOnIcon sx={{ color: 'primary.main' }} size='small' />
                    <Typography variant="body1">{user.city}</Typography>
                </Stack>
            </Stack>
            <Stack sx={{
                flexDirection: 'column',
                flexGrow: 1,
                display: { xs: 'none', sm: 'flex' }
            }}>
                <Typography component="legend" sx={{ margin: '0 auto' }}>Отзиви</Typography>
                <Rating name="read-only" defaultValue={3.5} precision={0.5} readOnly sx={{ color: '#f37327', margin: '0 auto' }} />
            </Stack>
            <Button
                variant='contained'
                startIcon={<MessageOutlinedIcon />}
                sx={{ marginLeft: { sm: 'auto' }, marginRight: { sm: 5 }, width: { xs: '100%', sm: '20%' } }}
            >
                Свържи се
            </Button>
        </Stack>
    )
};


const NameCityConnectHeadingSection = () => {

    const isModileDevice = useScreenResolution();

    return (
        <>
            {
                isModileDevice
                    ?
                    <Stack sx={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        flexWrap: 'wrap',
                    }}>
                        <BaseNameCityConnectHeadingSection />
                    </Stack>
                    :
                    <BaseNameCityConnectHeadingSection />
            }
        </>
    )
};


export const ProfileHeading = () => {
    return (
        <Card sx={{
            marginTop: { xs: 1, sm: '15px' }, marginBottom: 2, marginLeft: 'auto', marginRight: 'auto', maxWidth: 950
        }}>
            <Stack sx={{
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 4,
                alignItems: { xs: 'center', sm: 'center' },
                padding: 1,
                height: { sm: 120 }
            }}>
                <Avatar sx={{ width: 70, height: 70, marginLeft: { sm: 2 } }} />
                <NameCityConnectHeadingSection />
            </Stack>
        </Card>
    )
}