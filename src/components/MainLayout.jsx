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

//NOTE Create RTL Cache
const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children }) => {

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
                            <Sidebar value={value}  handleChange={handleChange}></Sidebar>
                        </Grid>

                        <Grid
                            xs={12}
                            sm={12}
                            md={9}
                            lg={10}
                            xl={10}
                            sx={{ backgroundColor: "secondary.main" }}
                        >
                            <Typography
                                variant="h5"
                                sx={{ textAlign: "center" }}
                            >
                                محتوای اصلی
                            </Typography>
                        </Grid>

                    </Grid>

                    {children}
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MainLayout;
