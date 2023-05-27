import { Box, Typography } from "@mui/material";
import Typed from 'react-typed';
import homebg from '../../assets/home_bg.jpg'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Links } from '../constants/link';
import { Helmet } from "react-helmet-async";

const Homepage = () => {


    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return (
        <Box sx={{
            backgroundImage: `url(${homebg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"


        }}>
            <Helmet>
                <title> صفحه اصلی </title>
            </Helmet>

            <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={Links} />
            <Typography variant="h2">
                <Typed
                    strings={['رامین زودفکر', 'Ramin zoodfekr']}
                    typeSpeed={100}
                    backSpeed={50}
                    startDelay={1000}
                // attr="placeholder"
                // loop
                >
                    <input type="text" className='glass' />
                </Typed>
            </Typography>
            <Typography variant='h4'>
                <Typed
                    strings={['توسعه دهنده فرانت اند', 'Front-End Developer']}
                    typeSpeed={100}
                    backSpeed={50}
                    startDelay={1000}
                    loop
                >
                    <input type="text" className='glass' />
                </Typed>
            </Typography>
        </Box>
    )
};

export default Homepage;