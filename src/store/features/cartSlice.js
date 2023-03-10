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
            // state.cartItems.push(action.payload);

            const itemIndex = state.cartItems.findIndex((item)=> item._id = action.payload._id);
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1;
            }
            else {
                const newCartItem = {...action.payload, cartQuantity: 1};
                state.cartItems.push(newCartItem)
            }
            console.log(action.payload)
        },
        removeCartItem(state, action){
            state = state.filter((item)=> item.id !== action.payload)
        }
    }
})

export const {addToCart, removeCartItem} = cartSlice.actions;

export default cartSlice.reducer;
