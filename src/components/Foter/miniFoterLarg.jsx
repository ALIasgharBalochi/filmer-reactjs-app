import React ,{useContext} from 'react'

import { Button,Menu,MenuItem } from '@mui/material';
import {Instagram,WhatsApp,GitHub,KeyboardArrowUp} from '@mui/icons-material';

import { moviesContext } from '../../context/moviesContext';

const MiniFoterLarg = ({foterItems,handleMenuClose,handleOpenedMenu,openedMenu}) => {


 const {openMenu} = useContext(moviesContext)

 return (
  <div className='div-miniFoter-container'>
    <div className='div-in-miniFoter-container-1'>
     <p className='p-miniFoter'>
        <i className='material-symbols-rounded'>
            tv
        </i>
        تماشا با تلویزیون
     </p> 
     {foterItems.map((item,index) => (
        <p key={index}>{item}</p>
     ))}
    </div>
    <div className='div-in-miniFoter-container'>
       <Button variant="text" 
        id='button-opened-menu'
        aria-controls={openedMenu ? 'menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openedMenu ? 'true' : undefined}
        onClick={handleOpenedMenu}
        sx={{color: 'gray'}}
        >
        شبکه های اجتماعی
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
    </div>
   </div>
  )
}

export default MiniFoterLarg;
