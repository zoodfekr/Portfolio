import Grid from "@mui/material/Unstable_Grid2";
import { Avatar, Box, Chip, Divider, Typography } from "@mui/material";
import aboute_bg from '../../assets/aboute_bg.jpg';
import devinfo from '../../assets/devinfo.jpg';
import { MdArrowBackIosNew } from "react-icons/md";
import Devinfo from './components/Devinfo';
import CustomDivider from "./components/CustomDivider";
import Skills from "./components/Skills";
import { BsCodeSlash } from "react-icons/bs";
import { Helmet } from "react-helmet-async";

import CountUp from 'react-countup';


const Aboutpage = () => {
    return (
        <Box sx={{
            backgroundImage: `url(${aboute_bg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100vh",
            width: "100%",
            overflowX: "hidden",
            overflowY: "auto"
        }}>


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

                    <Box sx={{pl:5}}>
                        <CustomDivider color={"green"}> توسعه دهنده فرانت اند </CustomDivider>
                    </Box>

                    <Box sx={{ display: "flex" }}>

                        <Grid
                            sx={{
                        
                                display: {
                                    xs: "none", sm: "flex"
                                },
                                justifyContent: "center"
                            }}
                            xs={0}
                            sm={4}
                            md={4}
                            lg={6}
                            xl={6}>

                            <Box sx={{ display: "flex", flexDirection: "column",justifyContent:"center" }} className="col-xs-0 col-sm-12 col-lg-12 col-xl-6" >
                                <Chip label="ramin" sx={{ backgroundColor: "#19376D", mt:2 }}></Chip>
                                <Chip label="ramin" sx={{ backgroundColor: "#FF6969", mt:2 }}></Chip>
                                <Chip label="ramin" sx={{ backgroundColor: "#0EA293", mt:2 }}></Chip>
                                <Chip label="ramin" sx={{ backgroundColor: "#7C96AB", mt:2 }}></Chip>
                            </Box>


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

                <Grid item
                    xs={0}
                    sm={0}
                    md={4}
                    lg={4}
                    xl={4}
                    sx={{ justifyContent: "center", pt: 10 }}
                >
                    {/* roght content */}

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

            <Grid container>

                <Grid item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}>


                    <CustomDivider color={"purple"} icon={<BsCodeSlash />}>مهارت های من</CustomDivider>

                    <Skills></Skills>

                </Grid>

            </Grid>



        </Box>
    )
};

export default Aboutpage;