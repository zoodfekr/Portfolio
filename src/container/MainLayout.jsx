import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Typography, Box, Divider, Avatar, Drawer } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "../components/sidebar/Sidebar";
import { theme } from "../container/theme";
import { useState } from "react";
import Contents from '../components/content/Contents';

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


                        <Sidebar value={value} handleChange={handleChange}></Sidebar>


                        <Contents value={value} > </Contents>

                    </Grid>

                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MainLayout;
