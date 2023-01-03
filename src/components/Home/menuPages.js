import homeIcon from '../../images/main-page-icons/icons8-home-page-96.png';
import profileIcon from '../../images/main-page-icons/icons8-profile-96.png';
import subscribeIcon from '../../images/main-page-icons/icons8-tags-96.png';
import addJonIcon from '../../images/main-page-icons/icons8-job-seeker-96.png';
import savedJobsIcon from '../../images/main-page-icons/icons8-talent-64.png';
import settingsIcon from '../../images/main-page-icons/icons8-settings-58.png';
import logoutIcon from '../../images/main-page-icons/icons8-logout-64.png';

const homePage = { title: 'Начало', icon: homeIcon, path: '/home' };
const profilePage = { title: 'Профил', icon: profileIcon, path: '/profile' };
const subscriptionPage = { title: 'Абонамент', icon: subscribeIcon, path: '/pricing' };
const addJobPost = { title: 'Добави обява', icon: addJonIcon, path: '/home' };
const savedJobsPage = { title: 'Запазени обяви', icon: savedJobsIcon, path: '/saved-jobs' };
const settingsPage = { title: 'Настройки', icon: settingsIcon, path: '/home' };
const exitPage = { title: 'Изход', icon: logoutIcon, path: '/' };

export {
    homePage, profilePage, subscriptionPage,
    addJobPost, savedJobsPage, settingsPage, exitPage
};