import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const API_KEY = '2299a88bafc986dc2b0e7d573d2ac6b3';
const Headers = {
    Authorization: ' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjk5YTg4YmFmYzk4NmRjMmIwZTdkNTczZDJhYzZiMyIsInN1YiI6IjY1MmQ3M2E5MzU4ZGE3NWI1ZjdhMGFiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JjQ8oTbgTQom0pHIty_WBUAoKS7tv-WPb5bCAtKhUEI',
    accept: 'application/json'
}

export const seriesApi = createApi({
    reducerPath: 'seriesApi',
    // baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3',prepareHeaders: (headers) => {
    //     headers.set('Authorization',' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjk5YTg4YmFmYzk4NmRjMmIwZTdkNTczZDJhYzZiMyIsInN1YiI6IjY1MmQ3M2E5MzU4ZGE3NWI1ZjdhMGFiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JjQ8oTbgTQom0pHIty_WBUAoKS7tv-WPb5bCAtKhUEI'),
    //     headers.set('accept','application/json')
    // }}),
     baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3'}),
    endpoints: builder => ({
        getActionSeries: builder.query({   
            query: () => `/discover/tv?api_key=${API_KEY}&with_genres=28`
        }),
        getTopRatedSeries: builder.query({
            query: () => `/tv/top_rated?api_key=BASE_URL&language=en-Us'`
        }),
        getNetflexOriginalsSeries: builder.query({
            query: () =>`/discover/tv?api_key=${API_KEY}&width_genres=16`
        }),
        getComedySeries: builder.query({
            query: () => `/discover/tv?api_key=${API_KEY}&with_genres=35`
        }),
        getHorrorSeries: builder.query({
            query: () => `/discover/tv?api_key=${API_KEY}&with_genres=27`
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
    useGetNetflexOriginalsSeriesQuery
} = seriesApi

