import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import * as React from 'react';

import PricingCard from "../components/PricingPlansPage/PricingCard";
import FAQAccordion from "../components/PricingPlansPage/FAQAccordion";

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import Navigation from "../components/NavigationBar/Navigation";

export default function PricingList() {

    const [tab, setTab] = React.useState(0);

    const tabsChangeHandler = (event, newTab) => { setTab(newTab) };

    const standardPackages = [
        {
            title: 'Безплатен',
            price: '0лв.',
            description: [
                '1 обява за срок от 30 дни',
            ]
        },
        {
            title: 'Стандартен',
            price: '6,99лв.',
            description: [
                'До 3 обяви за целия абонаментен период',
                'Подредба на челна позиция с други обяви в общата категория',
                'По една публикация месечно на обявата в нашите социални мрежи',
            ]
        },
        {
            title: 'Премиум',
            price: '25,99лв.',
            description: [
                'Неограничен брой обяви за целия абонаментен период',
                'Подредба на челна позиция с други обяви в общата категория',
                'Всяка седмица публикуване на обявата в нашите социалните мрежи',
            ]
        }
    ]

    const companyPackages = [
        {
            title: 'Персонализиран за Вашите нужди',
            price: '',
            description: [
                'По договаряне',
            ]
        }
    ]

    return (
        <Navigation>
            <Box
                maxWidth={{ md: '70%' }}
                sx={{ margin: 'auto', marginTop: 5, }}
            >
                <Typography variant='h5' align='center' gutterBottom>
                    План & Ценови лист
                </Typography>
                <Typography variant='h4' align='center' gutterBottom>
                    Имаме план за всеки потребител
                </Typography>
                <Typography variant='h6' align='center' marginBottom={5} color='text.secondary' gutterBottom>
                    Независимо дали си фирма, или потребител
                </Typography>

                <Tabs
                    value={tab}
                    centered
                    variant='fullWidth'
                    sx={{
                        marginBottom: 5
                    }}
                    onChange={tabsChangeHandler}
                >
                    <Tab wrapped label='Стандартни Пакети' icon={<AccountCircleOutlinedIcon />} iconPosition='start' value={0} />
                    <Tab wrapped label='Фирмени Пакети' icon={<ApartmentOutlinedIcon />} iconPosition='start' value={1} />
                </Tabs>

                <Grid
                    container
                    spacing={5}
                    alignItems='flex-end'
                    marginBottom={10}
                    justifyContent='center'
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    {
                        tab === 0 ?
                            standardPackages.map((card) => <PricingCard card={card} key={card.title} />) :
                            companyPackages.map((card) => <PricingCard card={card} key={card.title} />)
                    }
                </Grid>
                <FAQAccordion />
            </Box >
        </Navigation>
    )
}