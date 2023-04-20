import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SiHomeadvisor } from "react-icons/si";
import { TbMessages } from "react-icons/tb";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsFillPersonBadgeFill, BsPersonWorkspace } from "react-icons/bs";


function TabPanel({value,handleChange}) {

  const iconstyle = { fontSize: "25px" };
  const tabclass = ' d-flex justify-content-start px-5';

  function tabprop(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{}}  >
      <Tabs 
      sx={{ background: "dark" }} 
      orientation="vertical" 
      variant="scrollable" 
      value={value}
      onChange={handleChange}
      TabIndicatorProps={{
        style: {
          backgroundColor: "red",
          border:"5px solid red"
        }
      }}
    
      >

        <Tab
          className={tabclass}
          label="صفحه اصلی"
          icon={<SiHomeadvisor style={iconstyle}></SiHomeadvisor>}
          iconPosition='start'
          {...tabprop(0)}
        />

        <Tab
          className={tabclass}
          label="درباره من"
          icon={<BsFillPersonBadgeFill style={iconstyle}></BsFillPersonBadgeFill>}
          iconPosition='start'
          {...tabprop(1)}
           />

        <Tab
          className={tabclass}
          label=" نمونه کارها"
          icon={<BsPersonWorkspace style={iconstyle}></BsPersonWorkspace>}
          iconPosition='start'
          {...tabprop(2)}/>

        <Tab
          className={tabclass}
          label=" ارتباط بامن"
          icon={<TbMessages style={iconstyle}></TbMessages>}
          iconPosition='start' 
          {...tabprop(3)}/>

        <Tab
          className={tabclass}
          label="  اساتید من"
          icon={<FaChalkboardTeacher style={iconstyle}></FaChalkboardTeacher>}
          iconPosition='start' 
          {...tabprop(4)}/>
      </Tabs>
    </Box>
  );
}

export default TabPanel;


