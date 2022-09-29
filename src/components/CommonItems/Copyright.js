import { Typography } from "@mui/material";
import { Link } from "gatsby";
import * as React from "react";


export default function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Всички права запазени © '}
            <Link to='/' color="inherit" sx={{ cursor: 'pointer' }} >
                Rent A Hand
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}