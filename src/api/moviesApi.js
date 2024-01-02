import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const API_KEY = '2299a88bafc986dc2b0e7d573d2ac6b3';

const Headers = {
    Authorization: ' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjk5YTg4YmFmYzk4NmRjMmIwZTdkNTczZDJhYzZiMyIsInN1YiI6IjY1MmQ3M2E5MzU4ZGE3NWI1ZjdhMGFiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JjQ8oTbgTQom0pHIty_WBUAoKS7tv-WPb5bCAtKhUEI',
    accept: 'application/json'
}

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
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
        }),
        getMoveDetail: builder.query({
            query(moviesId) {
                return{
                  url: `/movie/${moviesId}?language=en-US`,
                  headers: Headers,
                }
            }
        })
    })
})

export const { useGetActionMoviesQuery,
    useGetComedyMoviesQuery,
    useGetDocumentariesQuery,
    useGetHorrorMoviesQuery,
    useGetNetflixOriginalsQuery,
    useGetRomanceMoviesQuery,
    useGetTopRatedQuery,
    useGetTradingQuery,
    useGetMovieSengleQuery,
    useSearchMoviesQuery,
    useGetMoveDetailQuery
} = moviesApi





// with_networks  213

// /discover/tv?api_key=${API_KEY}&with_genres=16