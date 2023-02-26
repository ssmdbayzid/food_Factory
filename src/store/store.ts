import { configureStore, } from "@reduxjs/toolkit";
import productReducer from "./slices/cartSlice";
import { productApi } from "../api/productAPI.ts";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product : productReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat(productApi.middleware)
})

export default store;