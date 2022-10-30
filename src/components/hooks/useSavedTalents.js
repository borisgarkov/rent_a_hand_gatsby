import * as React from "react";

export default function useSavedTalents() {
    const [savedTalents, setSavedTalents] = React.useState([]);

    const handleSavedTalentsChange = () => {
        if (inputSkillValue === '' || savedTalents.includes(inputSkillValue)) { return };

        setSavedTalents([...savedTalents, inputSkillValue]);
        setInputSkillValue('');
    };

    const handleDeleteSavedTalent = (curentSavedTalent) => {
        setSavedTalents(savedTalents.filter(talent => talent !== curentSavedTalent))
    };



    return ({

    })
}