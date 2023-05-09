import { Box, Divider, IconButton, Typography } from "@mui/material";
import { GoMarkGithub } from "react-icons/go";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

const Socialmedia = () => {

    const socialmedia_data = [
        { aria_label: "Github", href: "https://github.com/zoodfekr", text: "Githab", icon: <GoMarkGithub style={{ fontSiz: "25px !important" }}></GoMarkGithub> },
        { aria_label: "Instagram", href: "https://github.com/zoodfekr", text: "Instagram", icon: <BsInstagram style={{ fontSiz: "25px !important" }}></BsInstagram> },
        { aria_label: "Telegram", href: "https://github.com/zoodfekr", text: "Telegram", icon: <FaTelegramPlane style={{ fontSiz: "25px !important" }}></FaTelegramPlane> },
        { aria_label: "Whatsapp", href: "https://github.com/zoodfekr", text: "Whatsapp", icon: <SiWhatsapp style={{ fontSiz: "25px !important" }}></SiWhatsapp> },
    ];

    return (
        <Box>
            {socialmedia_data.map((data => (
                < Box component="div" sx={{ display: "flex", flexDirection: "column", padding: "0 20px" }}>
                    <IconButton aria-label={data.aria_label} sx={{ borderRadius: "10px", p: "5" }}>
                        <a className="Social_media"
                            href={data.href}
                            target="_blank"
                            rel="noopener noreferrer">
                            <Box>{data.icon}</Box>
                            <Typography sx={{ mx: 2, fontSize: "20px" }}>{data.text}</Typography>
                        </a>
                    </IconButton>
                </Box >
            )))
            }
        </Box>
    )
};

export default Socialmedia;
