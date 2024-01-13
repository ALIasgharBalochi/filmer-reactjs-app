import { useState } from "react";

import { createTheme,ThemeProvider} from "@mui/material";
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from "@emotion/react";
import createCache from '@emotion/cache';
import {prefixer} from "stylis";

import {Outlet} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import MiniFoter from './components/Foter/miniFoter';
import BackDrop from "./components/Backdrop";
import DrawerFoter from "./components/Drawer/DrawerFoter";
import DrawerSearch from "./components/Drawer/DrawerSearch";

import { moviesContext } from "./context/moviesContext";


const App = () => {
  
  const [openMenu,setOpenMenu] = useState(null);
  const [openGener, setOpenGener] = useState(null);
  const [openBackdrop,setOpenBackdrop] = useState(false);
  const [nameFromTrailer,setNameFromTrailer] = useState('');
  const [openDrawerFoter,setOpenDraweFoter] = useState(false);
  const [openDrawerSearch,setOpenDrawerSearch] = useState(false);
    
   
  const theme = createTheme({
    direction: 'rtl',
    typography: {
      fontFamily: 'vazir , roboto'
    }
  })
  const caCheRTL = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer,rtlPlugin]
  })

  

  return (
    <moviesContext.Provider value={{
      openMenu,
      setOpenMenu,
      openGener,
      setOpenGener,
      openBackdrop,
      setOpenBackdrop,
      nameFromTrailer,
      setNameFromTrailer,
      openDrawerFoter,
      setOpenDraweFoter,
      openDrawerSearch,
      setOpenDrawerSearch,
    }}>

      <ThemeProvider theme={theme}>
      <Navbar/> 
      <Outlet/>  
       <MiniFoter/>
      <DrawerFoter/>
      <BackDrop/>
      </ThemeProvider>
      <CacheProvider value={caCheRTL}>
        <ThemeProvider theme={theme}> 
           <DrawerSearch/> 
          </ThemeProvider> 
      </CacheProvider>
    </moviesContext.Provider> 
  )
}

export default App;
