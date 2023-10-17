import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const API_KEY = '19f84e11932abbc79e6d83f82d6d1045';

export const moviesApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3'}),
    endpoints: builder => ({
        getTrading: builder.query({
            query: () => `/trendeng/all/weed?api_key=${API_KEY}&language=en-Us`
        }),
        getNetflixOriginals: builder.query({
            query: () => `/discover/movie?api_key=${API_KEY}&with_genres=16`
        }),
        getTopRated: builder.query({
            query: () => `/discover/movie?api_key=${API_KEY}&with_genres=18`
        }),
        getActionMovies: builder.query({
            query: () => `/discover/movie?api_key=${API_KEY}&with_genres=28`
        }),
        getComedyMovies: builder.query({
            query: () => `/discover/movie?api_key=${API_KEY}&with_genres=35`
        }),
        getHorrorMovies: builder.query({
            query: () => `/discover/movie?api_key=${API_KEY}&with_genres=27`
        }),
        getRomanceMovies: builder.query({
            query: () => `/discover/movie?api_key=${API_KEY}&with_genres=10749`
        }),
        getDocumentaries: builder.query({
            query: () => `/discover/movie?api_key=${API_KEY}&with_genres=99`
        }),
        getMovieSengle: builder.query({
            query: (newArrMoves) => `/discover/movie?api_key=${API_KEY}&with_genres=${newArrMoves}`
        }),
        searchMovies: builder.query({
            query: (query) => `/search/movie?query=${query}&api_key=${API_KEY}`
        })
    })
})

export const {useGetActionMoviesQuery,
    useGetComedyMoviesQuery,
    useGetDocumentariesQuery,
    useGetHorrorMoviesQuery,
    useGetNetflixOriginalsQuery,
    useGetRomanceMoviesQuery,
    useGetTopRatedQuery,
    useGetTradingQuery,
    useGetMovieSengleQuery,
    useSearchMoviesQuery 
} =  moviesApi





    // with_networks  213

    // /discover/tv?api_key=${API_KEY}&with_genres=16