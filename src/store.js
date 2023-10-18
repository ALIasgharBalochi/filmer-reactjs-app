import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";


import { moviesApi } from "./api/moviesApi";
import { seriesApi } from "./api/seriesApi";

export const store = configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer,
        [seriesApi.reducerPath]: seriesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(moviesApi.middleware,seriesApi.middleware)
})