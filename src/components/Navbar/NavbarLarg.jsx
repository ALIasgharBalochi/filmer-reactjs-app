import React,{useContext} from 'react'

import { ButtonGroup,Button,Menu,MenuItem } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import logo from '../../../public/vite.svg'

import { moviesContext } from '../../context/moviesContext';


const NavbarLarg = ({openedGener,handleClickganer,handleClose}) => {

  const {setOpenDrawerSearch,openGener} = useContext(moviesContext);

  const navigate = useNavigate();
  
  return (
    <div className='div-navbar'>
        <div style={{display: 'flex',flexDirection: 'row',marginRight: 'auto',alignItems: 'flex-end'}}>

           <img onClick={() => navigate('/')} src={logo} style={{width: '2rem', height: '2rem',margin: '0 2rem',cursor: 'pointer'}} alt='logo'/>
          <div onClick={() => setOpenDrawerSearch(true)}>
          <p  className='p-navbar'>
          جستو جو
          <i className='material-symbols-rounded'>search</i>
         </p>
          </div>
        </div>
        <div className='div-navbar-p-noned' style={{display: 'flex',flexDirection: 'row',alignItems: 'center'}}>
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
          <p className='p-navbar'>
            خرید اشتراک
            <i className='material-symbols-rounded'>
            theaters
            </i>
          </p>
          <div>
          <ButtonGroup variant='text' color='inherit'>
            <Button>ورود</Button>
            <Button>ثبت نام</Button>
          </ButtonGroup>
          </div>
        </div>
    </div>
  )
}

export default NavbarLarg;
