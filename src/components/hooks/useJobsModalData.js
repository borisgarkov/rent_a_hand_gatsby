import * as React from 'react';
import { work_categories } from '../db-files/work-categories';
import listOfCities from '../db-files/listOfCities';

export default function useJobsModalData(props) {
    const currentJob = props?.currentJob;
    const isJobAvailable = currentJob !== undefined;

    const [position, setPosition] = React.useState(isJobAvailable ? currentJob.title : '');
    const handlePositionChange = (event) => { setPosition(event.target.value) };

    const [workCategory, setWorkCategory] = React.useState(
        isJobAvailable ? currentJob.jobCategory : work_categories[0]
    );
    const handleWorkCategoryChange = (event, newValue) => { setWorkCategory(newValue) };

    const [city, setCity] = React.useState(isJobAvailable ? currentJob.city : listOfCities[0]);
    const handleCityChange = (event, newValue) => { setCity(newValue) };

    const [salary, setSalary] = React.useState(isJobAvailable ? currentJob.salary : '');
    const handleSalaryChange = (event) => { setSalary(event.target.value) };

    const [jobDescription, setJobDescription] = React.useState(
        isJobAvailable ? currentJob.description : ''
    );
    const handleJobDescriptionChange = (event) => { setJobDescription(event.target.value) };

    const [jobType, setJobType] = React.useState(isJobAvailable ? currentJob.jobType : 'Проекти');
    const handleJobTypeChange = (event) => { setJobType(event.target.value); };

    return ({
        position, handlePositionChange,
        workCategory, handleWorkCategoryChange,
        city, handleCityChange,
        salary, handleSalaryChange,
        jobDescription, handleJobDescriptionChange,
        jobType, handleJobTypeChange
    })
};