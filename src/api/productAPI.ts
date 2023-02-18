import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { Product } from "./models/productModel";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
    endpoints: (builder)=> ({
        products: builder.query<Product[], void>({
            query:()=> '/products',
        }),
        product: builder.query<Product, string> ({
            query:(id)=> `/products/${id}`
        })
    })
})

export const {useProductsQuery, useProductQuery}= productApi;