import { Box, Grid, Typography } from "@mui/material";

import homebg from '../../assets/home_bg.jpg'
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import Appcontext from "../../context/Context";
import { position } from "stylis";




const Homepage = () => {

    const { mode } = useContext(Appcontext);
    return (
        <Box sx={{
            backgroundImage: `url(${homebg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            filter: `${mode ? null : "grayscale(1)"}`,
            position: "relative",
            overflowY:'auto',
            overflowX:"hidden"
        }}>
            <Helmet>
                <title> صفحه اصلی </title>
            </Helmet>

            <Grid container sx={{ height: "100vh" }}>
                <Grid item xs={12} sm={12} md={8} lg={6} sx={{ px: 3, pt: 19 }}>

                    <Box sx={{
                        m: "auto", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", borderRadius: "25px", p: 3,mb:5,
                        backdropFilter: "blur(20px)", // این خط را اضافه کنید

                    }}>
                        <Typography variant="h2" color={"text.primary"}>
                            {/* <Typed
                    strings={['رامین زودفکر', 'Ramin zoodfekr']}
                    typeSpeed={100}
                    backSpeed={50}
                    startDelay={1000}
                // attr="placeholder"
                // loop
                >
                    <input type="text" className='glass' />
                </Typed> */}
                            رامین زودفکر
                        </Typography>
                        <Typography variant='h4' color={"text.primary"}>
                            {/* <Typed
                    strings={['توسعه دهنده فرانت اند', 'Front-End Developer']}
                    typeSpeed={100}
                    backSpeed={50}
                    startDelay={1000}
                    loop
                >
                    <input type="text" className='glass' />
                </Typed> */}
                            توسعه دهنده فرانت اند
                        </Typography>

                        <Typography variant='h5' color={"text.primary"} align="justify" >
                            {/* <Typed
                    strings={['توسعه دهنده فرانت اند', 'Front-End Developer']}
                    typeSpeed={100}
                    backSpeed={50}
                    startDelay={1000}
                    loop
                >
                    <input type="text" className='glass' />
                </Typed> */}
                            به دلیل علاقه زیادی که به برنامه نویسی داشتم دوره های مربوط به فرانت اند
                            رو به صورت آنلاین طی کردم و نسبتا به سطح قابل قبولی رسیدم و
                            الان دنبال یک شرکت هستم تا به عنوان کارآموز مشفول به کار بشم و در آینده به موفقیت برسم
                        </Typography>
                    </Box>



                </Grid>
            </Grid>



        </Box>
    )
};

export default Homepage;