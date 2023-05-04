import { Typography } from "@mui/material";
import { FaReact } from "react-icons/fa";
const SidebarFooter = () => {
    return (

        <Typography variant="h6" color="whitesmoke" className="">
            <FaReact className="react_icon mx-1" style={{ color: "skyblue" }}></FaReact>
            developed by react
        </Typography>
    )
};

export default SidebarFooter;