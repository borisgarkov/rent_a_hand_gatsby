import { Card, CardHeader, CardContent, CardActions, Grid, Box, Typography, Icon, Button } from "@mui/material"
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import * as React from 'react';

export default function PricingCard({ card }) {
    return (
        <Grid item xs={12} sx={{ alignSelf: 'baseline', height: '100%' }}>
            <Card sx={{
                display: 'flex',
            }}>
                <CardHeader
                    title={card.title}
                    titleTypographyProps={{
                        align: 'center',
                        color: 'primary.main',
                        fontWeight: 'bold',
                    }}
                    sx={{ backgroundColor: '#e0e3e7', flexBasis: '100px' }}
                />
                <CardContent>
                    <Box sx={{
                        display: 'flex', justifyContent: 'center',
                        alignItems: 'baseline', marginBottom: 2
                    }}>
                        <Typography variant='h4' color='text.primary'>{card.price}</Typography>
                        <Typography variant='h5' color='text.secondary'>/месец</Typography>
                    </Box>
                </CardContent>
                <CardContent>
                    <Typography
                        variant='h5' color='text.primary'
                        textAlign='center' marginBottom={4}
                    >
                        Включва
                    </Typography>
                    {
                        card.description.map(line =>
                            <Box
                                key={line}
                                sx={{
                                    display: 'flex', justifyContent: 'center',
                                    alignItems: 'center', marginBottom: 2, gap: 2,
                                }}
                            >
                                <Icon>
                                    <CheckCircleOutlineOutlinedIcon fontSize='small' />
                                </Icon>
                                <Typography
                                    variant='subtitle1'
                                    color='text.primary'
                                >
                                    {line}
                                </Typography>
                            </Box>
                        )
                    }
                </CardContent>


                <CardActions>
                    <Button variant='contained' fullWidth>Избери</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}