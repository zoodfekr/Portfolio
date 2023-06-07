import { Typography } from "@mui/material";
import { MdArrowBackIosNew } from "react-icons/md";

const Devinfo = ({children}) => {
    return (
        <Typography  className="mr-2" dir="rtl" color={"text.primary"} fontFamily={"vazir"} fontSize={20}
            sx={{ mt: 2 , mr:2 }}>
            <MdArrowBackIosNew color="red" className="mx-2"></MdArrowBackIosNew>
            {children}
        </Typography>
    )
};
export default Devinfo;