import { Box, Divider, IconButton, Typography } from "@mui/material";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { AiFillSkype } from "react-icons/ai";
import { SiWhatsapp } from "react-icons/si";

const Socialmedia = () => {

    const socialmedia_data = [
        { aria_label: "Github", href: "https://github.com/zoodfekr", text: "Githab", icon: <GoMarkGithub style={{ fontSiz: "20px !important" }}></GoMarkGithub> },
        { aria_label: "skype", href: "https://join.skype.com/invite/MdJneJzpoQ6i", text: "skype", icon: <AiFillSkype style={{ fontSiz: "20px !important" }}></AiFillSkype> },
        { aria_label: "skype", href: "https://join.skype.com/invite/MdJneJzpoQ6i", text: "skype", icon: <BsLinkedin style={{ fontSiz: "20px !important" }}></BsLinkedin> },

    ];

    return (
        <Box sx={{display:"flex",justifyContent:"center"}}>
            {socialmedia_data.map((data => (
                < Box component="div" sx={{ display: "flex", flexDirection: "column", p:0,m:0 }}>
                    <IconButton aria-label={data.aria_label} sx={{ borderRadius: "10px" }}>
                        <a className="Social_media"
                            href={data.href}
                            target="_blank"
                            rel="noopener noreferrer">
                            <Box>{data.icon}</Box>
                            {/* <Typography sx={{ mx: 2, fontSize: "20px" }}>{data.text}</Typography> */}
                        </a>
                    </IconButton>
                </Box >
            )))
            }
        </Box>
    )
};

export default Socialmedia;
