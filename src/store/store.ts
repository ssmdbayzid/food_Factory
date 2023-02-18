import { configureStore, } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import { productApi } from "../api/productAPI.ts";

const store = configureStore({
    reducer: {
        product : productReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat(productApi.middleware)
})

export default store;