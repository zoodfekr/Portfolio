import { Box, Card, CardMedia, Grid, Slide, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async"
import CustomDivider from "../common/CustomDivider";
import { useEffect, useState } from "react";
import { TbCertificate } from "react-icons/tb";
import Slider from "react-slick";
import { slider_image } from "../constants/appdata";
import bg1 from '../../assets/bg1.jpg';

const Certificates = (props) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setTimeout(() => setChecked(true), 250)
        return () => setChecked(false);
    }, []);

    return (
        <>
            <Helmet>
                <title>
                    {props.helmet}
                </title>
            </Helmet>

            <Card sx={{
                // backgroundImage: `url(${bg1})`,
                // backgroundColor: "white",
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
                    backgroundImage: `url(${bg1})`,
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


                <Box sx={{ pl: 5 }}>
                    <CustomDivider color={"skyblue"} linecolor={"skyblue"} textAlign="center" icon={<TbCertificate></TbCertificate>}>گواهینامه</CustomDivider>
                </Box>



                <Grid container sx={{ position: "relative" }}>

                    <Box component="div" class="alert alert-warning w-100 mx-5 mt-2" role="alert">
                        <Typography dir="rtl" align="justify">
                            مدارکی که در زیر قرار داده شده مدارک دوره های آنلاینی هست که من طی کردم، شاید ارزشی نداشته باشند فقط جهت نشان دادن دورهای طی شده قرار دادم.
                        </Typography>
                    </Box>


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



            </Card>
        </>
    )
};
export default Certificates;