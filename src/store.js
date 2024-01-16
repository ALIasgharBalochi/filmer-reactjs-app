import { configureStore } from "@reduxjs/toolkit";


import { moviesApi } from "./api/moviesApi";
import { seriesApi } from "./api/seriesApi";
import {User} from './api/UserApi';

export const store = configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer,
        [seriesApi.reducerPath]: seriesApi.reducer,
        [User.reducerPath] : User.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(moviesApi.middleware,seriesApi.middleware,User.middleware)
})