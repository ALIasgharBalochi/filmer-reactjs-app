import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const Headers = {
  Authorization: ' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjk5YTg4YmFmYzk4NmRjMmIwZTdkNTczZDJhYzZiMyIsInN1YiI6IjY1MmQ3M2E5MzU4ZGE3NWI1ZjdhMGFiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JjQ8oTbgTQom0pHIty_WBUAoKS7tv-WPb5bCAtKhUEI',
  accept: 'application/json'
}
const HeadersSession = {
  Authorization: ' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjk5YTg4YmFmYzk4NmRjMmIwZTdkNTczZDJhYzZiMyIsInN1YiI6IjY1MmQ3M2E5MzU4ZGE3NWI1ZjdhMGFiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JjQ8oTbgTQom0pHIty_WBUAoKS7tv-WPb5bCAtKhUEI',
  accept: 'application/json',
 'content-type' : 'application/json'
}

export const User = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/account/' }),
  endpoints: builder => ({
    getRequestToken: builder.query({
      query() {
        return {
          url: 'https://api.themoviedb.org/3/authentication/token/new',
          headers: Headers
        }
      }
    }),
    getSession: builder.mutation({
      query(request_token) {
        return{
          url: 'https://api.themoviedb.org/3/authentication/session/new',
          headers:HeadersSession,
          body: request_token 
        }
      }
    }),
    getUserAccountDetail: builder.query({
      query: (session_id) => `${process.env.ACCOUNT_ID}?session_id=${session_id}`
    }),
  })
})

export const {useGetRequestTokenQuery} = User