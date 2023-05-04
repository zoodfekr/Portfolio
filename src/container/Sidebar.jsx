import { Avatar, Box, Divider, Fab, Hidden, Typography } from "@mui/material";
import VerticalTabs from "../components/sidebar/Sidebartabs";
import { FaReact } from "react-icons/fa";
import Grid from "@mui/material/Unstable_Grid2";
import SidebarContent from "../components/sidebar/SidebarContent";
import { useState } from "react";
import SidebarDrawer from "../components/drawer/SidebarDrawer";
import DrawerActionButton from "../components/drawer/DrawerActionButton";


const Sidebar = () => {
    return (
        <Grid
            xs={0}
            sm={0}
            md={3}
            lg={2}
            xl={2}
          
        >
            {/* float button */}
            <DrawerActionButton></DrawerActionButton>
            {/* static sidebar */}
            <SidebarContent ></SidebarContent>
            {/* drawer sidebar */}
            <SidebarDrawer></SidebarDrawer>
        </Grid>
    )
}
export default Sidebar;