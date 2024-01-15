import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const User = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3/account/'}),
    endpoints: builder => ({
      getUserAccountDetail: builder.query({
        query: (session_id) => `${process.env.ACCOUNT_ID}?session_id=${session_id}`
      })
    })
})