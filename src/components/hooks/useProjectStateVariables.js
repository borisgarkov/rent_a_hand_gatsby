import * as React from "react";

export default function useProjectStateVariables() {
    // project information form
    const [projectTitle, setProjectTitle] = React.useState('');
    const handleProjectTitleChange = (event) => { setProjectTitle(event.target.value) };

    const [projectDuration, setProjectDuration] = React.useState('');
    const handleProjectDurationChange = (event) => { setProjectDuration(event.target.value) };

    const [workCategory, setWorkCategory] = React.useState('ИТ');
    const handleWorkCategoryChange = (event, newValue) => { setWorkCategory(newValue) };

    const [payment, setPayment] = React.useState('');
    const handlePaymentChange = (event) => { setPayment(event.target.value) };

    const [paymentType, setPaymentType] = React.useState('на час');
    const handlePaymentTypeChange = (event) => { setPaymentType(event.target.value) };

    const [projectDescription, setProjectDescription] = React.useState('');
    const handleProjectDescriptionChange = (event) => { setProjectDescription(event.target.value) };

    return ({
        // project information form
        projectTitle, handleProjectTitleChange, projectDuration, handleProjectDurationChange,
        workCategory, handleWorkCategoryChange, payment, handlePaymentChange,
        paymentType, handlePaymentTypeChange, projectDescription, handleProjectDescriptionChange,
    })
}