import * as React from 'react';
import TabPanel from './TabPanel';
import Grid from "@mui/material/Unstable_Grid2";
import { useContext } from 'react';
import Appcontext from '../context/Context';

import { grey } from '@mui/material/colors';
import Homepage from '../components/content/Homepage';
import Aboutpage from '../components/content/Aboutpage';
import Works from '../components/content/Works';
import Certificates from '../components/content/Certificates';
import Contact from '../components/content/Contact';


function Contents() {

  const { pagenumber, handleChange, theme } = useContext(Appcontext);

  return (
    <>
      <Grid
        xs={12}
        sm={12}
        md={9}
        lg={10}
        xl={10}
        sx={{ backgroundColor: grey[900] }}
      >



          <TabPanel value={pagenumber} index={0}>
            <Homepage></Homepage>
          </TabPanel>

          <TabPanel value={pagenumber} index={1}>
            <Aboutpage></Aboutpage>
          </TabPanel>


          <TabPanel value={pagenumber} index={2}>
            <Works helmet={"نمونه کارها"}></Works>
          </TabPanel>


          <TabPanel value={pagenumber} index={3}>
            <Certificates helmet={"گواهینامه ها"}></Certificates>
          </TabPanel>

          <TabPanel value={pagenumber} index={4}>
            <Contact helmet={"ارتباط با من"} ></Contact>
          </TabPanel>




      </Grid >
    </>
  );
};

export default Contents;


