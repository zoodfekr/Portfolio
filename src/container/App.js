import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Typography, Box, Divider, Avatar, Drawer } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "./Sidebar";
import { theme } from "../container/theme";
import { useState } from "react";
import Contents from '../container/Contents';
import Appcontext from "../context/Context";

const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});


function App() {

    const [pagenumber, setpagenumber] = useState(0);
    const [drawershow, setdrawershow] = useState(false);

    const handleChange = (event, newValue) => {
        setpagenumber(newValue);
    };


    return (
        <Appcontext.Provider
            value={{
                pagenumber, setpagenumber, handleChange, drawershow, setdrawershow,theme
            }}>
            <CacheProvider value={cacheRTL}>
                <ThemeProvider theme={theme}>
                    <HelmetProvider>

                        <Helmet>
                            <title> ramin zoodfekr </title>
                        </Helmet>

                        {/* Grid System */}
                        <Grid container sx={{ height: "100vh" }} >
                            <Sidebar></Sidebar>
                            <Contents> </Contents>
                        </Grid>

                    </HelmetProvider>
                </ThemeProvider>
            </CacheProvider>
        </Appcontext.Provider>
    );
}

export default App;
