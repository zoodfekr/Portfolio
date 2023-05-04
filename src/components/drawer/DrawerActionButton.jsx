import { Box, Fab } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import { red } from '@mui/material/colors';
import { useContext } from "react";
import Appcontext from "../../context/Context";

const DrawerActionButton = () => {

    const { setdrawershow, drawershow } = useContext(Appcontext);

    return (

        <Box sx={{
            position:"absolute",
            display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none"
            }
        }}>
            <Fab color="secondary" aria-label="menu" size="medium" onClick={() => setdrawershow(!drawershow)}
                sx={{
                    m: 2,
                    backgroundColor: "red",
                }}>
                <AiOutlineMenu />
            </Fab>
        </Box>
    )
};

export default DrawerActionButton;