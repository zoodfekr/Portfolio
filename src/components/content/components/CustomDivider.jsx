import { Box, Chip, Divider, Typography } from "@mui/material";
const CustomDivider = ({ children, color, icon, textAlign, cimg, linecolor }) => {
    return (
        <Divider textAlign={textAlign ? textAlign : "right"} variant="middle" sx={{
            mt: 3, "&.MuiDivider-root::before,&.MuiDivider-root::after": {
                border: `1px solid ${linecolor}`
            }
        }}>
            <Chip
                sx={{ background: color }}
                label={<Typography
                    variant="body1"
                    color="white"
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    {{ cimg } ? <Box component="img" src={cimg} sx={{ height: 30 }}></Box> : null}
                    {{ icon }.length > 1 ? null : <Box sx={{ ml: 1, fontSize: "larger" }}>{icon}</Box>}
                    {children}
                </Typography>} />
        </Divider>
    )
};
export default CustomDivider;