import { Divider, Stack, Typography } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import useScreenResolution from "../hooks/useScreenResolution";
import cld from "../../services/getCloudinaryImages";
import * as React from "react";

const logo = cld.image('main page photos/Rent_A_Hand_D1_dwb3is').toURL();
const we_are_hiring_img = cld.image('main page photos/job-oppotunity-vacancy-work-icon-896425-removebg-preview_uq4etd').toURL();
const all_talents_img = cld.image('main page photos/all_talents-removebg-preview-removebg-preview_svhy5z').toURL();
const projects_img = cld.image('main page photos/projects_advt1j').toURL();

export default function WhyRentAHand() {
    const isMobile = useScreenResolution();

    const textStyle = {
        width: { xs: '100%', sm: '40%' }, textAlign: 'center', margin: '10px auto'
    };

    const rentAHandText = <strong style={{ color: '#f37327' }}>Rent a Hand!</strong>;
    const starIcon = <StarBorderIcon fontSize="large" sx={{ margin: '0 auto', display: 'block', color: '#176ab4' }} />;
    const divider = <Divider sx={{ width: '40%', margin: '0 auto 20px', bgcolor: '#f37327' }} />;

    return (
        <>
            <Typography variant='h4' sx={{
                textAlign: 'center',
                margin: '50px 0 0'
            }}>
                Какво е <strong style={{ color: '#176ab4' }}>Rent a Hand?</strong>
            </Typography>
            {divider}
            <Typography sx={{ ...textStyle }}>
                Вие сте компания, която предлага работа и търси служители?
                Вие сте талантлива личност и заете, че заслужавате повече.

                Имате спешна нужда от персонал за изпълнението на краткосрочен или дългосрочен проект?
                Тук се появяваме ние от {rentAHandText}!
            </Typography>
            {starIcon}
            <Typography sx={{ ...textStyle }}>
                {rentAHandText} е иновативна платформа, свързваща работодатели от всякакъв мащаб с
                отговорни, креативни и  трудолюбиви хора.
                Ние от {rentAHandText} предоставяме възможността на всеки да сподели своите ежедневни,
                средносрочни или дългосрончни проекти и задачи, както и максимално бързо да намери
                най–подходящия човек за тяхното изпълнение.
            </Typography>
            {starIcon}
            <Typography sx={{ ...textStyle }}>
                Платформата е изградена с идеята да бъде полезна за всички страни и да направи всички Ваши проекти успешни.
            </Typography>
            {starIcon}
            <Typography sx={{ ...textStyle }}>
                {rentAHandText} предлага разнообразни възможности за почасова работа,
                работа на граждански договори,  свободна практира, дългосрочни трудови
                взаимоотношения, стажове и допълнителни професионални квалификации.
            </Typography>
            {divider}
            <Stack sx={{
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                gap: 3,
                justifyContent: 'center',
                margin: '50px auto 0'
            }}>
                <Typography variant="h5">Предимствата на</Typography>
                <img src={logo} height={'50'} alt="logo img" />
            </Stack>

            <Stack sx={{
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'center',
                gap: { xs: 2, sm: 16 },
                margin: 5
            }}>
                <Stack sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 3
                }}>
                    <img src={we_are_hiring_img} height={isMobile ? '70' : '100'} alt="we_are_hiring_img" />
                    <Typography sx={{ maxWidth: { xs: '100%', sm: '200px' } }}>
                        Ние имаме работа за всеки, краткосрочна, дългосрочна, безсрочна, да ти се работи само
                    </Typography>
                </Stack>
                <Stack sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 3
                }}>
                    <img src={projects_img} height={isMobile ? '70' : '100'} alt="we_are_hiring_img" />
                    <Typography sx={{ maxWidth: { xs: '100%', sm: '200px' } }}>
                        Проекти и задачи подходящи за всеки, който се осмели да бъде работлив
                    </Typography>
                </Stack>
                <Stack sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 3
                }}>
                    <img src={all_talents_img} height={isMobile ? '70' : '100'} alt="we_are_hiring_img" />
                    <Typography sx={{ maxWidth: { xs: '100%', sm: '200px' } }}>
                        Всички талантливи хора които искат да бъдат чути на едно място
                    </Typography>
                </Stack>
            </Stack>
        </>
    )
}