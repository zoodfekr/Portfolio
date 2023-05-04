import { Drawer } from '@mui/material'
import SidebarContent from '../sidebar/SidebarContent';
import { useContext } from 'react';
import Appcontext from '../../context/Context';
const SidebarDrawer = () => {

    const { setdrawershow, drawershow } = useContext(Appcontext);

    return (
        <Drawer
            onClose={() => setdrawershow(false)}
            variant="temporary"
            open={drawershow}
            sx={{
                '& .MuiDrawer-paper': {
                    width: 250
                },
                display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none"
                }
            }}
        >
            <SidebarContent></SidebarContent>
        </Drawer>
    )
};

export default SidebarDrawer;