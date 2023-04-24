import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';

function Contents({ value }) {

  return (
    <>
      <TabPanel value={value} index={0}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          صفحه اصلی
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          درباره من
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          نمونه کارها
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          ارتباط با من
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          اساتید من
        </Typography>
      </TabPanel>
    </>
  );
};

export default Contents;


