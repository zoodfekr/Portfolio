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


function TabPanel(props) {

  const iconstyle = { fontSize: "25px" };
  const tabclass = ' d-flex justify-content-start px-5';

  return (
    <Box sx={{}}  >
      <Tabs sx={{ background: "dark" }} orientation="vertical" variant="scrollable" className=''>

        <Tab className={tabclass} label="صفحه اصلی" icon={<SiHomeadvisor style={iconstyle}></SiHomeadvisor>} iconPosition='start' />

        <Tab className={tabclass} label="درباره من" icon={<BsFillPersonBadgeFill style={iconstyle}></BsFillPersonBadgeFill>} iconPosition='start' />

        <Tab className={tabclass} label=" نمونه کارها" icon={<BsPersonWorkspace style={iconstyle}></BsPersonWorkspace>} iconPosition='start' />

        <Tab className={tabclass} label=" تماس بامن" icon={<TbMessages style={iconstyle}></TbMessages>} iconPosition='start' />

        <Tab className={tabclass} label="  اساتید من" icon={<FaChalkboardTeacher style={iconstyle}></FaChalkboardTeacher>} iconPosition='start' />
      </Tabs>
    </Box>
  );
}

export default TabPanel;


