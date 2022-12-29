import * as React from "react";
import {
    Box, Button, CardContent,
    CardHeader, Divider, FormControl, FormControlLabel,
    FormLabel, Radio, RadioGroup, Stack, TextField
} from "@mui/material";
// import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import useJobsStateVariables from "./hooks/useJobsStateVariables";
import ConfirmationJobDialog from "./ConfirmationJobDialog";

export default function SeachJobsSection(props) {
    const {
        workType, handleWorkTypeChange, currentWorkCategoty, handleCategoryChange,
        currentCity, handleCurrentCityChange, avatarImage, titleWorkType,
        searchJobs, wantToWorkFullTime, handleWantToWorkFullTimeChange,
        searchByKeyWord, handleSearchByKeyword,
    } = useJobsStateVariables({});

    const [value, setValue] = React.useState('Проекти');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Stack sx={{
            width: { xs: '100%', }, maxWidth: { sm: '400px', },
            alignSelf: 'flex-start', flexGrow: 1,
            position: { xs: 'static', md: 'sticky', },
            margin: { xs: '15px auto', sm: 0, }, top: 80
        }}>

            <CardHeader subheader='Филтър' subheaderTypographyProps={{ fontWeight: 700 }} />
            <Divider />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', }}>
                <FormControl sx={{ marginBottom: 2 }}>
                    <FormLabel id="work-type">Тип обяви</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="work-type"
                        name="work-type"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Проекти" control={<Radio />} label="Проекти" />
                        <FormControlLabel value="Таланти" control={<Radio />} label="Таланти" />
                    </RadioGroup>
                </FormControl>

                <ConfirmationJobDialog isCategory={true} />
                <ConfirmationJobDialog isCategory={false} />
            </CardContent>

            <Divider />

            <CardContent>
                {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <ManageSearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField
                        fullWidth
                        id="searchByKeyword"
                        label="Търси по ключова дума"
                        variant="standard"
                        value={searchByKeyWord}
                        onChange={handleSearchByKeyword}
                    />
                </Box> */}
                <Button variant='contained' onClick={searchJobs} fullWidth>
                    Търси
                </Button>
            </CardContent>
        </Stack>
    )
}