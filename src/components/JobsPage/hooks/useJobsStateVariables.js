import * as React from "react";
import cld from "../../../services/getCloudinaryImages";
import { scale } from '@cloudinary/url-gen/actions/resize';
import { work_categories, work_type } from "../../CommonItems/work-categories";
import listOfCities from "../../CommonItems/listOfCities";


const setImageSize = (image) => {
    return cld.image(`main page photos/${image}`).resize(scale().width(0.4)).toURL()
}

const useJobsStateVariables = (queryParamsDict) => {
    const allAvatarImages = [
        setImageSize('main_page_job_offers_sajflw'),
        setImageSize('project_photo_wadwlu'),
        setImageSize('main_page_freelancer_suf7mw'),
    ];

    let imageMap = {};
    work_type.forEach((key, indx) => imageMap[key] = allAvatarImages[indx]);

    const [workType, setWorkType] = React.useState(queryParamsDict.workType);
    const handleWorkTypeChange = (event, newValue) => { setWorkType(newValue) }

    const [currentWorkCategoty, setCurrentWorkCategoty] = React.useState(queryParamsDict.jobCategory);
    const handleCategoryChange = (event, newValue) => { setCurrentWorkCategoty(newValue) }

    const [currentCity, setCurrentCity] = React.useState(queryParamsDict.city);
    const handleCurrentCityChange = (event, newValue) => { setCurrentCity(newValue) };

    const [avatarImage, setAvatarImage] = React.useState(imageMap[queryParamsDict.workType]);
    const [titleWorkType, setTitleWorkType] = React.useState(queryParamsDict.workType);

    const [wantToWorkFullTime, setWantToWorkFullTime] = React.useState(false);
    const handleWantToWorkFullTimeChange = (event) => { setWantToWorkFullTime(event.target.checked) };

    const [searchByKeyWord, setSearchByKeyword] = React.useState('');
    const handleSearchByKeyword = (event) => { setSearchByKeyword(event.target.value) };


    const searchJobs = () => {
        if (!work_categories.includes(currentWorkCategoty) || !work_type.includes(workType)) { return };

        setAvatarImage(imageMap[workType]);
        setTitleWorkType(workType);
    };

    return ({
        workType, handleWorkTypeChange, currentWorkCategoty, handleCategoryChange,
        currentCity, handleCurrentCityChange, avatarImage, titleWorkType,
        searchJobs, wantToWorkFullTime, handleWantToWorkFullTimeChange,
        searchByKeyWord, handleSearchByKeyword,
    })
};

export default useJobsStateVariables;