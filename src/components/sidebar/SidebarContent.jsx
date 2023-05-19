import { Box, Divider } from "@mui/material";
import Sidebartabs from "./Sidebartabs";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SIdebarFooter";
import { useContext } from "react";
import Appcontext from "../../context/Context";

const SidebarContent = () => {

    const { theme } = useContext(Appcontext);

    return (
        <Box sx={{
            justifyContent: "center",
            textAlign: "center",
            pt: 2,
            height: "100vh",
            overflowX: "hidden",
            overflowY: "auto",
            backgroundColor: theme.palette.primary.main,
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