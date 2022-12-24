import React from 'react'
import { Link } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi';
import { BsSuitHeartFill } from 'react-icons/bs';
import { HiShoppingCart } from 'react-icons/hi';


const Header = () => {
  return (
    <div>
      <div className='flex shadow-md py-3 px-12 '>
        <div className=''>
          <a 
          className='text-2xl text-primary font-bold cursor-pointer'
          href="/home"
          alt=""
          >FoodFacty</a>   
              
        </div>
        <div className='flex ml-auto w-3/4 justify-between items-center '>
          <ul className='flex gap-5'>
            <Link to="/home" className='hover:text-primary duration-200 font-semibold'>Home</Link>
            <Link to="/shop" className='hover:text-primary duration-200 font-semibold'>Shop</Link>
            <Link to="/order" className='hover:text-primary duration-200 font-semibold'>My Order</Link>
            <Link to="/contact" className='hover:text-primary duration-200 font-semibold'>Contact</Link>
            <Link to="/dashboard" className='hover:text-primary duration-200 font-semibold'>Dashboard</Link>
            <Link to="/sign-in" className='hover:text-primary duration-200 font-semibold'>Sign In</Link>
            <Link to="/sign-up" className='hover:text-primary duration-200 font-semibold'>Sign Up</Link>
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
      </div>

    </div>
  )
}

export default Header