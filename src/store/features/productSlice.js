import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const productFetch = createAsyncThunk
(
    "products/productsFetch", 
    async () => {
    const response =   await axios.get("http://localhost:5000/products")
    return response?.data
    },
)


const productSlice = createSlice({
    name: "products",
    initialState:{
        items: [],
        status: null,
    },
    reducers: {},
    extraReducers:{
        [productFetch.pending]: (state,action) => {
            state.status = "pending"
        },
        [productFetch.fulfilled]: (state, action) => {
            state.status = "success";
            state.items = action.payload;
        },
        [productFetch.pending]: (state,action) => {
            state.status = "pending"
        },
        [productFetch.rejected]: (state,action) => {
            state.status = "rejected"
        }
    }
})

export default productSlice.reducer;