import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQty: 0,
    cartTotalAmount: 0,
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers : {
        addToCart(state, action) {
            state.push(action.payload);
        },
        removeCartItem(state, action){
            state = state.filter((item)=> item.id !== action.payload)
        }
    }
})

export const {addToCart, removeCartItem} = cartSlice.actions;

export default cartSlice.reducer;
