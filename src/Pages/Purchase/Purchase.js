

import { useNavigate, useParams } from 'react-router-dom'
import { useProductQuery } from '../../api/productAPI.ts';
import RelatedProducts from './RelatedProducts';
import rating from '../../component/share';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/features/cartSlice';



const Purchase = () => {  
  const {id} = useParams() 
  // const [product, setProduct] = useState({})
const dispatch = useDispatch()
const navigate = useNavigate()
  
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



const handleAddToCart = (product) =>{
  dispatch(addToCart(product))
  // console.log("this is from purchase page")
  navigate("/order")
  
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
        <br />
        {rating}

        <hr />
        <br />
        <div className=" flex mb-10">
   
        <div className=" text-primary text-center rounded w-1/2 px-4 border border-slate-400 text-lg bg-slate-300 ml-3 ">
          <span className="text-slate-600">Price &nbsp; : </span>
          <span className="font-semibold">${product.price}</span>
        </div>   
        </div>

        <button      
        onClick={()=>handleAddToCart(product)}
        className="btn text-white w-full mt-6 bg-gradient-to-r from-primary/80 via-secondary/50 to-primary/90">ADD TO CART</button>  

        </div>
 <br />
      </div>
  
      <RelatedProducts product={product} />
      </div>}
  </div>    
  )
}

export default Purchase