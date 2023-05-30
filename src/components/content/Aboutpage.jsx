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
import { useEffect, useState } from "react";
import { aboutpage_tooltip } from '../constants/appdata';
import bg3 from '../../assets/bg3.jpg';
import SeftTimeline from "./components/Timeline";


const Aboutpage = () => {
    const [checked, setChecked] = useState(false);

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
            background: "rgba(0,0,0,0.2)"
        }}>

            <Box sx={{
                position: "absolute",
                backgroundImage: `url(${bg3})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "100vh",
                width: "100%",
                overflowX: "hidden",
                overflowY: "auto",
                opacity: 0.2,
                zIndex: "-10"
            }}>
            </Box>

            <Helmet>
                <title>  درباره من </title>
            </Helmet>

            <Grid container >

                <Grid container
                    xs={12}
                    sm={12}
                    md={8}
                    lg={8}
                    xl={8}
                    sx={{ pt: 0, display: "flex", flexDirection: "column" }}
                >
                    {/* left content */}

                    <Slide direction="down" in={checked}>
                        <Box sx={{ pl: 5 }}>
                            <CustomDivider linecolor={"green"} color={"green"}> توسعه دهنده فرانت اند </CustomDivider>
                        </Box>
                    </Slide>

                    <Box sx={{ display: "flex" }}>

                        <Grid
                            sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "center" }}
                            xs={0} sm={4} md={4} lg={6} xl={6}>
                        </Grid>

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
                        </Grid>

                    </Box>

                </Grid>

                {/* right content */}
                <Grid item xs={0} sm={0} md={4} lg={4} xl={4} sx={{ justifyContent: "center", pt: 10 }} >
                    <Avatar className="avatartest" variant="rounded" alt="Remy Sharp" src={devinfo} sx={{
                        display: {
                            xl: "block",
                            lg: "block",
                            md: "block",
                            sm: "none",
                            xs: "none",
                        },
                        height: 250,
                        width: 250,
                        margin: "0 auto",
                    }} />

                </Grid>
            </Grid>

            {/* skills */}
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <CustomDivider linecolor={"purple"} color={"purple"} textAlign="center" icon={<BsCodeSlash />}>مهارت های من</CustomDivider>
                    <Skills></Skills>
                </Grid>
            </Grid>

            {/* education*/}
            <Grid container >
                <Grid item xs={12}>
                    <CustomDivider color={"red"} textAlign="center" linecolor={"red"}>تحصیلات</CustomDivider>
                    <SeftTimeline></SeftTimeline>
                </Grid>
            </Grid>

        </Card >
    )
};

export default Aboutpage;