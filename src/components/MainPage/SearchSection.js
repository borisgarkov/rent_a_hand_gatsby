import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import NearMeIcon from '@mui/icons-material/NearMe';
import { navigate } from "gatsby";
import * as React from "react";


export default function SearchSection() {
    const textAreaCSS = {
        width: 490,
    };

    return (
        <Stack direction='row' sx={{ backgroundColor: 'white', padding: '60px 0', justifyContent: 'center', gap: 5 }}>
            <TextField
                id="keyword"
                label="Ключови думи, позиция или компания"
                variant="standard"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <TextFormatIcon fontSize="large" />
                        </InputAdornment>
                    ),
                }}
                sx={{ ...textAreaCSS }}
            />
            <TextField
                id="city"
                label="Населено място"
                variant="standard"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <NearMeIcon />
                        </InputAdornment>
                    ),
                }}
                sx={{ ...textAreaCSS }}
            />
            <Button
                startIcon={<ManageSearchIcon fontSize="small" />}
                variant="contained"
                sx={{ width: 150 }}
                onClick={() => navigate('/jobs')}
            >
                Обяви
            </Button>
        </Stack>
    )
}