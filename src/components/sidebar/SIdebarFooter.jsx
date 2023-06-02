import { Box, Divider, Typography } from "@mui/material";
import { FaReact } from "react-icons/fa";
import Socialmedia from "./Socialmedia";
import Appcontext from "../../context/Context";
import { useContext } from "react";



const SidebarFooter = () => {


    const { theme } = useContext(Appcontext);

    return (
        <Box >

            {/* socialmedia */}
            <Socialmedia></Socialmedia>


            <Divider variant="middle" className="my-2" color={"whitesmoke"} />

            <Box sx={{ mt: 4 }} >
                <Typography variant="h1" color="text.primary"  >
                    <FaReact className="react_icon mx-1 R-rotate" style={{ color: theme.palette.lightBlue.main}}></FaReact>
                </Typography>
            </Box>



        </Box>
    )
};

export default SidebarFooter;