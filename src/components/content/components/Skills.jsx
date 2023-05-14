import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomDivider from './CustomDivider';


import html from '../../../assets/icons/html5-original.svg';
import css from '../../../assets/icons/css3-original.svg';
import js from '../../../assets/icons/javascript-original.svg';
import react from '../../../assets/icons/react-original.svg';
import gitimg from '../../../assets/icons/git-original.svg';
import mui from '../../../assets/icons/mui.svg';
import { useEffect } from 'react';
import { useState } from 'react';
import { SiLetsencrypt } from 'react-icons/si';
import CircularProgress from '@mui/material/CircularProgress';


// function LinearProgressWithLabel(props) {
//     return (
//         <Box sx={{display:"flex" }}>

//             <Box sx={{ width: '100%', mr: 1 }}>
//                 <LinearProgress variant="determinate" sx={{
//                     height: 15, borderRadius: "50px",
//                     "& .muirtl-qd76qg-MuiLinearProgress-bar1": {
//                         backgroundColor: props.bgcolor
//                     }

//                 }} {...props} />
//             </Box>

//             <Box sx={{ minWidth: 35, mx: 2 }}>
//                     <Typography variant="body2" color="text.secondary">{`${Math.round(
//                         props.value,
//                     )}%`}</Typography>
//                 </Box>
//         </Box>
//     );
// }
function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex', m: 2 }}>
            <CircularProgress size={180} variant="determinate" {...props} disableShrink={false} sx={{ color: `${props.bgcolor}` }} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: "column"
                }}
            >
                <Typography variant="caption" component="div" color="text.secondary" sx={{fontSize:"larger"}}>
                    {`${Math.round(props.value)}%`}
                </Typography>
                {props.data ? <Box component="img" src={props.data} sx={{ height: 50 }}></Box> : null}
            </Box>
        </Box>
    );
}


const Skills = () => {

    const [vhtml, setvHtml] = useState(0);
    const [vjavascript, setvJavascript] = useState(0);
    const [vcss, setvCss] = useState(0);
    const [vreactJs, setvReactJs] = useState(0);
    const [vgit, setvGit] = useState(0);
    const [vmui, setvmui] = useState(0);


    useEffect(() => {

        const vhtml_timer = setInterval(() => {
            setvHtml((value) => {
                const diff = Math.random() * 10;
                if (value > 86) {
                    console.log("cleared");
                    clearInterval(vhtml_timer);
                };
                return Math.min(value + diff, 86);
            });
        }, 200);

        const vjavascript_timer = setInterval(() => {
            setvJavascript((value) => {
                const diff = Math.random() * 10;
                if (value > 75) {
                    console.log("cleared");
                    clearInterval(vjavascript_timer);
                };
                return Math.min(value + diff, 75);
            });
        }, 200);

        const vcss_timer = setInterval(() => {
            setvCss((value) => {
                const diff = Math.random() * 10;
                if (value > 83) {
                    console.log("cleared");
                    clearInterval(vcss_timer);
                };
                return Math.min(value + diff, 83);
            });
        }, 200);



        const vgit_timer = setInterval(() => {
            setvGit((value) => {
                const diff = Math.random() * 10;
                if (value >= 30) {
                    console.log("cleared");
                    clearInterval(vgit_timer);
                };
                return Math.min(value + diff, 30);
            });
        }, 200);

        const vreactJs_timer = setInterval(() => {
            setvReactJs((value) => {
                const diff = Math.random() * 10;
                if (value > 68) { clearInterval(vreactJs_timer) };
                return Math.min(value + diff, 68);
            });
        }, 200);

        const vmui_timer = setInterval(() => {
            setvmui((value) => {
                const diff = Math.random() * 10;
                if (value > 85) { clearInterval(vmui_timer) };
                return Math.min(value + diff, 85);
            });
        }, 200);


    }, []);



    return (
        <Box sx={{ width: '90%', m: "auto", border: "5px solid purple", mt: 1, py: 1, borderRadius: "50px", mb: 2, backgroundColor: "rgba(94, 94, 94, 0.431)", display: "flex", justifyContent: "space-around", flexWrap: "wrap" }} >

            {/* <CustomDivider color={"skyblue"} textAlign={"left"} cimg={html}>
                <Typography sx={{ color: "black" }}>HTML</Typography>
            </CustomDivider> */}

            {/* <CustomDivider color={"#5a6bed"} textAlign={"left"} cimg={css}>
                <Typography sx={{ color: "black" }}>CSS</Typography>
            </CustomDivider> */}
            {/* 
            <CustomDivider color={"orange"} textAlign={"left"} cimg={js}>
                <Typography sx={{ color: "black" }}>JavaScript</Typography>
            </CustomDivider> */}
            {/* 
            <CustomDivider color={"#5f5aed"} textAlign={"left"} cimg={react}>
                <Typography sx={{ color: "black" }}>React</Typography>
            </CustomDivider> */}
            {/* 
            <CustomDivider color={"#912fed"} textAlign={"left"} cimg={gitimg}>
                <Typography sx={{ color: "black" }}>Git</Typography>
            </CustomDivider> */}


            <Box sx={{}}>
                <CircularProgressWithLabel value={vcss} bgcolor={"#80aed0"} data={css} />
                <CircularProgressWithLabel value={vhtml} bgcolor={"#e44d26"} data={html} />

            </Box>

            <Box sx={{}}>
                <CircularProgressWithLabel value={vreactJs} bgcolor={"blue"} data={react} />
                <CircularProgressWithLabel value={vjavascript} bgcolor={"#ffa500"} data={js} />

            </Box>

            <Box sx={{}}>
                <CircularProgressWithLabel value={vmui} bgcolor={"#000000"} data={mui} />
                <CircularProgressWithLabel value={vgit} bgcolor={"#912fed"} data={gitimg} />
            </Box>



        </Box>
    )
};

export default Skills;