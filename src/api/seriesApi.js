import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const API_KEY = '2299a88bafc986dc2b0e7d573d2ac6b3';
const Headers = {
    Authorization: ' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjk5YTg4YmFmYzk4NmRjMmIwZTdkNTczZDJhYzZiMyIsInN1YiI6IjY1MmQ3M2E5MzU4ZGE3NWI1ZjdhMGFiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JjQ8oTbgTQom0pHIty_WBUAoKS7tv-WPb5bCAtKhUEI',
    accept: 'application/json'
}

export const seriesApi = createApi({
    reducerPath: 'seriesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3'}),
    endpoints: builder => ({
        getActionSeries: builder.query({   
            query: () => `/discover/tv?api_key=${API_KEY}&with_genres=10759`
        }),
        getTopRatedSeries: builder.query({
            query: () => `/discover/tv?api_key=${API_KEY}&with_genres=10764'`
        }),
        getNetflexOriginalsSeries: builder.query({
            query: () =>`/discover/tv?api_key=${API_KEY}&width_genres=16`
        }),
        getComedySeries: builder.query({
            query: () => `/discover/tv?api_key=${API_KEY}&with_genres=35`
        }),
        getHorrorSeries: builder.query({
            query: () => `/discover/tv?api_key=${API_KEY}&with_genres=80`
        }),
        getRomanceSeries: builder.query({
            query: () => `/discover/tv?api_key=${API_KEY}&with_genres=10749`
        }),
        getDocumentariesSeries: builder.query({
            query: () => `/discover/tv?api_key=${API_KEY}&with_genres=99`
        }),
        getSeriesengle: builder.query({
            query: (newArrMoves) => `/discover/tv?api_key=${API_KEY}&with_genres=${newArrMoves}`
        }),
        searchSeries: builder.query({
            query: (query) => `/search/tv?query=${query}&api_key=${API_KEY}`
        }),
        getSeriesDetail: builder.query({
            query(seriesId) {
                return{
                  url: `/tv/${seriesId}?language=en-US`,
                  headers: Headers,
                }
            }
        })
    })
})

export const {
    useGetActionSeriesQuery
    ,useGetComedySeriesQuery,
    useGetDocumentariesSeriesQuery,
    useGetHorrorSeriesQuery,
    useGetRomanceSeriesQuery,
    useGetTopRatedSeriesQuery,
    useGetNetflexOriginalsSeriesQuery,
    useGetSeriesDetailQuery
} = seriesApi

