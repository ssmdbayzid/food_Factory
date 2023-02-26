import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useProductQuery } from '../../api/productAPI.ts';
import Button from '../../component/share/Button';
import RelatedProducts from './RelatedProducts';
import rating from '../../component/share';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';

const Purchase = () => {
  const [orderQty, setOrderQty]= useState(1)
  const {id} = useParams() 
  // const [product, setProduct] = useState({})
const dispatch = useDispatch()

  
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


const handleAddToCart = (product) =>{
  dispatch(addToCart(product))
}


  return (<div>
    {error && <p className="text-red-600">{error.status}</p>}
    {isLoading && isLoading}
    {product  && <div className="pt-6  ">
      <div className="mx-4 md:mx-12 md:flex justify-center items-center">
        <div className="group p-6 border-slate-300 bg-slate-200">
      <img src={product.img} alt="" srcSet="" className=" group-hover:p-4 duration-700 p-10 mx-auto w-[70vh]" />
        </div>

        <div className="mx-auto w-full md:w-96 md:mt-0 mt-10">
        < h1 className="text-5xl font-bold mb-6"> {product.name} </h1>
        <p className="text-justify">{product.description}</p>
        <br />
        {rating}

        <hr />
        <br />
        <div className=" flex mb-10">
        <div className="flex items-center w-1/2 text-primary rounded border border-slate-400 text-xl bg-slate-300 mr-3 ">
          <AiOutlineMinus
        onClick={()=>handleDecreaseOrderQty()}
          
          className="w-14 md:w-12 px-4 md:px-2 mr-6 md:mr-3 border-r-2 border-slate-400 h-full hover:bg-slate-400 cursor-pointer"/>
        <span className="font-semibold w-12 md:w-10 text-center md:mx-4 px-1">{orderQty}</span>
        <AiOutlinePlus
        onClick={()=>handleIncreaseOrderQty()}
        className="w-14 md:w-12 px-4 md:px-2 ml-6 md:ml-3 border-l-2 border-slate-400 h-full hover:bg-slate-400 cursor-pointer"/>
        </div>     
        <div className=" text-primary text-center rounded w-1/2 px-4 border border-slate-400 text-lg bg-slate-300 ml-3 ">
          <span className="text-slate-600">Price &nbsp; : </span>
          <span className="font-semibold">${product.price}</span>
        </div>   
        </div>

        {/* <button className="btn text-white w-full mt-6 bg-gradient-to-r from-primary/80 via-secondary/50 to-primary/90">ADD TO CART</button>   */}
        <Button
        onClick={()=>handleAddToCart(product)}
        >
        ADD TO CART
        </Button>
        </div>
 <br />
      </div>
  
      <RelatedProducts product={product} />
      </div>}
  </div>    
  )
}

export default Purchase