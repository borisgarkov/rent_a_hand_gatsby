import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: ['Comfortaa', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
    },
    palette: {
        background: {
            default: '#f5f5f5',
        }
    }
});

export { theme };