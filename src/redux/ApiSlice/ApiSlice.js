 import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const  apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery : fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com/"}),
    endpoints:(builder) => ({
     getCard : builder.query({
        query:(arg) => ({
            query : () => "/users",
            providesTags: ['Todos']
        })
     })
 })
})

 export const  {useGetCard} = apiSlice