import Grid from "@mui/material/Unstable_Grid2";
import { Avatar, Box, Chip, Divider, Typography } from "@mui/material";
import aboute_bg from '../../assets/aboute_bg.jpg';
import devinfo from '../../assets/devinfo.jpg';
import { MdArrowBackIosNew } from "react-icons/md";
import Devinfo from './components/Devinfo';
import CustomDivider from "./components/CustomDivider";
import Skills from "./components/Skills";
import { BsCodeSlash } from "react-icons/bs";
const Aboutpage = () => {
    return (
        <Box sx={{
            backgroundImage: `url(${aboute_bg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100vh",
            width: "100%",
            overflowX:"hidden",
            overflowY:"auto"
        }}>




            <Grid container >

                <Grid item
                    xs={12}
                    sm={12}
                    md={8}
                    lg={8}
                    xl={8}
                    sx={{ pt: 7}}
                >
                    {/* left content */}
                    <CustomDivider color={"green"}> توسعه دهنده فرانت اند </CustomDivider>

                    <Devinfo>نام : رامین</Devinfo>
                    <Devinfo>نام خانوادگی : زودفکر</Devinfo>
                    <Devinfo>ایمیل : Zoodfekr.r@gmail.com</Devinfo>
                    <Devinfo>سن : 27</Devinfo>
                    <Devinfo>متولد : تهران</Devinfo>

                    {/* <CustomDivider>مهارت های من</CustomDivider> */}

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