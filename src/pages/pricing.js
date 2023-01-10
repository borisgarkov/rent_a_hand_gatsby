import { Typography, Box } from "@mui/material";
import * as React from 'react';
import PricingCard from "../components/PricingPlansPage/PricingCard";
import FAQAccordion from "../components/PricingPlansPage/FAQAccordion";
import MainLayout from "../components/NavigationBar/MainLayout";

export default function PricingList() {
    const standardPackages = [
        {
            title: 'Безплатен',
            price: '0',
            description: [
                '1 обява за срок от 14 дни',
            ]
        },
        {
            title: 'Стандартен за 14 дни',
            price: '19,60',
            description: [
                'Достъп до чат с други потребители',
                'По-лесно намиране на обявата в търсачката',
            ]
        },
        {
            title: 'Стандартен за 28 дни',
            price: '33,60',
            description: [
                'Достъп до чат с други потребители',
                'По-лесно намиране на обявата в търсачката',
            ]
        },
        {
            title: 'Премиум за 7 дни',
            price: '35',
            description: [
                'Достъп до чат с други потребители',
                'Обявата се показва на челно място в своята категория',
                'Обявата се споделя на стената в социалните мрежи на Rent A Hand',
            ]
        },
        {
            title: 'Премиум за 28 дни',
            price: '117,60',
            description: [
                'Достъп до чат с други потребители',
                'Обявата се показва на челно място в своята категория',
                'Обявата се споделя на стената в социалните мрежи на Rent A Hand',
            ]
        },
    ];

    return (
        <MainLayout>
            <Box
                sx={{
                    margin: '0 auto',
                    maxWidth: { lg: '95%' },
                    paddingTop: 10,
                }}
            >
                <Typography variant='h4' align='center' marginBottom={5}>
                    План & Ценови лист
                </Typography>

                {
                    standardPackages.map((card) => <PricingCard card={card} key={card.title} />)
                }

                <FAQAccordion />
            </Box >
        </MainLayout>
    )
}