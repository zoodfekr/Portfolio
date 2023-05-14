import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { SiHomeadvisor } from "react-icons/si";
import { TbMessages } from "react-icons/tb";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsFillPersonBadgeFill, BsPersonWorkspace,BsPersonBoundingBox } from "react-icons/bs";



import { grey } from "@mui/material/colors";
import { useContext } from 'react';
import Appcontext from '../../context/Context';


function Sidebartabs() {

  const { pagenumber, handleChange, setdrawershow } = useContext(Appcontext);

  const iconstyle = { fontSize: "25px" };
  const tabclass = ' d-flex justify-content-start px-5';

  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  const tabsdata = [
    { label: "صفحه اصلی", icon: < SiHomeadvisor style={iconstyle} ></SiHomeadvisor>, ...tabProps(0) },
    { label: "درباره من ", icon: < BsFillPersonBadgeFill style={iconstyle} ></BsFillPersonBadgeFill>, ...tabProps(1) },
    { label: " رزومه من ", icon: < BsPersonBoundingBox style={iconstyle} ></BsPersonBoundingBox>, ...tabProps(2) },
    { label: "نمونه کارها ", icon: < BsPersonWorkspace style={iconstyle} ></BsPersonWorkspace>, ...tabProps(3) },
    { label: "ارتباط با من ", icon: < TbMessages style={iconstyle} ></TbMessages>, ...tabProps(4) },
    { label: " اساتید من ", icon: < FaChalkboardTeacher style={iconstyle} ></FaChalkboardTeacher>, ...tabProps(5) },
  ]

  return (
    <Box >
      <Tabs
        className='ramintest'
        onClick={() => setdrawershow(false)}
        sx={{
          background: "dark",
        }}
        orientation="vertical"
        variant="scrollable"
        value={pagenumber}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "red",
            border: "5px solid red",
            borderRadius: "40px"
          }
        }}
      >
        {tabsdata.map((data => (
          <Tab
            onClick={() => setdrawershow(false)}
            sx={{
              "&.MuiTab-root": {
                backgroundColor: grey[800],
                borderRadius: 2,
                my: 0.25,
                mx: 1,
                minHeight: 0,
              },
              "&.Mui-selected": {
                color: "red",
              }
            }}
            className={tabclass}
            label={data.label}
            icon={data.icon}
            iconPosition='start'
            {...tabsdata}
          >
          </Tab>
        )))}
      </Tabs>

    </Box >
  );
}

export default Sidebartabs;


{/* <div id="one" class="corner"></div>
<div id="two" class="corner"></div> */}