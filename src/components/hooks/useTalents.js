import * as React from "react";
import { useQuery } from "react-query";

const useTalents = () => {

    const { data, isLoading } = useQuery(['users'], () => {
        return fetch('http://localhost:3000/users');
    });

    console.log(data);

    return data;
};

export default useTalents;