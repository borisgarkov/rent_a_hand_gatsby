import { useMediaQuery, useTheme } from '@mui/material';

function useScreenResolution(breakpoint = 'sm') {
    const theme = useTheme();
    const isBelowTargetResolution = useMediaQuery(theme.breakpoints.down(breakpoint));

    return isBelowTargetResolution;
};

export default useScreenResolution;