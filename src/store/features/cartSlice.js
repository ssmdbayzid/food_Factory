import { createSlice } from "@reduxjs/toolkit";
import {toast } from "react-toastify"

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQty: 0,
    cartTotalAmount: 0,
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers : {
        addToCart(state, action) {
            // state.cartItems.push(action.payload);

            const itemIndex = state.cartItems.findIndex((item)=> item._id === action.payload._id);
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`Increased ${state.cartItems[itemIndex].name} cart Quantity`, {
                    position: "top-right"
                })
            }
            else {
                const newCartItem = {...action.payload, cartQuantity: 1};
                state.cartItems.push(newCartItem)
                toast.success(`Added ${action.payload.name} to cart`, {
                    position: "top-right"
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeCartItem(state, action){
            state = state.filter((item)=> item.id !== action.payload)
        }
    }
})

export const {addToCart, removeCartItem} = cartSlice.actions;

export default cartSlice.reducer;
