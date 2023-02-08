import React from 'react'
import {GiHamburger, GiFullPizza, } from "react-icons/gi"
import {BiDrink} from "react-icons/bi"
import {HiOutlineCake} from "react-icons/hi"
import {SlCup} from "react-icons/sl"
import {CiIceCream} from "react-icons/ci"
import { NavLink } from 'react-router-dom'


const Food_Menu = () => {
    const items = [
        { 
          id: 101,
          name: "Chicken Tikka Masala",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",        
          icon: < GiHamburger />,
          img: "https://i.ibb.co/Rv3N43Z/c1.png",
          price: 10,
          catagory: "chicken",                   
        },
        { 
          id: 102,
          name: "Chicken Vindalo",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",
          icon: < GiFullPizza />,
          img: "https://i.ibb.co/56D9L3v/c2.png",
          price: 12,
          catagory: "chicken",
        },
        { 
          id: 103,
          name: "Chicken Kurma",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",
          icon: < CiIceCream />,
          img: "https://i.ibb.co/vHhRwHr/c3.png",
          price: 16,
          catagory: "chicken",
        },
        { 
          id: 104,
          name: "Achari Chicken",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",
          icon: < BiDrink />,
          img: "https://i.ibb.co/Kzk4FCp/c4.png",
          price: 20,
          catagory: "chicken",
        },
        { 
          id: 105,
          name: "Chicken Masala",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",
          icon: < HiOutlineCake />,
          img: "https://i.ibb.co/zb0pGLh/c6.png",
          price: 22,
          catagory: "chicken",
        },
        { 
          id: 106,
          name: "Chicken Manchurin",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",
          icon: <SlCup />,
          img: "https://i.ibb.co/HTfTr9x/c7.png",
          price: 25,
          catagory: "chicken",
        },
        { 
          id: 107,
          name: "Chicken Cannelloni",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",
          icon: <SlCup />,
          img: "https://i.ibb.co/cxf6Xj0/cu1.png",
          price: 25,
          catagory: "chicken Churry",
        },
        { 
          id: 108,
          name: "Chicken Chickpea",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",
          icon: <SlCup />,
          img: "https://i.ibb.co/5xV0BzB/cu2.png",
          price: 25,
          catagory: "chicken Churry",
        },
        { 
          id: 109,
          name: "BUtter Chicken",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",
          icon: <SlCup />,
          img: "https://i.ibb.co/0CW8Wfq/cu3.png",
          price: 25,
          catagory: "chicken Churry",
        },
        { 
          id: 110,
          name: "Chicken Pasta",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",
          icon: <SlCup />,
          img: "https://i.ibb.co/4tzcDsG/cu4.png",
          price: 25,
          catagory: "chicken Churry",
        },
        { 
          id: 111,
          name: "Crunch Chicken",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",
          icon: <SlCup />,
          img: "https://i.ibb.co/vJhGy2z/cu5.png",
          price: 25,
          catagory: "chicken Churry",
        },
        { 
          id: 112,
          name: "Portugese Chicken",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",
          icon: <SlCup />,
          img: "https://i.ibb.co/4ZM6Sc1/cu6.png",
          price: 25,
          catagory: "chicken Churry",
        },
      ]

      const input = <div className="rating rating-xs px-5 mb-8">
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-primary" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-primary" checked />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-primary" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-primary" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-primary" />
                    </div>
  return (<div>
      <h1 className="text-3xl text-primary font-bold text-center my-8">Our Product</h1>
      <div className="mx-5 md:mx-8 lg:mx-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
    {
      items && items.map((item, index)=><div key={index} className="card pt-6 pb-10 px-6  bg-base-100 shadow text-center">
      <figure><img src={item.img} alt="menu" className="h-52  w-full" /></figure>
      <div className="pt-5">
    <h2 className="text-xl font-bold text-secondary">{item.name}</h2>    

    <p className="text-lg font-semibold text text-secondary">Price: ${item.price}</p>
      {input}
     {/* <p className="px-5 text-justify">{item.description}</p>  */}
     <br />

      <NavLink to={`/purchase/${item.id}`} className=" mx-auto  gap-5 px-5 border-2 border-secondary py-2 hover:bg-primary mt-5 cursor-pointer "      
      >
      <span className="text-xl font-semibold hover:text-white text-secondary">Order Now</span> 
    </NavLink>

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