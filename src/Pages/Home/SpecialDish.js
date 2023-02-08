import React from 'react'
import {GiHamburger, GiFullPizza, GiRoundStar} from "react-icons/gi"
import {BiDrink} from "react-icons/bi"
import {HiOutlineCake} from "react-icons/hi"
import {SlCup} from "react-icons/sl"
import {CiIceCream} from "react-icons/ci"
import { NavLink } from 'react-router-dom'




const SpecialDish = () => {
  const dishes = [
    {
      name: "Chicken",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
      icon: < GiHamburger />,
      bg: "https://images.unsplash.com/photo-1615557960916-5f4791effe9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      catagory:"chicken",
    },
    {
      name: "Chicken Tikka",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
      icon: < GiFullPizza />,
      bg: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1071&q=80",
      catagory: "Chicken Tikka"
    },
    {
      name: "Drinks",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
      icon: < CiIceCream />,
      bg: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=957&q=80",
      catagory: "Drinks"
    },
    {
      name: "Fast Food",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam ratione minima.",
      icon: < BiDrink />,
      bg: "https://images.unsplash.com/photo-1610614819513-58e34989848b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      catagory: "Fast Food"
    },
    
  ]


  
  return (
    <div>       
        <h1 className="text-3xl text-primary font-bold text-center my-8">Our Catagory</h1>
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
        <span className="block text-center text-5xl text-red-600 mb-2">{dish.icon}</span>
        <h1 className="text-3xl md:text-xl font-bold mb-2 text-red-600" >{dish.name}</h1>
        <p className="text-lg md:text-lg italic mb-1 leading-snug text-justify" >{dish.description}</p>  

        {/* <NavLink to={`/purchase/${item.id}`} className=" mx-auto  gap-5 px-5 border-2 border-secondary py-2 hover:bg-primary mt-5 cursor-pointer "       */}
        <NavLink to={`/purchase/`} className=" mx-auto  gap-2 px-2 border-2 border-secondary py-1 hover:bg-primary mb-2 cursor-pointer "      
      >
      <span className="text-md font-semibold hover:text-white text-secondary">See More</span> 
    </NavLink>     
    </div>
</div>)}     
    </div>
    </div>)
}

export default SpecialDish