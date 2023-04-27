import { Avatar, Box, Divider, Drawer, Hidden, Typography } from "@mui/material";
import VerticalTabs from "./Sidebar_verticalstab";
import { FaReact } from "react-icons/fa";
import Grid from "@mui/material/Unstable_Grid2";


const SidebarContent = ({ value, handleChange }) => {
    return (

        <Box className="bg-dark h-100 " sx={{
            justifyContent: "center",
            textAlign: "center",
            pt: 2
        }}>
            <Hidden mdDown>
                <Avatar
                    className=""
                    sx={{ height: 200, width: 200, position: "relative", margin: "auto" }}
                    src={require("../assets/ramin.jpg")}
                ></Avatar>
            </Hidden>

            <Typography variant="h6" color="whitesmoke" className="" >
                رامین زودفکر
            </Typography>
            <Typography variant="caption" color="whitesmoke" className="">
                توسعه دهنده فرانت اند
            </Typography>

            <Divider variant="middle" className="my-2" color={"whitesmoke"} />

            <VerticalTabs value={value} handleChange={handleChange}></VerticalTabs>


            <Divider variant="middle" className="my-2" color={"whitesmoke"} />

            <Typography variant="h6" color="whitesmoke" className="">
                <FaReact className="react_icon mx-1" style={{ color: "skyblue" }}></FaReact>
                designed by react
            </Typography>

        </Box>

    )
}

export default SidebarContent;