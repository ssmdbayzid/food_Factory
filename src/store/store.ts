import { configureStore, } from "@reduxjs/toolkit";
import { productApi } from "../api/productAPI.ts";
import cartReducer, { getTotals } from "./features/cartSlice";
import productReducer, {productFetch} from "./features/productSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,   
        products: productReducer,     
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat(productApi.middleware)
})


store.dispatch(getTotals())
store.dispatch(productFetch())

export default store;