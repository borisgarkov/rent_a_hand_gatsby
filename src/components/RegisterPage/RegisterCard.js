import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import * as React from "react";

export default function RegisterCard({
    category_image,
    category_description
}) {
    return (
        <>
            <Card
                sx={{ width: { xs: '100%', lg: 350 }, height: { md: 260 } }}
            >
                <CardActionArea>
                    <CardMedia component='img' height='180' image={category_image} alt='category image' />
                    <CardContent>
                        <Typography sx={{
                            textAlign: 'center',
                            zIndex: 2,
                        }}>
                            {category_description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}