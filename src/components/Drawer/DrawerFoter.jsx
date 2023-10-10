import { useContext } from "react";

import { Box,Typography,Drawer,Button
 } from "@mui/material";
 import SouthIcon from '@mui/icons-material/South';

import { moviesContext } from "../../context/moviesContext";

const DrawerFoter = () => {

    const {openDrawerFoter,setOpenDraweFoter} = useContext(moviesContext);

    const DrawerFoterItems = ['قوانین','پشتیبانی','به ما بپیوندین','تبلیغات','فروشگاه','اپلیکیشن']

    return(
     <Drawer
     open={openDrawerFoter}
     onClose={() => setOpenDraweFoter(false)}
     variant="temporary"
     anchor="bottom"
     sx={{
        "@ .MuiDrawer-paper": {
            width: "100%",
            height: '100%'
        }
     }}>
       <Box 
       sx={{width: '100%',height: '100vh',backgroundColor: '#262628' ,display: 'flex',justifyContent: 'center',alignItems: 'center'}}
       >
       <Box
       sx={{cursor: 'pointer'}}
       onClick={() => setOpenDraweFoter(false)}
       >
       <SouthIcon  sx={{color: 'whitesmoke' ,zIndex:1}}/>
       </Box>
        <Box sx={{display: 'flex',flexDirection: 'column', justifyContent: 'center',alignItems:'center'}} >
        {DrawerFoterItems.map((item,index) => (
        <Typography key={index} sx={{margin: '0 2rem',color: 'whitesmoke',':hover': {color: 'gray',cursor:'pointer'}}} variant='body2' >
         {item}
        </Typography> 
        ))}
        </Box>
       </Box>
     </Drawer>
    )
}

export default DrawerFoter;