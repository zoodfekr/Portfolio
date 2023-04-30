import { Avatar, Typography } from "@mui/material";

const SidebarHeader = () => {
    return (
        <>
            <Avatar
                src={require("../../assets/ramin.jpg")}
                sx={{
                    height: 200, width: 200, position: "relative", margin: "auto",
                    display: { xs: "none", sm: "none", md: "block", lg: "block", xl: "block" }
                }}
            ></Avatar>


            <Typography variant="h6" color="whitesmoke" className="" >
                رامین زودفکر
            </Typography>
            <Typography variant="caption" color="whitesmoke" className="">
                توسعه دهنده فرانت اند
            </Typography>
        </>
    )
};
export default SidebarHeader;