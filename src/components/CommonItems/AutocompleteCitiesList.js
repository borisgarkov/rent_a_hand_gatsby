import { Autocomplete, TextField } from "@mui/material";
import * as React from "react";
import listOfCities from "../db-files/listOfCities";

export default function AutocompleteCitiesList({
    city, handleCityChange, label = 'Населено място'
}) {
    return (
        <Autocomplete
            noOptionsText='Няма намерени резултати'
            disablePortal
            id="city"
            value={city}
            onChange={handleCityChange}
            options={listOfCities}
            fullWidth
            renderInput={(params) => <TextField {...params} label={label} />}
        />
    )
}