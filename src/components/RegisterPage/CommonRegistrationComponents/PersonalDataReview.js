import { Checkbox, FormControlLabel } from "@mui/material";
import * as React from "react"

export default function PersonalDataReview() {
    return (
        <FormControlLabel
            control={<Checkbox color="secondary" name="policy" value="yes" />}
            label="Прочетох и съм запознат с политиката за лични данни"
        />
    )
}