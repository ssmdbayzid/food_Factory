import axios from 'axios';
import React, { useEffect, useState } from 'react'


import { NavLink } from 'react-router-dom';
import { useProductsQuery } from '../../api/productAPI.ts';
// import { useGetProductsQuery } from '../../api/productAPI';



const Food_Menu = () => {
  // const [products, setProducts ] = useState([]);

  const { data, error, isLoading, isSuccess } = useProductsQuery();


  
  if(isLoading){
    return <p>Loading ......</p>
  } else if(isSuccess){
    console.log(data);
  }

  if(error){
    console.log(error);
    return <p className="text-red-600">{error.status}</p>
  }

  // useEffect(()=>{
  //   axios.get("http://localhost:5000/products").then(data=>{
  //     setProducts(data.data.product)
  //   })
  // }, [products])




   /* const items = [

        {           
          "name": "Chicken Tikka Masala",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",                 
          "img": "https://i.ibb.co/Rv3N43Z/c1.png",
          "price": 10,
          "catagory": "chicken",                   
        },
        {           
          "name": "Chicken Vindalo",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",         
          "img": "https://i.ibb.co/56D9L3v/c2.png",
          "price": 12,
          "catagory": "chicken",
        },
        {           
          "name": "Chicken Kurma",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",         
          "img": "https://i.ibb.co/vHhRwHr/c3.png",
          "price": 16,
          "catagory": "chicken",
        },
        {           
          "name": "Achari Chicken",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",         
          "img": "https://i.ibb.co/Kzk4FCp/c4.png",
          "price": 20,
          "catagory": "chicken",
        },
        {           
          "name": "Chicken Masala",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",         
          "img": "https://i.ibb.co/zb0pGLh/c6.png",
          "price": 22,
          "catagory": "chicken",
        },
        {           
          "name": "Chicken Manchurin",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",         
          "img": "https://i.ibb.co/HTfTr9x/c7.png",
          "price": 25,
          "catagory": "chicken",
        },
        {           
          "name": "Chicken Cannelloni",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",         
          "img": "https://i.ibb.co/cxf6Xj0/cu1.png",
          "price": 25,
          "catagory": "chicken Churry",
        },
        {           
          "name": "Chicken Chickpea",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",         
          "img": "https://i.ibb.co/5xV0BzB/cu2.png",
          "price": 25,
          "catagory": "chicken Churry",
        },
        {         
          "name": "Butter Chicken",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",         
          "img": "https://i.ibb.co/0CW8Wfq/cu3.png",
          "price": 25,
          "catagory": "chicken Churry",
        },
        {           
          "name": "Chicken Pasta",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",         
          "img": "https://i.ibb.co/4tzcDsG/cu4.png",
          "price": 25,
          "catagory": "chicken Churry",
        },
        {           
          "name": "Crunch Chicken",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",         
          "img": "https://i.ibb.co/vJhGy2z/cu5.png",
          "price": 25,
          "catagory": "chicken Churry",
        },
        {           
          "name": "Portugese Chicken",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, itaque. Explicabo sit ipsa quibusdam eius.",         
          "img": "https://i.ibb.co/4ZM6Sc1/cu6.png",
          "price": 25,
          "catagory": "chicken Churry",
        },
      ]
*/
      
      const input = <div className="rating rating-xs px-5 mb-8">
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-primary" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-primary" checked />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-primary" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-primary" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-primary" />
                    </div>

  return (<div>
    {isLoading && <p>Loading ......</p>}
    {error && <p className="text-red-600 text-center text-3xl">{error.status}</p>}
    
    {isSuccess && <div>
      <h1 className="text-3xl font-bold text-center my-8">Our <span className="text-primary text-3xl">Product</span></h1>
      <div className="mx-5 md:mx-8 lg:mx-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
    {
      data && data.product.map((product, index)=><div key={index} className="card pt-6 pb-10 px-6  bg-base-100 shadow text-center">
      <figure><img src={product.img} alt="menu" className="h-52  w-full" /></figure>
      <div className="pt-5">
    <h2 className="text-xl font-bold text-secondary">{product.name}</h2>    

    <p className="text-lg font-semibold text text-secondary">Price: ${product.price}</p>
      {input}
     {/* <p className="px-5 text-justify">{item.description}</p>  */}
     <br />

      <NavLink to={`/purchase/${product._id}`} className=" mx-auto group gap-5 px-5 border-2 border-secondary py-2 hover:bg-primary mt-5 cursor-pointer ">
      <span className="text-xl font-semibold group-hover:text-white text-secondary">Order Now</span> 
    </NavLink>
{/* 
      <span onClick={()=>handleAddMenu(product)}   to={`/purchase/${product.id}`} className=" mx-auto  gap-5 px-5 border-2 border-secondary py-2 hover:bg-primary mt-5 cursor-pointer " 
        
      >
      <span className="text-xl font-semibold hover:text-white text-secondary">Order Now</span> 
    </span> */}

    </div>
    </div>)}
</div >
</div > }
</div>

)}

export default Food_Menu;

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