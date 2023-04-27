import { Avatar, Box, Divider, Drawer, Fab, Hidden, Typography } from "@mui/material";
import VerticalTabs from "./Sidebar_verticalstab";
import { FaReact } from "react-icons/fa";
import Grid from "@mui/material/Unstable_Grid2";
import SidebarContent from "./SIdebarContent";
import { AiOutlineMenu } from "react-icons/ai";
import { red } from '@mui/material/colors';
import { useState } from "react";


const Sidebar = ({ value, handleChange }) => {

    const [drawershow, setdrawershow] =useState(false);

    const handleDrawerToggle = () => {
        setdrawershow(!drawershow)
    };

    return (
        <Grid
            xs={0}
            sm={0}
            md={3}
            lg={2}
            xl={2}
        >

            <Box sx={{
                display:{
                    xs:"block",
                    sm:"block",
                    md:"none",
                    lg:"none",
                    xl:"none"
                }
            }}>
                <Fab color="secondary" aria-label="menu" size="medium" onClick={handleDrawerToggle}
                    sx={{
                        m: 2,
                        backgroundColor: red[700],
                    }}>
                    <AiOutlineMenu />
                </Fab>
            </Box>

            <SidebarContent value={value} handleChange={handleChange}></SidebarContent>

            <Drawer
                variant="temporary"
                open={drawershow}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 300
                    },
                }}
                onClose={()=>setdrawershow(false)}
            >
                <SidebarContent value={value} handleChange={handleChange}></SidebarContent>
            </Drawer>

        </Grid>
    )
}

export default Sidebar;