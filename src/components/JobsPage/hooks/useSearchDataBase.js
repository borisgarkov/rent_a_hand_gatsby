import { Typography } from "@mui/material";
import * as React from "react";
import { useQuery } from "react-query";
import backEndServer from "../../../services/getBackEndServerData";


const SetLoading = (isLoading, isError) => {
    const headerStyle = {
        variant: 'h5',
        sx: { width: { md: 1000 }, textAlign: 'center' }
    };

    if (isLoading) return <Typography {...headerStyle}>Зареждане на резултати...</Typography>;

    if (isError) return <Typography {...headerStyle}>Все още няма намерени резултати...</Typography>;
};

const useSearchDataBase = (endPoint) => {
    const { isLoading, isError, data } = useQuery({
        queryKey: [`${endPoint}`],
        queryFn: () => fetch(`${backEndServer}/${endPoint}`).then(res => res.json())
    });

    if (isLoading || isError) { return SetLoading(isLoading, isError); }

    return data
};

export default useSearchDataBase;