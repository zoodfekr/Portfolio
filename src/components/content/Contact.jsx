import { Box, Button, Card, CardActions, CardContent, Grid, TextField, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import CustomDivider from "../common/CustomDivider";
import bg12 from '../../assets/bg12.jpg';
import Appcontext from "../../context/Context";
import { useContext, useRef, useState } from "react";
import { yupSchema } from "../constants/yup";
import { useFormik } from 'formik';
import ReCAPTCHA from "react-google-recaptcha";




const Contact = (props) => {

    const { mode } = useContext(Appcontext);

    let captcha = useRef(null);

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            text: '',
            recaptcha: ""
        },
        validationSchema: yupSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    });



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
            }}>

                <CustomDivider color={"skyblue"} linecolor={"skyblue"} textAlign={"center"}>ارتباط با من</CustomDivider>



                <Grid container >
                    
                    <Box component="div" class="alert alert-warning w-100 mx-5 mt-2" role="alert">
                        <Typography dir="rtl" align="justify">
                            این پورتفولیو به دلیل نداشتن بک اند هنوز قابلیت ارسال پیام ندارد و فقط این فرم برای نمایش قرار داده شده.
                        </Typography>
                    </Box>

                    <Grid xs={12} sx={12} md={8} lg={6} sx={{ p: 4 }}>
                        <Card sx={{
                            background: mode ? "linear-gradient(45deg, rgba(255,255,255,0.7) 0%, rgba(0,0,255,0.4) 100%)" : "linear-gradient(45deg, rgba(255,255,255,0.2) 0%, rgba(0,0,255,0.2) 100%)",
                            borderRadius: "25px",
                            backdropFilter: "blur(5px)"
                        }}>
                            <form onSubmit={formik.handleSubmit}>
                                <CardContent>


                                    <Grid container sx={{}}>
                                        <Grid xs={12} sm={12} md={6} sx={{ mt: 2, px: 1 }}>
                                            <TextField
                                                id="lastname"
                                                name="lastname"
                                                label="نشان"
                                                value={formik.values.lastname}
                                                onChange={formik.handleChange}
                                                error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                                                helperText={formik.touched.lastname && formik.errors.lastname}
                                                dir="rtl"
                                                fullWidth
                                                size="small"
                                                color="danger"
                                                variant="outlined"
                                            />
                                        </Grid>

                                        <Grid xs={12} sm={12} md={6} sx={{ mt: 2, px: 1 }}>
                                            <TextField
                                                id="firstname"
                                                name="firstname"
                                                label="نام"
                                                value={formik.values.firstname}
                                                onChange={formik.handleChange}
                                                error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                                                helperText={formik.touched.firstname && formik.errors.firstname}
                                                dir="rtl"
                                                fullWidth
                                                size="small"
                                                color="danger"
                                                variant="outlined"
                                            />                                        </Grid>

                                        <Grid xs={12} sm={12} md={12} sx={{ mt: 2, px: 1 }}>
                                            <TextField
                                                id="email"
                                                name="email"
                                                label="ایمیل"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                error={formik.touched.email && Boolean(formik.errors.email)}
                                                helperText={formik.touched.email && formik.errors.email}
                                                dir="rtl"
                                                fullWidth
                                                size="small"
                                                color="danger"
                                                variant="outlined"
                                            />                                         </Grid>

                                        <Grid xs={12} sm={12} md={12} sx={{ mt: 2, px: 1 }}>
                                            <TextField
                                                id="text"
                                                name="text"
                                                label="متن"
                                                value={formik.values.text}
                                                onChange={formik.handleChange}
                                                error={formik.touched.text && Boolean(formik.errors.text)}
                                                helperText={formik.touched.text && formik.errors.text}
                                                dir="rtl"
                                                fullWidth
                                                size="small"
                                                color="danger"
                                                variant="outlined"
                                                multiline
                                                rows={6}
                                            />                                         </Grid>
                                    </Grid>
                                </CardContent>

                                <CardActions sx={{ alignItems: "end", flexDirection: "column" }} >

                                    <ReCAPTCHA
                                        ref={captcha}
                                        sitekey={process.env.REACT_APP_recaptcha}
                                        theme={mode ? "light" : "dark"}
                                        hl="fa"
                                        onChange={(value) => {
                                            formik.setFieldValue(
                                                "recaptcha",
                                                value
                                            );
                                        }} />


                                    {formik.errors.recaptcha &&
                                        formik.touched.recaptcha && (
                                            <Typography
                                                variant="caption"
                                                color="error"
                                            >
                                                {formik.errors.recaptcha}
                                            </Typography>
                                        )}

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