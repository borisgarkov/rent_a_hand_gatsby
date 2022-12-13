import { Button, Card, CardContent, Typography } from "@mui/material";

import StarBorderIcon from '@mui/icons-material/StarBorder';
import * as React from 'react';
import user from "./testUser";

export const SaveUserToFavouriteSection = () => {
    const text = `
    Ако мислите, че уменията или проектите на ${user.firstName} ${user.lastName}
    са подходящи за Вашите бъдещи идеи,
    можете да го добавите към списъка с подходящи кандидати.
    `;

    return (
        <Card sx={{
            maxWidth: 950,
            margin: '24px auto',
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#ebebeb',
            textAlign: 'center',
        }}>
            <CardContent>
                <Typography sx={{ marginBottom: 1 }} variant='h6'>
                    Бъдещи проекти с {user.firstName} {user.lastName}?
                </Typography>
                <Typography variant='body1'>
                    {text}
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