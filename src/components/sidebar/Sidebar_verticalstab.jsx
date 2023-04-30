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
import { grey } from "@mui/material/colors";

function Sidebar_verticalstab({ value, handleChange,setdrawershow }) {

  const iconstyle = { fontSize: "25px" };
  const tabclass = ' d-flex justify-content-start px-5';

  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  return (
    <Box sx={{}}  >
      <Tabs
      onClick={()=>setdrawershow(false)}
        sx={{
          background: "dark",
        }}
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "red",
            border: "5px solid red",
            borderRadius: "40px"
          }
        }}
      >

        <Tab
        onClick={()=>setdrawershow(false)}
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
          label="صفحه اصلی"
          icon={<SiHomeadvisor style={iconstyle}></SiHomeadvisor>}
          iconPosition='start'
          {...tabProps(0)}
        />

        <Tab
        onClick={()=>setdrawershow(false)}
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
          label="درباره من"
          icon={<BsFillPersonBadgeFill style={iconstyle}></BsFillPersonBadgeFill>}
          iconPosition='start'
          {...tabProps(1)}
        />

        <Tab
        onClick={()=>setdrawershow(false)}
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
          label=" نمونه کارها"
          icon={<BsPersonWorkspace style={iconstyle}></BsPersonWorkspace>}
          iconPosition='start'
          {...tabProps(2)} />

        <Tab
        onClick={()=>setdrawershow(false)}
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
          label=" ارتباط بامن"
          icon={<TbMessages style={iconstyle}></TbMessages>}
          iconPosition='start'
          {...tabProps(3)} />

        <Tab
        onClick={()=>setdrawershow(false)}
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
          label="  اساتید من"
          icon={<FaChalkboardTeacher style={iconstyle}></FaChalkboardTeacher>}
          iconPosition='start'
          {...tabProps(4)} />
      </Tabs>
    </Box >
  );
}

export default Sidebar_verticalstab;


