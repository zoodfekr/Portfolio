import { Avatar, Typography } from "@mui/material";
import { RandomReveal } from "react-random-reveal";
import { useState } from "react";
import Themebutton from "../../components/content/components/Themebutton";
const SidebarHeader = () => {
    const [start, setStart] = useState(false);
    return (
        <>

            <Themebutton></Themebutton>


            <Avatar
                src={require("../../assets/ramin.jpg")}
                sx={{
                    height: 200, width: 200, position: "relative", margin: "auto",
                    display: { xs: "none", sm: "none", md: "block", lg: "block", xl: "block" }
                }}
            ></Avatar>


            <Typography variant="h6" color="text.primary"  >
                رامین زودفکر
                {/* <RandomReveal
                    isPlaying
                    duration={10}
                    revealDuration={1.6}
                    characterSet={persian}
                    characters=" رامین زودفکر"
                    onComplete={() => setStart(true)}
                /> */}

            </Typography>
            <Typography variant="caption" color="text.primary" className="">
                توسعه دهنده فرانت اند
            </Typography>
        </>
    )
};
export default SidebarHeader;