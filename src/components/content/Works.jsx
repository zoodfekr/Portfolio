import { Box, Grid, Slide, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CustomDivider from "../common/CustomDivider";
import { BsCodeSlash } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { card_data } from '../constants/appdata';
import { MdOutlineSettingsApplications } from "react-icons/md";
import bg2 from '../../assets/bg2.jpg';
import Appcontext from "../../context/Context";
import { grey } from "@mui/material/colors";

const Works = (props) => {
    const { mode } = useContext(Appcontext);
    const [checked, setChecked] = useState(false);


    useEffect(() => {
        setTimeout(() => setChecked(true), 250)
        return () => setChecked(false);
    }, []);


    return (
        <Box sx={{
            backgroundImage: `url(${bg2})`,
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

            <CustomDivider color={"purple"} linecolor={"purple"} textAlign="center" icon={<MdOutlineSettingsApplications></MdOutlineSettingsApplications>}>نمونه کارها</CustomDivider>

            <Grid container>
                {card_data.map((data, index) => (
                    <Grid key={index} item xs={12} sm={6} md={6} lg={3} xl={3} sx={{ display: "flex", justifyContent: "center", mt: 2, px: 1 }} className="scale">
                        <Slide in={checked} direction="up" style={{ transitionDelay: checked ? `${(index * 250)}ms` : "0ms" }} >
                            <Card sx={{ maxWidth: 345, border: `${(mode ? data.color : grey[900])} 5px solid `, borderRadius: "30px" }} >
                                <CardMedia sx={{ height: 250 }} title="green iguana" image={data.img} />
                                <CardContent sx={{ background: (mode ? data.color : grey[800]) }}>
                                    <Typography gutterBottom variant="h5" component="div" dir="rtl" color="text.primary">{data.title}</Typography>
                                    <Typography variant="body2" color="text.primary" dir="rtl" sx={{ minHeight: "80px" }} align="justify"> {data.text}</Typography>
                                </CardContent>
                                <CardActions sx={{ background: (mode ? data.color : grey[800]) }}>
                                    <a className="card_button " href={data.address} target="_blank" rel="noopener noreferrer">
                                        <Typography color="text.primary" sx={{ mx: 2, fontSize: "18px" }}>نمایش <AiFillEye></AiFillEye></Typography>
                                    </a>
                                    <a className=" card_button" href={data.code} target="_blank" rel="noopener noreferrer">
                                        <Typography color="text.primary" sx={{ mx: 2, fontSize: "18px" }}>نمایش کد <BsCodeSlash></BsCodeSlash></Typography>
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