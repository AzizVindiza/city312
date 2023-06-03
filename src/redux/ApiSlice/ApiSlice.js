import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery: fetchBaseQuery({baseUrl: " https://card-76krx.ondigitalocean.app/"}),
    endpoints: (builder) => ({
        getCard: builder.query({
            query: () => "product/"
        }),
        getPartners: builder.query({
            query : () => "partners/"
        }),
        getPlayBill : builder.query({
            query : (arg) => "playbill/"
        }),
        addUser : builder.mutation({
            query:(body) => ({
                url: "user",
                method : "POST",
                body
            })
        })
    })
})

export const {useGetCardQuery,useGetPartnersQuery,useAddUserMutation,useGetPlayBillQuery} = apiSlice