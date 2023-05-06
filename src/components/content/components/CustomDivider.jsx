import { Box, Chip, Divider, Typography } from "@mui/material";
const CustomDivider = ({ children, color, icon, textAlign, cimg }) => {
    return (
        <Divider textAlign={textAlign ? textAlign : "right"} sx={{ mt: 3 }}>
            <Chip
                sx={{ background: color }}
                // icon={{ cimg } ?
                //     <Box component="img" src={cimg} sx={{ height: 30 }} style={{marginLeft:"15px"}} ></Box>
                //     : null}
                // icon={cimg}
                label={<Typography
                    variant="body1"
                    color="white"
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    {{ cimg } ? <Box component="img" src={cimg} sx={{height:30}}></Box> : null}
                    {{ icon }.length > 1 ? null : <Box sx={{ ml: 1, fontSize: "larger" }}>{icon}</Box>}
                    {children}
                </Typography>} />
        </Divider>
    )
};
export default CustomDivider;