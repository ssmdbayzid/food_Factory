import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Purchase = () => {
  const [orderQty, setOrderQty]= useState(1)
  const {id} = useParams() 
  console.log(id);
  const [product, setProduct] = useState({})

  
  axios.get(`http://localhost:5000/products/${id}`).then(data=> setProduct(data.data.product))

  const {name, img, description, price } = product;

  return (<div>
    {product &&  <div className="pt-12 bg-slate-300 ">
      <div className="md:flex ">
      <img src={img} alt="" srcSet="" className="w-96 " />
      <div>
        <h1 className="text-5xl">{name}</h1>
        <br />
        <p className="text-justify">{description}</p>
        <br />
        <div className="">
        <span className="flex items-center w-32 text-primary rounded px-2 border border-slate-400 text-xl bg-slate-300 ">
          <AiOutlineMinus className="mr-4"/>
        <span className="font-semibold ">{orderQty}</span>
        <AiOutlinePlus className="ml-4"/>
        </span>     

        <span className=" text-primary rounded w-32 px-4 border border-slate-400 text-lg bg-slate-300 "><span className="text-slate-600">Price</span> <span className="font-semibold">${price}</span>
        </span>     

        </div>
      </div>
      </div>   
      </div>}
  </div>    
  )
}

export default Purchase