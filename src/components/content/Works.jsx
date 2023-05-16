import { Box, Grid, Slide, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import restaurant from '../../assets/restaurant.png';
import words from '../../assets/words.png';
import contacts from '../../assets/contacts.png';
import portfolio from '../../assets/portfolio.png';

import Grow from '@mui/material/Grow';
import CustomDivider from "./components/CustomDivider";
import { BsCodeSlash } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { useEffect, useState } from "react";
const Works = (props) => {


    const card_data = [
        {
            title: "رستوران تهران",
            text: "این پروه با استفاده از HTML،CSS،BOOTSTRAP طراحی شده و یک سایت تک صفحه ای می باشد",
            img: `${restaurant}`,
            color: "#DE901F",
            address: "https://zoodfekr.github.io/restaurant/",
            code: "https://github.com/zoodfekr/restaurant",
        },
        {
            title: " دفترچه مخاطبین ",
            text: "پروژه ای که با استفاده از React ساخته شده و کارآن ذخیره-ویرایش مخاطبین در سرور دلخواه است.",
            img: `${contacts}`,
            color: "#8369A6",
            address: "https://zoodfekr-org.github.io/",
            code: "https://github.com/zoodfekr/contacts-management",
        }, {
            title: " دفترچه لغت",
            text: "این پروه با استفاده از کتابخانه React برای تمرین لغات انگلیسی ساخته شده در واقع این پروژه یک دفترچه لغت هوشمند به حسابت می آید.",
            img: `${words}`,
            color: "#1976D2",
            address: "https://vocabulary-training-localstorage.github.io/",
            code: "https://github.com/zoodfekr/Vocabulary-training-LocalStorage",
        },
        {
            title: "وب اپلیکیشن پورتفولیو",
            text: "پروژه پورتفولیو، برنامه تحت وبی که اکنون در حال کارکردن با آن هستید. این پروژه هم با استفاده از react , Mui  ساخته شده. ",
            img: `${portfolio}`,
            color: "#1FB9EA",
            address: "#",
            code: "https://github.com/zoodfekr/portfolio",
        },


    ]


    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setTimeout(() => setChecked(true), 250)
        return () => setChecked(false);
    }, []);



    return (
        <Box sx={{
            // backgroundImage: `url(${aboute_bg})`,
            // backgroundColor: "#B4B4B4",
            backgroundColor: "white",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100vh",
            width: "100%",
            overflowX: "hidden",
            overflowY: "auto"
        }}>


            <Helmet>
                <title>{props.helmet}</title>
            </Helmet>


            <Slide direction="down" in={checked}>
                <Box sx={{ pl: 5 }}>
                    <CustomDivider color={"purple"} linecolor={"purple"} textAlign="center">نمونه کارها</CustomDivider>
                </Box>
            </Slide>


            <Grid container>

                {/* <Grow in={true}> */}
                {card_data.map((data, index) => (
                    <Grid key={index} item xs={12} sm={6} md={6} lg={3} xl={3} sx={{ display: "flex", justifyContent: "center", mt: 2, px: 1 }} >
                        <Slide in={checked} direction="up" style={{ transitionDelay: checked ? `${100 + (index * 250)}ms` : "0ms" }} >
                            <Card sx={{ maxWidth: 345, border: `${data.color} 5px solid `, borderRadius: "30px" }}>
                                <CardMedia sx={{ height: 250 }} title="green iguana" image={data.img} />
                                <CardContent sx={{ background: `${data.color}` }}>
                                    <Typography gutterBottom variant="h5" component="div" dir="rtl" color="black">{data.title}</Typography>
                                    <Typography variant="body2" color="black" dir="rtl" sx={{ minHeight: "80px" }} align="justify"> {data.text}</Typography>
                                </CardContent>
                                <CardActions sx={{ background: `${data.color}`, }}>
                                    <a className="card_button " href={data.address} target="_blank" rel="noopener noreferrer">
                                        <Typography color="black" sx={{ mx: 2, fontSize: "18px" }}>نمایش <AiFillEye></AiFillEye></Typography>
                                    </a>
                                    <a className=" card_button" href={data.code} target="_blank" rel="noopener noreferrer">
                                        <Typography color="black" sx={{ mx: 2, fontSize: "18px" }}>نمایش کد <BsCodeSlash></BsCodeSlash></Typography>
                                    </a>
                                </CardActions>
                            </Card>
                        </Slide>
                    </Grid>
                ))}
                {/* </Grow> */}

            </Grid>





        </Box>

    )
};
export default Works;