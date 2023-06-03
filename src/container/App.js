import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "./Sidebar";
import { darktheme, lighttheme } from "../container/theme";
import { useState } from "react";
import Contents from '../container/Contents';
import Appcontext from "../context/Context";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});


function App() {

    const [pagenumber, setpagenumber] = useState(0);
    const [drawershow, setdrawershow] = useState(false);
    const [mode, setmode] = useState();

    const handleChange = (event, newValue) => {
        setpagenumber(newValue);
    };

    let theme = (mode ? lighttheme : darktheme);

    useEffect(() => {
        const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
        setmode(!darkModePreference.matches);
        darkModePreference.addEventListener("change", () => setmode(!darkModePreference.matches));
    }, [])


    return (
        <Appcontext.Provider value={{ pagenumber, setpagenumber, handleChange, drawershow, setdrawershow, theme, setmode, mode }}>

            <CacheProvider value={cacheRTL}>
                <ThemeProvider theme={theme}>
                    <HelmetProvider>

                        <Grid container sx={{ height: "100vh" }} >
                            <ToastContainer
                                position="bottom-right"
                                autoClose={2000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="colored"
                            />

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
