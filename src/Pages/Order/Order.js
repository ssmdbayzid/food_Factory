import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCart, getTotals, addToCart, removeCartItem, resetCartItem } from '../../store/features/cartSlice'
import {FiPlus, FiMinus} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const Order = () => {
  
  const dispatch = useDispatch()
  const cart = useSelector((state)=> state.cart);
  // const cart2 = useSelector((state)=> state.cart);
  const navigate = useNavigate()
  useEffect(()=>{
    dispatch(getTotals())
  },[cart, dispatch])
  
  
  // Increase Cart Quantity
  const increaseOrderQty = (item) => {
    dispatch(addToCart(item));

           
  }
  
  // Decrease Cart Quantity
  const decreaseOrderQty = (item) => {
    dispatch(decreaseCart(item))           
  }
  // Remove Cart Items
  const removeItemFromOrder = (item) => {
    dispatch(removeCartItem(item))        
  }
  
  const resetCart = () =>{
    dispatch(resetCartItem())
  }
  
  return (
    <div>
      { cart.cartItems.length === 0 ? <div>
          <h1 className="font-semibold text-xl text-center my-12" >Your Cart is currently empty</h1>
        </div> :
     <div className="container mx-auto mt-10">
    {/* <div className="flex shadow-md my-10"> */}
      <div className="w-full bg-white mx-auto px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">{cart.cartItems.length} Items</h2>
        </div>
         <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        
        {cart.cartItems.map((item, index)=><div  
        key={index}  
          className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5"> 
            <div className="w-20">
              <img className="h-24" src={item.img} alt="" />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-lg">{item.name}</span>
              <span onClick={()=>removeItemFromOrder(item)}
               className="text-md font-semibold hover:text-red-500 text-gray-500 cursor-pointer" >Remove</span>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
          <FiMinus 
          onClick={()=>{decreaseOrderQty(item)}} className="w-6 h-6" />


            <input className="mx-2 border text-center w-8" type="text" value={item.cartQuantity} />

            <FiPlus
            onClick={()=>{increaseOrderQty(item)}} className="w-6 h-6" />
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">${item.price}</span>
          <span className="text-center w-1/5 font-semibold text-sm">${item.price * item.cartQuantity}</span>
        </div>)}
     
      </div>
      <div className="md:flex px-10 justify-between ">

      <button
      onClick={()=>resetCart()}
      className="px-8 md:inline inline-block relative left-auto bg-green-400 h-full py-2 mt-10 border-2 hover:bg-slate-200">Clear Cart</button>

      <div id="summary" className=" w-full md:w-1/2 lg:w-1/3 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Sub-total</span>
            <span>${cart.cartTotalAmount}</span>
          </div>
          <p>Taxes and shipping calculated at checkout</p>
          <button
          onClick={()=>navigate("/checkout")}
          className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>
      </div>

    </div>}
      
    </div>
  )
}

export default Order