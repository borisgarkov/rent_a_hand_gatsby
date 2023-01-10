import * as React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, Icon, Typography } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

export default function PricingCard({ card }) {
    return (
        <Card sx={{
            width: { xs: '100%', md: '60%' },
            margin: '0 auto 24px',
        }}>
            <CardHeader
                title={card.title}
                titleTypographyProps={{
                    color: 'primary.main',
                    fontWeight: 'bold',
                }}
                sx={{ backgroundColor: '#e0e3e7', }}
                subheader={`${card.price} лв.`}
                subheaderTypographyProps={{
                    fontSize: '1.25rem',
                }}
            />
            <CardContent>
                {
                    card.description.map(line =>
                        <Box
                            key={line}
                            sx={{
                                display: 'flex',
                                alignItems: 'center', marginBottom: 2, gap: 2,
                            }}
                        >
                            <Icon>
                                <CheckCircleOutlineOutlinedIcon sx={{ color: 'primary.main' }} fontSize='small' />
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
        </Card >
    );
}