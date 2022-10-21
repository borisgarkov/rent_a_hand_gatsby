import { Grid, Typography, Box } from "@mui/material";
import * as React from 'react';
import PricingCard from "../components/PricingPlansPage/PricingCard";
import FAQAccordion from "../components/PricingPlansPage/FAQAccordion";
import Navigation from "../components/NavigationBar/Navigation";

export default function PricingList() {

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
    ];


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
                        standardPackages.map((card) => <PricingCard card={card} key={card.title} />)
                    }
                </Grid>
                <FAQAccordion />
            </Box >
        </Navigation>
    )
}