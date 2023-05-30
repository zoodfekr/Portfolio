import Grid from "@mui/material/Unstable_Grid2";
import { Avatar, Box, Card, Chip, Divider, Typography } from "@mui/material";
import devinfo from '../../assets/devinfo.jpg';
import Devinfo from './components/Devinfo';
import CustomDivider from "../common/CustomDivider";
import Skills from "./components/Skills";
import { BsCodeSlash } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import Tooltip from '@mui/material/Tooltip';
import CountUp from 'react-countup';
import Slide from '@mui/material/Slide';
import { useContext, useEffect, useState } from "react";
import { aboutpage_tooltip, slider_image } from '../constants/appdata';
import bg3 from '../../assets/bg3.jpg';
import SeftTimeline from "./components/Timeline";
import Appcontext from "../../context/Context";


const Aboutpage = () => {
    const [checked, setChecked] = useState(false);
    const { mode, theme } = useContext(Appcontext);

    useEffect(() => {
        setTimeout(() => setChecked(true), 500)
        return () => setChecked(false);
    }, []);



    return (
        <Card sx={{
            // backgroundImage: `url(${bg3})`,
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            // backgroundSize: "cover",
            height: "100vh",
            width: "100%",
            overflowX: "hidden",
            overflowY: "auto",
            backgroundColor: theme.palette.background.main,

        }}>



            <Helmet>
                <title>  درباره من </title>
            </Helmet>

            <Grid container sx={{ border: "1px solid purple" }}>

                <Grid container sx={{ pt: 0, border: "1px solid green" }}  >
                    {/* left content */}

                    <Slide direction="down" in={checked}>
                        <Box sx={{ pl: 5 }}>
                            <CustomDivider linecolor={"green"} color={"green"}> توسعه دهنده فرانت اند </CustomDivider>
                        </Box>
                    </Slide>

                    <Box sx={{ display: "flex", border: "red 1px solid ", px: 3 }}>

                        <Grid
                            xs={12}
                            sm={8}
                            md={8}
                            lg={6}
                            xl={6}>
                            <Devinfo>نام : رامین</Devinfo>
                            <Devinfo>نام خانوادگی : زودفکر</Devinfo>
                            <Devinfo>ایمیل : Zoodfekr.r@gmail.com</Devinfo>
                            <Devinfo>سن : <CountUp end={27} start={0} duration={5} /></Devinfo>
                            <Devinfo>متولد : تهران</Devinfo>
                            <Devinfo>تحصیلات : کارشناسی (مخابرات)</Devinfo>

                        </Grid>

                    </Box>

                    <Box>
                    <Avatar className="avatartest" variant="rounded" alt="Remy Sharp" src={devinfo} sx={{
                        display: {
                            xl: "block",
                            lg: "block",
                            md: "block",
                            sm: "none",
                            xs: "none",
                        },
                        width: 350,
                        height: "auto",
                        margin: "0 auto",
                    }} />
                    </Box>

                </Grid>







            </Grid>

            {/* skills */}
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <CustomDivider linecolor={"purple"} color={"purple"} textAlign="center" icon={<BsCodeSlash />}>مهارت های من</CustomDivider>
                    <Skills></Skills>
                </Grid>
            </Grid>


            <Grid container >
                <Grid item xs={12}>
                    <CustomDivider color={"red"} textAlign="center" linecolor={"red"}>دوره های طی شده</CustomDivider>
                </Grid>
                {slider_image.map((value, index) => (
                    <Slide in={checked} direction="up" style={{ transitionDelay: checked ? `${(index * 250)}ms` : "0ms" }} >
                        <Grid key={index} item xs={12} sm={6} md={6} lg={4} xl={4} sx={{ my: 2, display: "flex", justifyContent: "center" }}>
                            <Box component="div" sx={{ p: 1 }}>
                                <Box component="img" sx={{ height: "auto", maxWidth: "400px", width: 1 }} src={value.img} className="scale" />
                            </Box>
                        </Grid>
                    </Slide>
                ))}
            </Grid>
        </Card >
    )
};

export default Aboutpage;