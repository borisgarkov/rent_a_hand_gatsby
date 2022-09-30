import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import * as React from 'react';

export default function FAQAccordion() {

    const accordionSummaryCssSettings = {
        backgroundColor: 'primary.main',
        color: 'white',
        '&:hover': {
            backgroundColor: 'primary.light',
        }
    };

    const expandIconCssSettings = {
        color: 'white'
    };

    const accordionsInfo = [
        {
            id: 'panel1-header',
            title: 'Как мога да платя за месечен абонамент?',
            details: 'Плащането се извършва само чрез кредитна/дебитна карта.'
        },
        {
            id: 'panel2-header',
            title: 'Предлагате ли безплатен тестов период?',
            details: `Всички регистрирани потребители автоматично получават нашия безплатен пакет, 
                        който Ви дава възможността да споделите 1 обява за срок от 30 дни.`
        },
        {
            id: 'panel3-header',
            title: 'Мога ли да прекратя плана си предварително?',
            details: 'Можете да прекратите абонамента си по всяко време.'
        },
        {
            id: 'panel4-header',
            title: 'Друг въпрос?',
            details: 'При други въпроси, моля, свържете се с нас!'
        }
    ]

    return (
        <Stack
            maxWidth={{
                md: '70%'
            }}
            sx={{
                margin: 'auto',
                marginBottom: 10,
            }}
        >
            <Typography
                variant='h5'
                align='center'
                marginBottom={2}
                sx={{
                    // bgcolor: 'background.paper'
                }}
            >
                Често задавани въпроси?
            </Typography>
            {
                accordionsInfo.map(x =>
                    <Accordion key={x.id}>
                        <AccordionSummary
                            expandIcon={<ExpandCircleDownIcon sx={expandIconCssSettings} />}
                            id={x.id}
                            sx={accordionSummaryCssSettings}
                        >
                            <Typography>{x.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{x.details}</Typography>
                        </AccordionDetails>
                    </Accordion>)
            }
        </Stack>
    )
}