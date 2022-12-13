import { work_categories, work_type } from "../../CommonItems/work-categories";
import listOfCities from "../../CommonItems/listOfCities";

const decodeQueryParam = (text) => {
    return decodeURIComponent(text.replace(/\+/g, " "));
};

const getQueryParametersFromUrl = (url) => {
    let searchParams = decodeQueryParam(url.search);
    searchParams = searchParams.replace('?', '');
    let listOfSearchParams = searchParams.split('&');

    let stateVariables = {};

    listOfSearchParams.forEach(element => {
        const [key, value] = element.split('=');
        stateVariables[key] = value;
    })

    return stateVariables;
};

const addQueryParametersToURL = (url, parametersDict) => {
    for (const key in parametersDict) {
        url.searchParams.set(key, parametersDict[key]);
    }

    window.history.replaceState({}, '', url.href);
    console.log('URL params updated');
}

const queryParametersController = (jobsStateObject) => {
    const url = new URL(window.location.href);

    if (url.search === '') {
        const queryParamsDict = {
            'workType': work_type[0],
            'jobCategory': work_categories[0],
            'city': listOfCities[0]
        };

        addQueryParametersToURL(url, queryParamsDict);
        return queryParamsDict;
    }

    return getQueryParametersFromUrl(url);
};

export { queryParametersController, addQueryParametersToURL };