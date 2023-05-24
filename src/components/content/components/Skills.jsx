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
import Tooltip from '@mui/material/Tooltip';
import Appcontext from '../../../context/Context';
import { useContext } from 'react';


function CircularProgressWithLabel(props) {

const {mode} = useContext(Appcontext)


    return (
        <Box sx={{ position: 'relative', display: 'inline-flex', m: 2 }}>
            <CircularProgress size={130} variant="determinate" {...props} disableShrink={false} sx={{ color: `${props.bgcolor}`,backgroundColor:`${mode ? "whitesmoke" :  "grey" }` }} />
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
                    flexDirection: "column",
                }}
            >
                    <Typography variant="caption" component="div" color="text.primary" sx={{ fontSize: "larger" }}>
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
        <Box sx={{
            width: '95%',
            m: "auto",
            // border: "1px solid purple",
            mt: 1, py: 1,
            borderRadius: "50px",
            mb: 2,
            // backgroundColor: "rgba(94, 94, 94, 0.431)",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap"
        }} >

            <Box sx={{justifyContent:"center",display:"flex",flexWrap:"wrap"}}>
                <CircularProgressWithLabel value={vcss} bgcolor={"#80aed0"} data={css} />
                <CircularProgressWithLabel value={vhtml} bgcolor={"#e44d26"} data={html} />
                <CircularProgressWithLabel value={vreactJs} bgcolor={"blue"} data={react} />
                <CircularProgressWithLabel value={vjavascript} bgcolor={"#ffa500"} data={js} />
                <CircularProgressWithLabel value={vmui} bgcolor={"#000000"} data={mui} />
                <CircularProgressWithLabel value={vgit} bgcolor={"#912fed"} data={gitimg} />
            </Box>

            {/* <Box sx={{}}>
  

            </Box>

            <Box sx={{}}>

            </Box> */}



        </Box>
    )
};

export default Skills;