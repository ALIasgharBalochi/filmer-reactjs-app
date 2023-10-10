import React,{useContext} from 'react';

import { moviesContext } from '../../context/moviesContext';


import NavbarLarg from './NavbarLarg';
import NavbarSmal from './NavbarSmal';
const Navbar = () => {

  const {openGener,setOpenGener} = useContext(moviesContext)

  const openedGener = Boolean(openGener);


  const handleClickganer = (event) => {
    setOpenGener(event.currentTarget);
  };

  const handleClose = () => {
    setOpenGener(null);
  };

  return (
    <>
     <NavbarLarg openedGener={openedGener} handleClickganer={handleClickganer} handleClose={handleClose} />
     <NavbarSmal openedGener={openedGener} handleClickganer={handleClickganer} handleClose={handleClose}/>
    </>
  )
}

export default Navbar;
