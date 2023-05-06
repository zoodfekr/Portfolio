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

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>

            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" sx={{ height:8,borderRadius:"50px" }} {...props} />
            </Box>

            <Box sx={{ minWidth: 35, mx: 2 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>

        </Box>
    );
}

const Skills = () => {

    return (
        <Box sx={{ width: '80%', m: "auto", border: "5px solid purple", mt: 1, p: 5, borderRadius: "50px",mb:2 }}>

            <CustomDivider color={"skyblue"} textAlign={"left"} cimg={html}>
                <Typography sx={{ color: "black" }}>HTML</Typography>
            </CustomDivider>
            <LinearProgressWithLabel value={80} />

            <CustomDivider color={"#5a6bed"} textAlign={"left"} cimg={css}>
                <Typography sx={{ color: "black" }}>CSS</Typography>
            </CustomDivider>
            <LinearProgressWithLabel value={80} />

            <CustomDivider color={"orange"} textAlign={"left"} cimg={js}>
                <Typography sx={{ color: "black" }}>JavaScript</Typography>
            </CustomDivider>
            <LinearProgressWithLabel value={80} />

            <CustomDivider color={"#5f5aed"} textAlign={"left"} cimg={react}>
                <Typography sx={{ color: "black" }}>React</Typography>
            </CustomDivider>
            <LinearProgressWithLabel value={80} />

            <CustomDivider color={"#912fed"} textAlign={"left"} cimg={gitimg}>
                <Typography sx={{ color: "black" }}>Git</Typography>
            </CustomDivider>
            <LinearProgressWithLabel value={80} />

        </Box>
    )
};

export default Skills;