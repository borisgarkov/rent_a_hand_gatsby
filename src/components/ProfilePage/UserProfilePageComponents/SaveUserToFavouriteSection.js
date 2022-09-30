import { Button, Card, CardContent, Typography } from "@mui/material";

import StarBorderIcon from '@mui/icons-material/StarBorder';
import * as React from 'react';

export const SaveUserToFavouriteSection = () => {
    return (
        <Card sx={{
            maxWidth: 950,
            margin: 'auto',
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 2,
            backgroundColor: 'primary.main',
            textAlign: 'center',
        }}>
            <CardContent>
                <Typography sx={{ color: 'white', marginBottom: 1 }} variant='h6'>
                    Бъдещи проекти с Иван Иванов?
                </Typography>
                <Typography sx={{ color: 'white' }} variant='body1'>
                    Ако мислите, че уменията на Иван Иванов са подходящи за Вашите бъдещи проекти,
                    можете да го добавите към списъка с подходящи кандидати.
                </Typography>
                <Button
                    sx={{
                        backgroundColor: 'white',
                        border: '1px solid white',
                        borderRadius: 5,
                        marginTop: 4,
                        '&:hover': {
                            backgroundColor: 'white'
                        }
                    }}
                    startIcon={<StarBorderIcon />}
                >
                    Запази
                </Button>
            </CardContent>
        </Card>
    )
};