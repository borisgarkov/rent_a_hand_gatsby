import { Autocomplete, TextField } from "@mui/material";
import * as React from "react";
import { work_categories } from "./work-categories";

export default function AutocompleteWorkCatsList({
    workCategory, handleWorkCategoryChange, label = 'Категория'
}) {
    return (
        <Autocomplete
            noOptionsText='Няма намерени резултати'
            disablePortal
            id="workCategory"
            value={workCategory}
            onChange={handleWorkCategoryChange}
            options={work_categories}
            fullWidth
            renderInput={(params) => <TextField {...params} label={label} />}
        />
    )
}