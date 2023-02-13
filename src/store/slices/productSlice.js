import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: "product",
    initialState : [],
    reducers : {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action){
            state = state.filter((item)=> item.id !== action.payload)
        }
    }
})

export const {add, remove} = productSlice.actions;

export default productSlice.reducer;