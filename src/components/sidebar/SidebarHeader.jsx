import { Avatar, Typography } from "@mui/material";
import { useState } from "react";
import Themebutton from "../../components/content/components/Themebutton";
const SidebarHeader = () => {
    const [start, setStart] = useState(false);
    return (
        <>

            <Themebutton></Themebutton>
            <Avatar
                src={require("../../assets/ramin2.jpeg")}
                sx={{
                    height: 200, width: 200, position: "relative", margin: "auto",
                    display: { xs: "none", sm: "none", md: "block", lg: "block", xl: "block" }
                }}
            ></Avatar>

            <Typography variant="caption" color="text.primary" className="">
                توسعه دهنده فرانت اند
            </Typography>
        </>
    )
};
export default SidebarHeader;