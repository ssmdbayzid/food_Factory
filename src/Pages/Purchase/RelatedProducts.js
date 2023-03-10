import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../component/share/Button'
import { useProductsQuery } from '../../api/productAPI.ts';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import rating from '../../component/share';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/features/cartSlice';


const Related = ({product}) => {

  const { data, error, isLoading, isSuccess } = useProductsQuery();
  const dispatch = useDispatch()

let relatedProducts;
  
  if(isLoading){
    return <p>Loading ......</p>
  } else if (isSuccess){
    const catagory = data.product.filter((p)=> p.catagory === product.catagory);
    relatedProducts = catagory.filter((p)=> p._id !== product._id)
  }
  if(error){
    console.log(error);
    return <p className="text-red-600">{error.status}</p>
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 500 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
// const rating =  <div className="flex items-center mt-2 mb-2">
//             <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//             <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//             <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//             <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//             <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//             <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
//         </div>


const handleAddToCart = (item) =>{
  dispatch(addToCart(item))
  console.log(item)
}
  return (<div className="px-5">
      {isLoading && isLoading}
      <h1 className="text-3xl my-3 text-center">Related <span className="text-primary">Products</span></h1>
     <Carousel
     responsive={responsive}     
     swipeable={false}
     removeArrowOnDeviceType={["tablet", "mobile"]}
     itemClass="carousel-item-padding-80-px"
     className="mb-5"
      >      
    {relatedProducts && relatedProducts.map((item, index)=>
  <div key={index} className="group max-w-sm mx-3 text-secondary border  rounded-lg shadow border-gray-700 h-full pb-8">
    <figure className="h-40 md:h-48 mt-8">< img className="mx-auto group-hover:w-36 w-32 md:group-hover:w-40  duration-500 md:w-36 " src={item.img} alt="product image" /></figure>
    <div className="px-5 pb-8">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-justify">{item.name}</h5>
            <h5 className=" tracking-tight text-gray-900 text-justify">{item.description}</h5>
        {rating}
            <p className="text-xl">Price &nbsp; : <span className=" text-primary pb-3">${item.price}</span></p>         
            {/* <NavLink to={`/purchase/${product._id}`} className=""> */}
            <NavLink to={`/purchase/63e923afffc07097ee3a59d3`} className="absolute bottom-3 ">
      <button className="btn text-white w-full mt-6 bg-gradient-to-r from-primary/80 via-secondary/50 to-primary/90"
      onClick={()=> handleAddToCart(item)}
      >
        Add To Cart
      </button>
    </NavLink>      
    </div>
</div>)}
 </Carousel> 
</div>)
}

export default Related


     