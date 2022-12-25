import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi';
import { BsSuitHeartFill } from 'react-icons/bs';
import { HiShoppingCart } from 'react-icons/hi';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';


const Header = () => {
  const [open, setOpen] = useState(false)
  
  const links = [
    {
      name: "Home",
      path:"/home"
    },
    {
      name: "Shop",
      path:"/shop"
    },
    {
      name: "My Order",
      path:"/order"
    },
    {
      name: "Contact",
      path:"/contact"
    },
    {
      name: "Dashboard",
      path:"/dashboard"
    },
    {
      name: "Sign In",
      path:"/sign-in"
    },
    {
      name: "Sign Up",
      path:"/sign-up"
    },
  ]



  return (<div>
      <div className='flex shadow-md py-3 px-5 lg:px-12 items-center justify-between'>
        <div className=''>
          <a 
          className='text-2xl text-primary font-bold cursor-pointer'
          href="/home"
          alt=""
          >FoodFacty</a>   
              
        </div>
        <div className='lg:flex ml-auto w-3/4 justify-between items-center hidden '>
          <ul className='flex gap-5'>
            {/* <Link to="/home" className='hover:text-primary duration-200 font-semibold'>Home</Link>
            <Link to="/shop" className='hover:text-primary duration-200 font-semibold'>Shop</Link>
            <Link to="/order" className='hover:text-primary duration-200 font-semibold'>My Order</Link>
            <Link to="/contact" className='hover:text-primary duration-200 font-semibold'>Contact</Link>
            <Link to="/dashboard" className='hover:text-primary duration-200 font-semibold'>Dashboard</Link>
            <Link to="/sign-in" className='hover:text-primary duration-200 font-semibold'>Sign In</Link>
            <Link to="/sign-up" className='hover:text-primary duration-200 font-semibold'>Sign Up</Link> */}
            {
              links.map((link)=><li>
                <NavLink 
                key={link.name} to={link.path}>{link.name}
                </NavLink>
              </li>)
            }
          </ul>
          <div className='gap-5 flex text-black items-center'>
          <div className="form-control">
        <label className="input-group input-group-sm items-center">
      <input type="text" placeholder="Type here" className="input input-bordered input-sm" />
        <span className='h-8'> 
        < BiSearchAlt  className='w-5 h-5' />
        </span> 
      </label>
      </div>
      < BsSuitHeartFill className='w-8 h-8 p-2 bg-slate-200 rounded-full'  /> 
      < HiShoppingCart className='w-8 h-8 p-2 bg-slate-200 rounded-full' /> 
        </div>
        </div>
        {
         open ? < FiMenu className='lg:hidden text-2xl' onClick={()=>(setOpen(!open))} /> 
         :
        
         < AiOutlineClose className='lg:hidden text-2xl' onClick={()=>(setOpen(!open))} /> 
        
        }

  </div>

  {/*//*  Responsibe Navigation bar */}


    <div className={`absolute h-screen top-14 bg-slate-600 ${open ? "-right-[380px]" : "right-0"} w-full mx-auto z-20 pb-8 transition-all duration-500 ease-in justify-between text-white items-center lg:hidden `}>
          <ul className=' '>
            <li className='mt-3 text-center border-b-2'>
            <Link to="/home" className='hover:text-primary duration-200 font-semibold '>Home</Link>
            </li>
            <li className='py-2 border-b-2 text-center'>
            <Link to="/shop" className='hover:text-primary duration-200 font-semibold'>Shop</Link>
            </li>
            <li className='py-2 border-b-2 text-center'>
            <Link to="/order" className='hover:text-primary duration-200 font-semibold'>My Order</Link>
            </li>
            <li className='py-2 border-b-2 text-center'>
            <Link to="/contact" className='hover:text-primary duration-200 font-semibold'>Contact</Link>
            </li>
            <li className='py-2 border-b-2 text-center'>
            <Link to="/dashboard" className='hover:text-primary duration-200 font-semibold'>Dashboard</Link>
            </li>
            <li className='py-2 border-b-2 text-center'>
            <Link to="/sign-in" className='hover:text-primary duration-200 font-semibold'>Sign In</Link>
            </li>
            <li className='py-2 border-b-2 text-center'>
            <Link to="/sign-up" className='hover:text-primary duration-200 font-semibold'>Sign Up</Link>
            </li>
            <br />
            <li className='py-2 text-black'>
            < BsSuitHeartFill className='w-8 mx-auto h-8 p-2 mb-3 bg-slate-200 rounded-full '  /> 
            </li>  
            <li className='py-2 text-black'>
          < HiShoppingCart className='w-8 h-8 p-2 mb-3 mx-auto bg-slate-200 rounded-full' /> 
        </li> 
            <li className='mb-3 text-black'>
            <label className="input-group px-4 input-group-sm items-center">
      <input type="text" placeholder="Type here" className="input input-bordered h-10 w-full" />
        <span className='h-10 '> 
        < BiSearchAlt  className='w-5 h-5' />
        </span> 
      </label>
            </li>
                                                   
          </ul>          
        </div>
 
  </div>
  
  )}

export default Header

