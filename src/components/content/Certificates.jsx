import { Box, Card, CardMedia, Grid, Slide, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async"
import CustomDivider from "./components/CustomDivider";
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

            <Box sx={{
                  backgroundImage: `url(${bg1})`,
                // backgroundColor: "white",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "100vh",
                width: "100%",
                overflowX: "hidden",
                overflowY: "auto"
            }}>


                <Slide direction="down" in={checked}>
                    <Box sx={{ pl: 5 }}>
                        <CustomDivider color={"skyblue"} linecolor={"skyblue"} textAlign="center" icon={<TbCertificate></TbCertificate>}>گواهینامه</CustomDivider>
                    </Box>
                </Slide>


                <Grid container sx={{ position: "relative" }}>


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



            </Box>
        </>
    )
};
export default Certificates;