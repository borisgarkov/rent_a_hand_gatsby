import * as React from "react";
import { navigate } from "gatsby";

import Navigation from "../components/NavigationBar/Navigation";

import WorkIcon from '@mui/icons-material/Work';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import * as styles from '../components/MainPage/main-page.module.css';
import { Stack, Typography, Button, Paper, Tabs, Tab, Box } from "@mui/material";
import cld from "../services/getCloudinaryImages";
import WhyRentAHand from '../components/MainPage/WhyRentAHand';
import ExploreTheMarketPlace from '../components/MainPage/ExploreTheMarketPlace';
import Footer from "../components/CommonItems/Footer";

const tabs_css_style = {
    padding: {
        xs: '0 10px',
        md: '0 50px',
    },
};

const LearnMoreSection = () => {
    return (
        <Stack sx={{ width: { md: '85%' }, margin: '0 auto', paddingBottom: 3, marginTop: 2.5 }}>
            <Button variant='contained' onClick={() => navigate('/register')}>Научи повече</Button>
        </Stack>
    )
};

const ProjectsTabInfo = () => {
    const tabText = [
        'Намерете правилния човек, който да свърши вашата задача / проект.',
        'Научете повече за предимствата на нашата платформа',
    ];

    /*
    Замисляли ли сте се, че можете да наемете хора, 
    за да свършат конкретна задача без постоянен трудов договор? 
    Тогава споделете обява за краткосрочен проект.

    Вие като фирма също можете да работите по конкретни проекти от други компании.
     */

    return (
        <Stack sx={{ gap: 2, justifyContent: 'center' }}>
            <WorkIcon fontSize='large' sx={{ alignSelf: 'center', color: 'primary.main' }} />
            <Typography variant='h5' sx={{ ...tabs_css_style }}>
                Вие сте фирма или обикновен потребител, който предлага краткосрочен проект?
            </Typography>
            {
                tabText.map(text => (
                    <Typography key={text} variant='body1' sx={{ ...tabs_css_style }}>
                        {text}
                    </Typography>
                ))
            }
        </Stack>
    )
};

const TalentsTabInfo = () => {

    const tabText = [
        'Стани част от мрежата с талани.',
        'Работи в удобно за теб време, където и когато поискаш.',
        'Намери подходящия проект за твоите умения, като споделиш опита и знанията си.',
    ];

    return (
        <Stack sx={{
            gap: 2,
            justifyContent: 'center',
        }}>
            <StarBorderIcon fontSize='large' sx={{ alignSelf: 'center', color: 'primary.main' }} />
            <Typography variant='h5' sx={{ ...tabs_css_style }}>
                Искаш да работиш на свободна практика?
            </Typography>
            {
                tabText.map(text => (
                    <Typography variant='body1' sx={{ ...tabs_css_style }}>
                        {text}
                    </Typography>
                ))
            }
        </Stack>
    )
};

export default function MainPage() {
    const job_offers_img = cld.image('main page photos/main_page_job_offers_sajflw').toURL();
    const freelancer_img = cld.image('main page photos/main_page_freelancer_suf7mw').toURL();

    const [tab, setTab] = React.useState(0);
    const [backgroundImg, setBackgroundImg] = React.useState(job_offers_img);

    const tab_images = {
        0: job_offers_img,
        1: freelancer_img,
    };

    const tabsChangeHandler = (event, newTab) => {
        setTab(newTab);
        setBackgroundImg(tab_images[newTab]);
    };

    const tabs_info = [
        {
            label: 'Проекти',
            icon: <WorkIcon />,
            value: 0
        },
        {
            label: 'Таланти',
            icon: <StarBorderIcon />,
            value: 1
        },
    ];

    const tabs_data = {
        0: <ProjectsTabInfo />,
        1: <TalentsTabInfo />,
    };

    return (
        <Navigation>
            <Box sx={{ position: 'relative' }}>
                <Stack>
                    <img className={styles.image} src={backgroundImg} alt='job offers img' />
                </Stack>
                <Paper sx={{
                    width: { xs: '100%', lg: 576 }, position: { xs: 'static', lg: 'absolute' },
                    top: { md: '20%' }, left: { md: '8%' },
                }}>
                    <Tabs value={tab} centered variant='fullWidth'
                        sx={{ marginBottom: 5 }} onChange={tabsChangeHandler}>
                        {
                            tabs_info.map(x => (
                                <Tab key={x.label} wrapped label={x.label} icon={x.icon}
                                    iconPosition='top' value={x.value} sx={tabs_css_style}
                                />
                            ))
                        }
                    </Tabs>
                    {
                        tabs_data[tab]
                    }
                    <LearnMoreSection />
                </Paper>
            </Box>
            <WhyRentAHand />
            <ExploreTheMarketPlace />
            <Footer />
        </Navigation>
    )
};

export const Head = () => (
    <>
        <title>Rent A Hand</title>
        <meta name="description" content="Rent a Hand - jobs portal" />
        <meta name="keywords"
            content="Рент ъ хенд, Rent a Hand, работа, стаж, проекти, задачи, почасова работа"
        />
    </>
);