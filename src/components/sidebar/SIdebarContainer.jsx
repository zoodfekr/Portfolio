import { Avatar, Box, Divider, Drawer, Hidden, Typography } from "@mui/material";
import VerticalTabs from "./Sidebar_verticalstab";
import Grid from "@mui/material/Unstable_Grid2";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SIdebarFooter";


const SIdebarContainer = ({ value, handleChange, setdrawershow }) => {
    return (

        <Box className="bg-dark h-100 " sx={{
            justifyContent: "center",
            textAlign: "center",
            pt: 2
        }}>

            {/* SidebarHeader */}
            <SidebarHeader></SidebarHeader>

            <Divider variant="middle" className="my-2" color={"whitesmoke"} />

            {/* Sidebartabs */}
            <VerticalTabs value={value} handleChange={handleChange} setdrawershow={setdrawershow}></VerticalTabs>

            <Divider variant="middle" className="my-2" color={"whitesmoke"} />

            {/* SidebarFooter */}
            <SidebarFooter></SidebarFooter>

        </Box>

    )
}

export default SIdebarContainer;