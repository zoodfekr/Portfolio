import { Avatar, Box, Divider, Typography } from "@mui/material";
import VerticalTabs from "./Sidebar_verticalstab";




const Sidebar = () => {
    return (
        <Box className="bg-dark h-100 " sx={{
            justifyContent: "center",
            textAlign: "center",
            pt: 2
        }}>

            <Avatar
                className=""
                sx={{ height: 200, width: 200, position: "relative", margin: "auto" }}
                src={require("../assets/ramin.jpg")}
            ></Avatar>

            <Typography variant="h6" color="whitesmoke" className="" >
                رامین زودفکر
            </Typography>
            <Typography variant="caption" color="whitesmoke" className="">
                توسعه دهنده فرانت اند
            </Typography>

            <Divider variant="middle" className="bg-danger border  my-2" style={{}} />

            <VerticalTabs></VerticalTabs>

        </Box>
    )
}

export default Sidebar;