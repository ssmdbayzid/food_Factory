import React from 'react'
import {GiHamburger, GiFullPizza, GiRoundStar} from "react-icons/gi"
import {BiDrink} from "react-icons/bi"
import {HiOutlineCake} from "react-icons/hi"
import {SlCup} from "react-icons/sl"
import {CiIceCream} from "react-icons/ci"


const Food_Menu = () => {
    const items = [
        {
          name: "Testy Burger",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
          icon: < GiHamburger />,
          img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
          price: 10,
          
        },
        {
          name: "Testy Pizza",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
          icon: < GiFullPizza />,
          img: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          price: 12
        },
        {
          name: "Cold Ice-Cream",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
          icon: < CiIceCream />,
          img: "https://images.unsplash.com/photo-1633933358116-a27b902fad35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
          price: 16
        },
        {
          name: "BiDrink",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
          icon: < BiDrink />,
          img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=472&q=80",
          price: 20
        },
        {
          name: "Testy Sweet",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
          icon: < HiOutlineCake />,
          img: "https://images.unsplash.com/photo-1573750217191-d8e5c5f61f98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          price: 22
        },
        {
          name: "Healthy Breakfast",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima",
          icon: <SlCup />,
          img: "https://images.unsplash.com/photo-1531969179221-3946e6b5a5e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
          price: 25
        },
      ]
  return (<div>
      <h1 className="text-3xl text-primary font-bold text-center my-8">Food Menu</h1>
      <div className="mx-5 md:mx-8 lg:mx-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
    {
      items && items.map((item, index)=><div key={index} className="card  bg-base-100 shadow">
      <figure><img src={item.img} alt="Shoes" className="h-48  w-full" /></figure>
      <div className=" pt-5 ">
      <div className="flex px-5 justify-between">
    <h2 className="text-xl font-bold text-primary">{item.name}</h2>
    <p className="text-lg font-semibold text text-primary">${item.price}</p>    
    </div>
    <div className="rating rating-xs px-5">
    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
    </div>
     <p className="px-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> 

      <div className="flex justify-center items-center gap-5 px-5 bg-primary/30 py-1 hover:bg-primary/50 rounded mt-5 cursor-pointer">
    <i className="ri-add-box-fill text-3xl cursor-pointer text-red-600"></i>
    <span className="text-xl font-bold">Added To Cart</span> 
    </div>
    </div>
    </div>)}
</div >
</div >
)}

export default Food_Menu

// {
  // items && items.map((item, index)=><div key={index} 

  /*
  <div className="flex justify-between items-center text-center px-10 md:px-5 my-5">
  <div className="text-left">
  <h2 className="text-xl font-bold text-primary">{item.name}</h2>
  <p className="text-lg font-semibold text text-primary">${item.price}</p>
  </div>
  <i className="ri-add-box-fill text-4xl cursor-pointer text-red-600"></i>
</div> */