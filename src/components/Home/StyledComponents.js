import { Container, Stack, styled } from "@mui/material";

const StyledContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(10),
        backgroundColor: '#f0f2f5',
        color: '#555',
        border: '1px solid #ece7e7',
    },
    paddingLeft: 0,
    paddingRight: 0,
    color: 'white',
    height: '100vh',
    position: 'sticky',
    top: 0
}));

const StyledStack = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: theme.spacing(1),
    padding: theme.spacing(1),
    ":hover": {
        backgroundColor: '#e4e6e9',
        borderRadius: '15px',
    }
}));

export { StyledContainer, StyledStack };