import { Box, Button, Card, CardActions, CardContent, Grid, TextField } from "@mui/material";
import { Helmet } from "react-helmet-async";
// import mail from '../../assets/mail.jpg';
import CustomDivider from "./components/CustomDivider";
import bg12 from '../../assets/bg12.jpg';
import Appcontext from "../../context/Context";
import { useContext } from "react";



const Contact = (props) => {

    const { mode } = useContext(Appcontext);

    return (
        <>
            <Helmet>
                <title>
                    {props.helmet}
                </title>
            </Helmet>

            <Box sx={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${bg12})`,
                position: "relative",
                height: "100vh",
                width: "100%",
                overflowX: "hidden",
                overflowY: "auto",
                // border: "1px solid red"
            }}>


                <CustomDivider color={"skyblue"} linecolor={"skyblue"} textAlign={"center"}>ارتباط با من</CustomDivider>




                <Grid container >
                    <Grid xs={12} sx={12} md={8} lg={6} sx={{p:4}}>
                        <Card sx={{ background:  mode ? "linear-gradient(45deg, rgba(255,255,255,0.7) 0%, rgba(0,0,255,0.4) 100%)" : "linear-gradient(45deg, rgba(255,255,255,0.2) 0%, rgba(0,0,255,0.2) 100%)", 
                        borderRadius: "25px",
                        backdropFilter: "blur(5px)"
}}>
                        <form>
                            <CardContent>


                                <Grid container sx={{}}>
                                    <Grid xs={12} sm={12} md={6} sx={{ mt: 2 }}>
                                        <TextField fullWidth size="small" color="danger" label="نام و نام خانوادگی" name="fullname" variant="outlined" />
                                    </Grid>

                                    <Grid xs={12} sm={12} md={6} sx={{ mt: 2 }}>
                                        <TextField fullWidth size="small" color="danger" label="نام و نام خانوادگی" name="fullname" variant="outlined" />
                                    </Grid>

                                    <Grid xs={12} sm={12} md={12} sx={{ mt: 2 }}>
                                        <TextField fullWidth size="small" color="danger" label="نام و نام خانوادگی" name="fullname" variant="outlined" />
                                    </Grid>

                                    <Grid xs={12} sm={12} md={12} sx={{ mt: 2 }}>
                                        <TextField fullWidth size="small" color="danger" label="نام و نام خانوادگی" name="fullname" variant="outlined" multiline rows={6} />
                                    </Grid>
                                </Grid>
                            </CardContent>

                            <CardActions sx={{ alignItems: "end", flexDirection: "column" }} >
                                <Button
                                    type="submit"
                                    color="success"
                                    variant="contained"
                                    sx={{ mt: 2 }}
                                    fullWidth
                                >
                                    ارسال کن
                                </Button>
                            </CardActions>



                        </form>
                    </Card>
                </Grid>
            </Grid>















        </Box >

        </>
    )
};
export default Contact;