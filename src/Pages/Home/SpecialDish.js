import React from 'react'
import {GiHamburger, GiFullPizza, GiRoundStar} from "react-icons/gi"
import {BiDrink} from "react-icons/bi"
import {HiOutlineCake} from "react-icons/hi"
import {SlCup} from "react-icons/sl"
import {CiIceCream} from "react-icons/ci"



const SpecialDish = () => {
  const dishes = [
    {
      name: "Testy Burger",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
      icon: < GiHamburger />,
      bg: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
      rating: 4.5,
    },
    {
      name: "Testy Pizza",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
      icon: < GiFullPizza />,
      bg: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      rating: 5
    },
    {
      name: "Cold Ice-Cream",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
      icon: < CiIceCream />,
      bg: "https://images.unsplash.com/photo-1633933358116-a27b902fad35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      rating: 4.9
    },
    {
      name: "Cold Drink",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
      icon: < BiDrink />,
      bg: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
      rating: 4.8
    },
    {
      name: "Testy Sweet",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
      icon: < HiOutlineCake />,
      bg: "https://images.unsplash.com/photo-1573750217191-d8e5c5f61f98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      rating: 5.0
    },
    {
      name: "Healthy Breakfast",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima",
      icon: <SlCup />,
      bg: "https://images.unsplash.com/photo-1531969179221-3946e6b5a5e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      rating: 4.7
    },    
    {
      name: "Testy Sweet",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
      icon: < HiOutlineCake />,
      bg: "https://images.unsplash.com/photo-1573750217191-d8e5c5f61f98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      rating: 5.0
    },
    {
      name: "Healthy Breakfast",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima",
      icon: <SlCup />,
      bg: "https://images.unsplash.com/photo-1531969179221-3946e6b5a5e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      rating: 4.7
    },
  ]


  
  return (
    <div>       
        <h1 className="text-3xl text-primary font-bold text-center my-8">SpecialDish</h1>
    <div className="mx-5 md:mx-8 lg:mx-20 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
   {
    dishes && dishes.map((dish, index)=><div key={index} className="group h-60 w-full md:mx-3 relative items-center justify-center overflow-hidden cursor-pointer shadow-lg bottom-1 border-2 border-primary">
    <div  className="h-full w-full group-hover:-translate-y-[100%] transition-all duration-500">
        <img src={dish.bg} alt="img" srcset="" className="h-full w-full object-cover" />
    <div className="absolute bottom-0 w-full py-2 text-center bg-black/50  duration-1000">
      <h1 className="text-center text-2xl text-white">{dish.name}</h1>
    </div>
    </div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:px-3 px-2 translate-y-[100%] group-hover:translate-y-0 transition-all duration-500 bg-white">
        <span className="block text-center text-5xl text-red-600 md:mb-2 mb-5">{dish.icon}</span>
        <h1 className="text-3xl md:text-xl font-bold mb-2 text-red-600" >{dish.name}</h1>
        <p className="text-lg md:text-lg italic mb-1 leading-snug text-justify" >{dish.description}</p>       
    </div>
</div>)}     
    </div>
    </div>)
}

export default SpecialDish