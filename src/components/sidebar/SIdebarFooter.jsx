import { Box, Divider, Typography } from "@mui/material";
import { FaReact } from "react-icons/fa";
import Socialmedia from "./Socialmedia";



const SidebarFooter = () => {
    return (
        <Box >

            {/* socialmedia */}
            <Socialmedia></Socialmedia>


            <Divider variant="middle" className="my-2" color={"whitesmoke"} />

            <Box sx={{ mt: 2 }}>
                <Typography variant="h6" color="whitesmoke" >
                    <FaReact className="react_icon mx-1" style={{ color: "skyblue" }}></FaReact>
                    developed by react
                </Typography>
            </Box>



        </Box>
    )
};

export default SidebarFooter;