import { Box, Divider, Stack, Typography } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import useScreenResolution from "../hooks/useScreenResolution";
import cld from "../../services/getCloudinaryImages";
import * as React from "react";
import * as styles from './main-page.module.css';



const BaseInformationSection = ({
    title,
    informationTextArray,
    icon
}) => {
    return (
        <Stack sx={{
            flexDirection: 'column'
        }}>
            <Typography variant='h5' sx={{
                textAlign: 'center',
                marginBottom: 2,
            }}>
                {
                    title
                }
            </Typography>
            {
                informationTextArray.map(text => (
                    <Stack
                        key={text}
                        sx={{
                            flexDirection: 'row',
                            maxWidth: '550px',
                            gap: 2,
                            margin: '0 auto',
                        }}
                    >
                        {
                            icon
                        }
                        <Typography sx={{
                            textAlign: 'left',
                            marginBottom: 2,
                        }}>
                            {
                                text
                            }
                        </Typography>
                    </Stack>
                ))
            }
        </Stack>
    )
};

export default function WhyRentAHand() {
    const isMobile = useScreenResolution();

    const logo = cld.image('main page photos/Rent_A_Hand_D1_dwb3is').toURL();
    const we_are_hiring_img = cld.image(
        'main page photos/job-oppotunity-vacancy-work-icon-896425-removebg-preview_uq4etd'
    ).toURL();
    const all_talents_img = cld.image(
        'main page photos/all_talents-removebg-preview-removebg-preview_svhy5z'
    ).toURL();
    const projects_img = cld.image('main page photos/projects_advt1j').toURL();

    const textStyle = {
        textAlign: 'justify',
        margin: '0 auto',
        width: { xs: '100%', sm: '70%' },
    };

    const rentAHandText = <strong style={{ color: '#f37327' }}>Rent a Hand!</strong>;
    const divider = <Divider sx={{ width: '40%', margin: '0 auto 20px', bgcolor: '#f37327' }} />;

    const forCompaniesText = [
        'Ние предлагаме платформа, която вашата фирма да използва, за да споделя обяви за работа.',
        `Замисляли ли сте се, че можете да наемете хора, за да свършат конкретна задача 
        без постоянен трудов договор? Тогава споделете обява за краткосрочен проект.`,
        'Вие като фирма също можете да работите по конкретни проекти от други компании.',
    ];

    const forUsersText = [
        'Искаш да работиш на свободна практика? Стани част от мрежата с талани и намери подходящата за теб работа.',
        'Интересуваш се от предложения за постоянна работа? Създай профил и кандидатствай.',
        'Имаш проект / задача и търсиш помощ? Сподели обява за проект и намери подходящия човек.',
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

                {divider}

                <Typography sx={{ ...textStyle }}>
                    {rentAHandText} е иновативна платформа, свързваща работодатели от всякакъв мащаб с
                    отговорни, креативни и  трудолюбиви хора.
                    Ние от {rentAHandText} предоставяме възможността на всеки да сподели своите ежедневни,
                    средносрочни или дългосрончни проекти и задачи, както и максимално бързо да намери
                    най–подходящия човек за тяхното изпълнение.
                </Typography>

                <StarBorderIcon fontSize="large" sx={{ margin: '20px auto 0', display: 'block', color: '#176ab4' }} />
                {divider}


                <Stack sx={{
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 5,
                    justifyContent: 'center',
                    backgroundColor: 'white'
                }}>
                    <BaseInformationSection
                        title='За фирми'
                        informationTextArray={forCompaniesText}
                        icon={<DomainAddIcon sx={{ color: 'primary.main' }} />}
                    />
                    <BaseInformationSection
                        title='За потребители'
                        informationTextArray={forUsersText}
                        icon={<PersonAddAlt1Icon sx={{ color: 'primary.main' }} />}
                    />
                </Stack>

                <div className={styles.customShapeDividerBottom1670962481}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={styles.shapeFill}></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={styles.shapeFill}></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles.shapeFill}></path>
                    </svg>
                </div>
            </Box>

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
                        Ние имаме работа за всеки, краткосрочна, дългосрочна, безсрочна, да ти се работи само.
                    </Typography>
                </Stack>
                <Stack sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 3
                }}>
                    <img src={projects_img} height={isMobile ? '70' : '100'} alt="we_are_hiring_img" />
                    <Typography sx={{ maxWidth: { xs: '100%', sm: '200px' } }}>
                        Проекти и задачи подходящи за всеки, който се осмели да бъде работлив.
                    </Typography>
                </Stack>
                <Stack sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 3
                }}>
                    <img src={all_talents_img} height={isMobile ? '70' : '100'} alt="we_are_hiring_img" />
                    <Typography sx={{ maxWidth: { xs: '100%', sm: '200px' } }}>
                        Всички талантливи хора които искат да бъдат чути на едно място.
                    </Typography>
                </Stack>
            </Stack>
        </>
    )
}