import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi(({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "https://card-312.herokuapp.com/"}),
    endpoints: (builder) => ({
        addDiscounts: builder.query({
            query: (arg) => ({
                query: () => "product",
                providesTags:['Discounts']
            })
        }),
        addUser : builder.mutation({
            query:(body) => ({
                url: "user",
                method : "POST",
                body
            })
        })
    })
}))

export const {useAddDiscountsQuery,useAddUserMutation} = apiSlice