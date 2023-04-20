import { Avatar, Box, Divider, Hidden, Typography } from "@mui/material";
import VerticalTabs from "./Sidebar_verticalstab";
import { FaReact } from "react-icons/fa";




const Sidebar = () => {
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

            <VerticalTabs></VerticalTabs>

            <Divider variant="middle" className="my-2" color={"whitesmoke"} />

            <Typography variant="h6" color="whitesmoke" className="">
                <FaReact className="react_icon" style={{ color: "skyblue" }}></FaReact>
                designed by <span style={{ color: "skyblue" }}><b>react</b></span>
            </Typography>

        </Box>
    )
}

export default Sidebar;