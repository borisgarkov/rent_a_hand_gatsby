import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: ['Comfortaa', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
    },
    palette: {
        background: {
            default: '#f0f2f5',
        }
    }
});

export { theme };