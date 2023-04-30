import { Avatar, Box, Divider, Drawer, Fab, Hidden, Typography } from "@mui/material";
import VerticalTabs from "./Sidebar_verticalstab";
import { FaReact } from "react-icons/fa";
import Grid from "@mui/material/Unstable_Grid2";
import SidebarContainer from "./SIdebarContainer";
import { AiOutlineMenu } from "react-icons/ai";
import { red } from '@mui/material/colors';
import { useState } from "react";


const Sidebar = ({ value, handleChange }) => {

    const [drawershow, setdrawershow] = useState(false);



    return (
        <Grid
            xs={0}
            sm={0}
            md={3}
            lg={2}
            xl={2}
        >

            <Box sx={{
                display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none"
                }
            }}>
                <Fab color="secondary" aria-label="menu" size="medium" onClick={() => setdrawershow(!drawershow)}
                    sx={{
                        m: 2,
                        backgroundColor: "red",
                    }}>
                    <AiOutlineMenu />
                </Fab>
            </Box>

            <SidebarContainer value={value} handleChange={handleChange}></SidebarContainer>

            {/* drawer */}
            <Drawer
                variant="temporary"
                open={drawershow}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 250
                    },
                    display: {
                        xs: "block",
                        sm: "block",
                        md: "none",
                        lg: "none",
                        xl: "none"
                    }
                }}
                onClose={() => setdrawershow(false)}
            >
                <SidebarContainer value={value} handleChange={handleChange} setdrawershow={setdrawershow}></SidebarContainer>
            </Drawer>

        </Grid>
    )
}

export default Sidebar;