import * as React from 'react';
import { Box, Grid, Slide, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import CustomDivider from "./components/CustomDivider";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Resume = () => {

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setTimeout(() => setChecked(true), 250)
        return () => setChecked(false);
    }, []);

    return (

        <Box sx={{
            backgroundColor: "#B4B4B4",
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
                    <CustomDivider color={"red"} textAlign="center"> رزومه من</CustomDivider>
                </Box>
            </Slide>


            <Grid container>

                <Grid xs={12} sm={6} sx={{ border: "1px solid red", height: "50vh" }}>

                </Grid>
                <Grid xs={12} sm={6} sx={{ border: "1px solid green", height: "50vh" }}>


                </Grid>


            </Grid>



        </Box>
    )
};
export default Resume;