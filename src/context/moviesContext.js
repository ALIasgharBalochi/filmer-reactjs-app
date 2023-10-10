import { createContext } from "react";


export const moviesContext = createContext({
    movieSinglePage: {},
    setMovieSinglePage: () => {},
    openBackdrop: {},
    setOpenBackdrop: () => {},
    nameFromTrailer: () => {},
    setNameFromTrailer: {},
    openDrawerFoter: () => {},
    setOpenDraweFoter: () => {},
    openDrawerSearch: {},
    setOpenDrawerSearch: () => {}          
})