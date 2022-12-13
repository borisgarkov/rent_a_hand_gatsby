import * as React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import MainJobsPage from "../../components/JobsPage/MainJobsPage";

const queryClient = new QueryClient();

export default function Jobs(props) {
    return (
        <QueryClientProvider client={queryClient}>
            <MainJobsPage />
        </QueryClientProvider>
    )
};