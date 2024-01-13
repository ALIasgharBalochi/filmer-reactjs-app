import { createContext } from "react";

export const moviesContext = createContext({
    openBackdrop: {},
    setOpenBackdrop: () => {},
    nameFromTrailer: () => {},
    setNameFromTrailer: {},
    openDrawerFoter: () => {},
    setOpenDraweFoter: () => {},
    openDrawerSearch: {},
    setOpenDrawerSearch: () => {}          
})