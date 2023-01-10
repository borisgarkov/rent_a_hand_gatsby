import * as React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import DiamondIcon from '@mui/icons-material/Diamond';
import WaveSVG from "./WaveSVG";

export default function WhyRentAHand() {
    const rentAHandStyled = <strong style={{ color: '#f37327' }}>Rent a Hand!</strong>;

    const whyRentAHandTexts = [
        <Typography>
            {rentAHandStyled} е
            иновативна платформа, свързваща фирми и потребители,
            предлагащи краткосрочни проекти от всякакъв мащаб с отговорни,
            креативни и трудолюбиви хора.
        </Typography>,
        <Typography>
            Ние от {rentAHandStyled} предоставяме
            възможността на всеки да сподели своите ежедневни,
            средносрочни или дългосрончни проекти и задачи, както и максимално бързо да намери
            най–подходящия човек за тяхното изпълнение.
        </Typography>,
        <Typography>
            {rentAHandStyled} дава
            поле за изява на всички хора, търсещи допълнителни доходи,
            да намерят подходящия проект за техните умения.
        </Typography>
    ];

    return (
        <Box sx={{
            backgroundColor: 'white',
            padding: '50px 0 0',
        }}>
            <Typography variant='h4' sx={{
                textAlign: 'center',
            }}>
                Какво е <strong style={{ color: '#176ab4' }}>Rent a Hand?</strong>
            </Typography>

            <Divider sx={{ width: '40%', margin: '0 auto 20px', bgcolor: '#f37327' }} />
            {
                whyRentAHandTexts.map((text, index) => {
                    return (
                        <Stack key={index} sx={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            columnGap: 1,
                            width: { xs: '90%', md: '50%' },
                            margin: '16px auto',
                        }}>
                            <DiamondIcon sx={{ color: '#176ab4' }} />
                            {text}
                        </Stack>
                    )
                })
            }
            <WaveSVG />
        </Box>
    )
};