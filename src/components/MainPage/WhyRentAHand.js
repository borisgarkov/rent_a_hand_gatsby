import { Box, Divider, Stack, Typography } from "@mui/material";
import useScreenResolution from "../hooks/useScreenResolution";
import DiamondIcon from '@mui/icons-material/Diamond';
import cld from "../../services/getCloudinaryImages";
import * as React from "react";
import WaveSVG from "./WaveSVG";

export default function WhyRentAHand() {
    const isMobile = useScreenResolution();

    const logo = cld.image('main page photos/Rent_A_Hand_D1_dwb3is').toURL();
    const we_are_hiring_img = cld.image('main page photos/job-oppotunity').toURL();
    const all_talents_img = cld.image('main page photos/all_talents').toURL();
    const projects_img = cld.image('main page photos/projects_advt1j').toURL();

    const rentAHandAdvantages = [
        {
            image: we_are_hiring_img,
            text: 'Ние имаме работа за всеки, краткосрочна, дългосрочна, безсрочна, да ти се работи само.',
        },
        {
            image: projects_img,
            text: 'Проекти и задачи подходящи за всеки, който се осмели да бъде работлив.',
        },
        {
            image: all_talents_img,
            text: 'Всички талантливи хора които искат да бъдат чути на едно място.',
        },
    ];

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
        <>
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
                    whyRentAHandTexts.map(text => {
                        return (
                            <Stack key={text} sx={{
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

            <Stack sx={{
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                gap: 3,
                justifyContent: 'center',
                margin: '50px auto 0',
            }}>
                <Typography variant="h5">Предимствата на</Typography>
                <img src={logo} height={'50'} alt="logo img" />
            </Stack>

            <Stack sx={{
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'center',
                gap: { xs: 2, sm: 16 },
                margin: 5,
            }}>
                {
                    rentAHandAdvantages.map((item) => {
                        return (
                            <Stack key={item.text} sx={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 3
                            }}>
                                <img src={item.image}
                                    height={isMobile ? '70' : '100'}
                                    alt="advantages_img"
                                />
                                <Typography sx={{ maxWidth: { xs: '100%', sm: '200px' } }}>
                                    {item.text}
                                </Typography>
                            </Stack>
                        )
                    })
                }
            </Stack>
        </>
    )
};