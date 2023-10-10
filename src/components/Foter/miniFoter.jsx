
import React,{useContext} from 'react'

import { moviesContext } from '../../context/moviesContext';

import MiniFoterLarg from './miniFoterLarg';
import MiniFoterSmal from './miniFoterSmal';

const MiniFoter = () => {
   
   const {openMenu,setOpenMenu} = useContext(moviesContext);

   const openedMenu = Boolean(openMenu);

   const handleOpenedMenu = (event) => {
      setOpenMenu(event.currentTarget);
    };

   const handleMenuClose = () => {
      setOpenMenu(null);
    };

   const miniFoterItems = ['تماس با ما','قوانین','پشتیبانی','به ما بپیوندین','تبلیغات','فروشگاه','اپلیکیشن']

   return (
    <div className='div-miniFoter' style={{margin: '.5rem 0 0 0'}}>
      <MiniFoterLarg foterItems={miniFoterItems} handleMenuClose={handleMenuClose} handleOpenedMenu={handleOpenedMenu} openedMenu={openedMenu}/>
      <MiniFoterSmal openedMenu={openedMenu} handleMenuClose={handleMenuClose} handleOpenedMenu={handleOpenedMenu}/>
    </div>
  )
}

export default MiniFoter;
