import { Checkbox, FormControlLabel } from "@mui/material";
import * as React from "react"

export default function PersonalDataReview({ context }) {
    const { policyClicked, handlePolicyClickedChange } = React.useContext(context);

    return (
        <FormControlLabel
            control={<Checkbox checked={policyClicked} onChange={handlePolicyClickedChange} color="secondary" name="policy" />}
            label="Прочетох и съм запознат с политиката за лични данни"
        />
    )
}