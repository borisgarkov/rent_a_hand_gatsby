import { FormControl, InputLabel, MenuList, Select } from "@mui/material"
import { work_categories } from "./work-categories";
import * as React from "react";

const CategoriesDropDownList = ({ textFieldVariant = 'standard', cssStyle = { margin: '8px 0' }, fullwidth = true }) => {

    const [currentSelectedCategoty, setCurrentSelectedCategoty] = React.useState(work_categories[0]);

    const handleCategoryChange = (event) => {
        setCurrentSelectedCategoty(event.target.value);
    }

    return (
        <FormControl variant={textFieldVariant} fullWidth={fullwidth} sx={cssStyle}>
            <InputLabel>Категория</InputLabel>
            <Select value={currentSelectedCategoty} onChange={handleCategoryChange}>
                {work_categories.map(work => (<MenuList key={work} value={work}>{work}</MenuList>))}
            </Select>
        </FormControl>
    )
}

export default CategoriesDropDownList