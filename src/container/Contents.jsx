import * as React from 'react';
import Typography from '@mui/material/Typography';
import TabPanel from './TabPanel';
import Grid from "@mui/material/Unstable_Grid2";
import { useContext } from 'react';
import Appcontext from '../context/Context';
import { Box } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { grey } from '@mui/material/colors';
import Typed from 'react-typed';
import Homepage from '../components/content/Homepage';
import Aboutpage from '../components/content/Aboutpage';
import Works from '../components/content/Works';


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
        <SwipeableViews
          axis={theme.direction === 'ltr' ? 'x-reverse' : 'x'}
          index={pagenumber}
          onChangeIndex={handleChange}
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
            <Typography sx={{ textAlign: "center" }}>
              ارتباط با من
            </Typography>
          </TabPanel>
          <TabPanel value={pagenumber} index={4}>
            <Typography sx={{ textAlign: "center" }}>
              اساتید من
            </Typography>
          </TabPanel>


        </SwipeableViews>

      </Grid >
    </>
  );
};

export default Contents;


