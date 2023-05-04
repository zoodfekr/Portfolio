import { Box, Divider } from "@mui/material";
import Sidebartabs from "./Sidebartabs";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SIdebarFooter";
const SidebarContent = () => {
    return (
        <Box className="bg-dark" sx={{
            justifyContent: "center",
            textAlign: "center",
            pt: 2,
            height: "100vh",
            overflowX: "hidden",
            overflowY: "auto",
        }}>


            {/* SidebarHeader */}
            <SidebarHeader></SidebarHeader>

            <Divider variant="middle" className="my-2" color={"whitesmoke"} />

            {/* Sidebartabs */}
            <Sidebartabs ></Sidebartabs>

            <Divider variant="middle" className="my-2" color={"whitesmoke"} />

            {/* SidebarFooter */}
            <SidebarFooter></SidebarFooter>

        </Box>

    )
}

export default SidebarContent;