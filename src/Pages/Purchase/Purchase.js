import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useProductQuery } from '../../api/productAPI.ts';
import Button from '../../component/share/Button';

const Purchase = () => {
  const [orderQty, setOrderQty]= useState(1)
  const {id} = useParams() 
  // const [product, setProduct] = useState({})
  
  const {data, error, isLoading, isSuccess} = useProductQuery(id)

  let product;

    if(isLoading){
      return <p>Loading ......</p>
    } 
    else if(isSuccess){
      product = data.product;
    }
    else if(error){
      console.log(error);
      return <p className="text-red-600">{error.status}</p>
    }
const handleIncreaseOrderQty = ()=>{
  setOrderQty(orderQty + 1)
}
const handleDecreaseOrderQty = () =>{
  if(orderQty > 1)  {
    setOrderQty(orderQty - 1)
  }
  else return;
}



  return (<div>
    {error && <p className="text-red-600">{error.status}</p>}
    {product  && <div className="pt-6  ">
      <div className="md:flex justify-center items-center">
        <div className="w-1/2 text-right ">
      <img src={product.img} alt="" srcSet="" className=" mx-auto w-3/5" />
        </div>
      <div className="w-1/2 text-left ">
        < h1 className="text-5xl font-bold mb-6"> {product.name} </h1>
        <div className="w-1/2">
        <p className="text-justify">{product.description}</p>
        <br />
        <div className=" flex ">
        <div className="flex items-center w-1/2 text-primary rounded border border-slate-400 text-xl bg-slate-300 mr-3 ">
          <AiOutlineMinus
        onClick={()=>handleDecreaseOrderQty()}
          
          className=" w-12 px-2 mr-3 border-r-2 border-slate-400 h-full hover:bg-slate-400 cursor-pointer"/>
        <span className="font-semibold w-10 text-center mx-4 px-1">{orderQty}</span>
        <AiOutlinePlus
        onClick={()=>handleIncreaseOrderQty()}
        className=" w-12 px-2 ml-3 border-l-2 border-slate-400 h-full hover:bg-slate-400 cursor-pointer"/>
        </div>     
        <div className=" text-primary rounded w-1/2 px-4 border border-slate-400 text-lg bg-slate-300 ml-3 ">
          <span className="text-slate-600">Price &nbsp; : </span>
          <span className="font-semibold">${product.price}</span>
        </div>   
        </div>

        {/* <button className="btn text-white w-full mt-6 bg-gradient-to-r from-primary/80 via-secondary/50 to-primary/90">ADD TO CART</button>   */}
        <Button>
        ADD TO CART
        </Button>

        </div>
 <br />
      </div>
      </div>   
      </div>}
  </div>    
  )
}

export default Purchase