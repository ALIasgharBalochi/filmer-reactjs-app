import React,{useContext} from 'react'


import { Button,Menu,MenuItem } from '@mui/material';

import { moviesContext } from '../../context/moviesContext';
const NavbarSmal = ({openedGener,handleClickganer,handleClose}) => {

  const {openGener} = useContext(moviesContext)
  return (
    <div className='navbar-response'>
        <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
            <p className='p-navbar'>
             فیلم          

            </p>
            <p className='p-navbar'>
             سریال
            </p>
            <Button
          variant='text'
          id="button-openMenu-gener-navbar"
           aria-controls={openedGener ? 'menu-gener' : undefined}
           aria-haspopup="true"
            aria-expanded={openedGener ? 'true' : undefined}
           onClick={handleClickganer}
           sx={{color: 'whitesmoke',display: 'flex',justifyContent: 'center',alignItems: 'center'}}

          >
          <p className='p-navbar'>
          ژانرها
            <i className='material-symbols-rounded'>
            expand_more
            </i>
          </p>
           </Button>
              <Menu
            id="menu-gener"
            aria-labelledby="button-openMenu-gener-navbar"
            anchorEl={openGener}
            open={openedGener}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
              <MenuItem sx={{direction: 'rtl'}} onClick={handleClose}>اکشن</MenuItem>
              <MenuItem sx={{direction: 'rtl'}} onClick={handleClose}>درام</MenuItem>
              <MenuItem sx={{direction: 'rtl'}} onClick={handleClose}>کمدی </MenuItem>
              <MenuItem sx={{direction: 'rtl'}} onClick={handleClose}>علمی تخیلی</MenuItem>
              <MenuItem sx={{direction: 'rtl'}} onClick={handleClose}>ترسناک </MenuItem>
              <MenuItem sx={{direction: 'rtl'}} onClick={handleClose}>ماجرا جویی</MenuItem>
              <MenuItem sx={{direction: 'rtl'}} onClick={handleClose}>انیمیشن</MenuItem>
              <MenuItem sx={{direction: 'rtl'}} onClick={handleClose}>تاریخی </MenuItem>
              <MenuItem sx={{direction: 'rtl'}} onClick={handleClose}>مستند</MenuItem>
          </Menu>
            <p className='p-response'>
             خرید اشتراک
             <i className='material-symbols-rounded'>
             theaters
             </i>
            </p>
        </div>
    </div>
  )
}

export default NavbarSmal;
