import { Box, Chip, Divider, Slide, Typography } from "@mui/material";
import { useEffect, useState } from "react";


const CustomDivider = ({ children, color, icon, textAlign, cimg, linecolor }) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setTimeout(() => setChecked(true), 250)
        return () => setChecked(false);
    }, []);

    return (
        <>
            <Slide direction="down" in={checked}>
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
                            {children}
                            {{ cimg } ? <Box component="img" src={cimg} sx={{ height: 30 }}></Box> : null}
                            {{ icon }.length > 1 ? null : <Box sx={{ ml: 1, fontSize: "larger" }}>{icon}</Box>}
                            
                        </Typography>} />
                </Divider>
            </Slide>
        </>
    )
};
export default CustomDivider;