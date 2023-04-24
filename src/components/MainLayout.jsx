import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Typography, Box, Divider, Avatar } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "./Sidebar";
import { theme } from "./ui/theme";
import { useState } from "react";
import Contents from './Contents';

//NOTE Create RTL Cache
const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Helmet>
                        <title> ramin zoodfekr portfolio </title>
                    </Helmet>
                    {/* Grid System */}
                    <Grid container sx={{ height: "100vh" }} >

                        <Grid
                            xs={0}
                            sm={0}
                            md={3}
                            lg={2}
                            xl={2}
                            sx={{}}
                        >
                            <Sidebar value={value} handleChange={handleChange}></Sidebar>
                        </Grid>

                        <Grid
                            xs={12}
                            sm={12}
                            md={9}
                            lg={10}
                            xl={10}
                            sx={{ backgroundColor: "secondary.main" }}
                        >
             
                            <Contents value={value} sx={{ height: 250, border: "2px solid red" }}> </Contents>

                        </Grid>

                    </Grid>

                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MainLayout;
