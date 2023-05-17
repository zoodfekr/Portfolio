import { Box, Grid, Slide, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CustomDivider from "./components/CustomDivider";
import { BsCodeSlash } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import { card_data } from '../constants/appdata';
import { MdOutlineSettingsApplications } from "react-icons/md";

const Works = (props) => {

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setTimeout(() => setChecked(true), 250)
        return () => setChecked(false);
    }, []);

    return (
        <Box sx={{
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
                    <CustomDivider color={"purple"} linecolor={"purple"} textAlign="center" icon={<MdOutlineSettingsApplications></MdOutlineSettingsApplications>}>نمونه کارها</CustomDivider>
                </Box>
            </Slide>


            <Grid container>
                {card_data.map((data, index) => (
                    <Grid key={index} item xs={12} sm={6} md={6} lg={3} xl={3} sx={{ display: "flex", justifyContent: "center", mt: 2, px: 1 }} className="scale">
                        <Slide in={checked} direction="up" style={{ transitionDelay: checked ? `${(index * 250)}ms` : "0ms" }} >
                            <Card sx={{ maxWidth: 345, border: `${data.color} 5px solid `, borderRadius: "30px" }} >
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
            </Grid>


        </Box>

    )
};
export default Works;