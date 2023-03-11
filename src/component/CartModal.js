import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './share/Button'

const CartModal = ({cartOpen, setCartOpen}) => {

    const [order, setOrder] = useState(1)

    const navigate = useNavigate()

    const items = [
        {
          name: "Testy Burger",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
        //   icon: < GiHamburger />,
          img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
          price: 10,          
        },
        
    ]
  return (<div className=" " >
        <input type="checkbox" id="cartModal" className="modal-toggle" />
        <div className="max-w-sm bg-white fixed ml-auto right-6 h-screen z-20 top-0 ">
        
        <div htmlFor="cartModal" className=" justify-between w-full text-white bg-black py-5">
        <span onClick={()=>setCartOpen(!cartOpen)} className="pl-12 mr-24"><i class="ri-arrow-right-s-line  rounded-full bg-slate-400 text-2xl"></i></span>
        <span className="text-lg font-bold ml-auto">Cart</span>
        </div>
        <div className="mx-8">
            {
                items && items.map((item, index)=><div key={index}>
                    <div className="flex mt-10 mb-5">
                    <img src={item.img} alt="" srcSet="" className="h-16 w-16 mr-8 items-center rounded-md"/>
                    <div>
                        <p className="font-semibold text-xl">{item.name}</p>
                        <h1 className="text-xl font-bold">${item.price}</h1>
                        <span className="inline-block border-2 px-3 my-3">
                        <i class="ri-subtract-line mr-2" onClick={()=>setOrder(order - 1)}></i>
                            <span className="font-semibold">{order}</span>
                        <i class="ri-add-fill ml-2" onClick={()=>setOrder(order + 1)}></i>
                        </span>
                    </div>
                </div>
                <hr />
                </div>)
            }
        </div>
        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        <Button
        onClick={()=>navigate("/order")}
        >
          Check Out Page
        </Button>
        </div>
  </div>
  )
}

export default CartModal