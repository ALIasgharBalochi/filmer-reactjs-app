import React,{useContext} from 'react'

import { Box, Typography,Button,Menu,MenuItem } from '@mui/material';
import {Instagram,WhatsApp,GitHub,KeyboardArrowUp} from '@mui/icons-material';

import { moviesContext } from '../../context/moviesContext';

const MiniFoterSmal = ({openedMenu,handleOpenedMenu,handleMenuClose}) => {

    const {setOpenDraweFoter,openMenu} = useContext(moviesContext);

  return (
    <Box sx={{display: {
        xs: 'block',
        sm: 'block',
        md: 'none'
     }}}>
      <Box sx={{display: 'flex',flexDirection:' row',justifyContent: 'space-between',direction: 'rtl'}}>
        <Box sx={{width: 'auto',display: 'flex',flexDirection: 'row',color: 'gray',direction: 'rtl',fontSize: '.5rem',justifyContent: 'space-around',alignItems: 'flex-end',maxHeight: '20px'}}>
          <Typography sx={{':hover': {color: 'whitesmoke',cursor:'pointer'}}}  variant='body2'>
           <i className='material-symbols-rounded'>
               tv
           </i>
           تماشا با تلویزیون
         </Typography> 
         <Typography sx={{margin: '0 2rem',':hover': {color: 'whitesmoke',cursor:'pointer'}}} variant='body2' >
           تماس با ما 
         </Typography> 
         <Box onClick={() => setOpenDraweFoter(true)}>
         <Typography sx={{':hover': {color: 'whitesmoke',cursor:'pointer'},display: 'flex',justifyContent:'center',alignItems: 'center'}}  variant='body2' >
           بیشتر <KeyboardArrowUp/>
         </Typography> 
         </Box>
         </Box>
         <Box>
          <Button variant="text" 
           id='button-opened-menu'
           aria-controls={openedMenu ? 'menu' : undefined}
           aria-haspopup="true"
           aria-expanded={openedMenu ? 'true' : undefined}
           onClick={handleOpenedMenu}
           >
           <i style={{color: 'whitesmoke',fontSize: '1.5rem',cursor:'pointer'}} class="material-symbols-rounded">
            more_vert
           </i>
          </Button>
          <Menu
           id="menu"
           aria-labelledby="button-opened-menu"
           anchorEl={openMenu}
           open={openedMenu}
           onClose={handleMenuClose}
           anchorOrigin={{
           vertical: 'top',
           horizontal: 'left',
           }}
           transformOrigin={{
           vertical: 'top',
           horizontal: 'left',
          }}
          sx={{display: 'flex',justifyContent: 'flex-end'}}
         >
           <MenuItem sx={{backgroundColor: '#262628',':hover': {backgroundColor:'#3a3a44'},color: 'whitesmoke',display: 'flex',justifyContent: 'flex-end'}} onClick={handleMenuClose}>اینستا گرام <Instagram/></MenuItem>
           <MenuItem sx={{backgroundColor: '#262628',':hover': {backgroundColor:'#3a3a44'},color: 'whitesmoke',display: 'flex',justifyContent: 'flex-end'}} onClick={handleMenuClose}>واتساپ <WhatsApp/></MenuItem>
           <MenuItem sx={{backgroundColor: '#262628',':hover': {backgroundColor: '#3a3a44'},color: 'whitesmoke',display: 'flex',justifyContent: 'flex-end'}} onClick={handleMenuClose}>گیت هاب <GitHub/></MenuItem>
         </Menu>
         </Box>
        </Box>
      </Box>
  )
}

export default MiniFoterSmal;
