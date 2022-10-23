import { Card, CardActionArea, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import * as React from "react";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const CategoryAdditionalDescription = ({ text }) => {
    return (
        text.map(t => {
            return (
                <Stack key={t} sx={{ flexDirection: 'row', gap: 1, margin: '16px 0' }}>
                    <TaskAltIcon sx={{ color: 'primary.main' }} />
                    <Typography>{t}</Typography>
                </Stack>
            )
        })
    )
}

export default function RegisterCard({
    category_image,
    category_description,
    additional_description = null
}) {
    const isAdditionalDescriptionIncluded = additional_description !== null ? true : false;

    return (
        <CardActionArea>
            <Card
                sx={{ width: { xs: '100%', lg: 350 }, height: { md: 550 } }}
            >
                <CardMedia component='img' height='180' image={category_image} alt='category image' />
                <CardContent>
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                        {category_description}
                    </Typography>
                    {
                        isAdditionalDescriptionIncluded
                            ? <CategoryAdditionalDescription text={additional_description} />
                            : null
                    }
                </CardContent>
            </Card>
        </CardActionArea>
    )
}