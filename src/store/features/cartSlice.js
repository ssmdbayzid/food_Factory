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
                const newCartItem = {...action.payload, cartQuantity: 1};
                state.cartItems.push(newCartItem)
                toast.success(`Added ${action.payload.name} to cart`, {
                    position: "top-right"
                })

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        increaseCart(state, action){
            const itemIndex = state.cartItems.findIndex((item)=> item._id === action.payload._id);

            if(state.cartItems[itemIndex].cartQuantity > 0){
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`Increased ${state.cartItems[itemIndex].name} cart Quantity`, {
                    position: "top-right"
                })
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

            }
        },
        decreaseCart(state, action){
            const itemIndex = state.cartItems.findIndex((item)=> item._id === action.payload._id);

            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.info(`Decrease ${state.cartItems[itemIndex].name} cart Quantity`, {
                    position: "top-right"
                })
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                state.cartItems = state.cartItems.filter((item)=> item._id !== action.payload._id)

                toast.error(`${action.payload.name} remove from cart`, {
                    position: "top-right"
                })

                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))             
            }            
        },
        removeCartItem(state, action){
            state.cartItems = state.cartItems.filter((item)=> item._id !== action.payload._id)
            
            toast.error(`${action.payload.name} remove from cart`, {
                position: "top-right"
            })

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        resetCartItem(state, action){
            console.log("This is from reset Cart")
            state.cartItems = []
            toast.error(`Cart Reset`, {
                position: "top-right"
            })

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }
    },
    getTotals(state,action){
        let {total, quantity} =  state.cartItems.reduce((cartTotal, cartItem)=>{
            const {price, cartQuantity} = cartItem;
            const itemTotal = price * cartQuantity;
            cartTotal.total += itemTotal;
            cartTotal.quantity += cartQuantity;
            return cartTotal;
        }, {
            total:0,
            quantity:0,
        })
        state.cartTotalQty = quantity;
        state.cartTotalAmount = total;
    }
})

export const {addToCart, increaseCart, decreaseCart, removeCartItem, resetCartItem, getTotals} = cartSlice.actions;

export default cartSlice.reducer;
