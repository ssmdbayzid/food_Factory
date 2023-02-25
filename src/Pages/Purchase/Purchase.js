import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useProductQuery } from '../../api/productAPI.ts';
import Button from '../../component/share/Button';
import RelatedProducts from './RelatedProducts';

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
      console.log(data.product)
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

const rating =  <div className="flex items-center mt-2.5 mb-5">
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
        </div>



  return (<div>
    {error && <p className="text-red-600">{error.status}</p>}
    {product  && <div className="pt-6  ">
      <div className="mx-4 md:mx-12 md:flex justify-center items-center">
        <div className="group p-6 bg-slate-200">
      <img src={product.img} alt="" srcSet="" className=" group-hover:p-4 duration-700 p-10 mx-auto w-[70vh]" />
        </div>
      <div className="text-left md:mt-0 mt-10">
        < h1 className="text-center text-5xl font-bold mb-6"> {product.name} </h1>
        <div className="mx-auto w-full md:w-1/2">
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
        <Button>
        ADD TO CART
        </Button>
        </div>
 <br />
      </div>
      </div>   
      <RelatedProducts />
      </div>}
  </div>    
  )
}

export default Purchase