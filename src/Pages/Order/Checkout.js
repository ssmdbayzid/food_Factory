import React from 'react'
import { useSelector } from 'react-redux';

const Checkout = () => {
  const cart = useSelector((state)=> state.cart);

  const handleOrderSubmit = e=>{
      e.preventDefault()      
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const mobile = form.mobile.value;
      const address = form.address.value;
      const thana = form.thana.value;
      const district = form.district.value;
      
      const newOrder = {
        name,
        email,
        mobile,
        address,
        thana,
        district
      }
    console.log(newOrder)
  }
  
  return (  <div>
     { (cart.cartItems.length > 0) && <div className=" mb-10 grid grid-cols-3">
        
        <div className="lg:col-span-2 col-span-3 bg-indigo-50 pt-10 space-y-8 px-12">
            <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
                <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                    <div className="text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-5 h-6 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="text-sm font-medium ml-3">Checkout</div>
                </div>
                <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">Complete your shipping and payment details below.</div>
                <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
            </div>
            <div className="rounded-md">
                <form onSubmit={handleOrderSubmit} >
                    
                        <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Shipping & Billing Information</h2>
                        <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Name</span>
                                <input name="name" className="focus:outline-none px-3" placeholder="Your Name" required />
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Email</span>
                                <input name="email" type="email" className="focus:outline-none px-3" placeholder="Your Email" required />
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Mobile</span>
                                <input name="mobile" type="text" className="focus:outline-none px-3" placeholder="Your Mobile" required />
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Address</span>
                                <input name="address"  required className="focus:outline-none px-3" placeholder="Delivery Address" />
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Thana</span>
                                <input name="thana" required className="focus:outline-none px-3" placeholder="Thana Name" />
                            </label>
                            <label className="inline-flex w-2/4 border-gray-200 py-3">
                                <span className="text-right px-2">District</span>
                                <input name="district" required className="focus:outline-none px-3" placeholder="District Name" />
                            </label>
                           
                            <label className="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                                <span className="text-right px-2">Country</span>
                                <div id="country" className="focus:outline-none px-3 w-full flex items-center">
                                    <select defaultValue={"BN"} name="country" className="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none">
                                        <option value="BN">Bangladesh</option>
                                        <option value="PK">Pakistan</option>
                                        <option value="AG">Afganisthan</option>
                                        <option value="IN">India</option>
                                        <option value="AU">Australia</option>
                                        <option value="BE">Belgium</option>
                                        <option value="BR">Brazil</option>
                                        <option value="CA">Canada</option>
                                        <option value="CN">China</option>
                                        <option value="DK">Denmark</option>
                                        <option value="FI">Finland</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                        <option value="HK">Hong Kong</option>
                                        <option value="IE">Ireland</option>
                                        <option value="IT">Italy</option>
                                        <option value="JP">Japan</option>
                                        <option value="LU">Luxembourg</option>
                                        <option value="MX">Mexico</option>
                                        <option value="NL">Netherlands</option>
                                        <option value="PL">Poland</option>
                                        <option value="PT">Portugal</option>
                                        <option value="SG">Singapore</option>
                                        <option value="ES">Spain</option>
                                        <option value="TN">Tunisia</option>
                                        <option value="GB">United Kingdom</option>
                                        <option value="US" selected="selected">United States</option>
                                    </select>
                                </div>
                            </label>
                        </fieldset>
                        <button className="w-full bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase">
                            Submit form
                        </button>
                    
                </form>
            </div>
            <div className="rounded-md">
                <section>
                    <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Payment Information</h2>
                    <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                        <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                            <span className="text-right pl-2 pr-12 border-r-2">Card</span>
                            <input name="card" className="focus:outline-none px-3 w-full" placeholder="Card number MM/YY CVC" required=""/>
                        </label>
                    </fieldset>
                    <fieldset className=" mb-3 bg-white shadow-lg rounded text-gray-600">
                        <label className="after:pr-5  flex border-b border-gray-200 h-12 py-3 items-center">
                            <span className="text-right pl-2 border-r-2 pr-4">Currency</span>
                            <select  defaultValue="BDT" name="currency" id="" className=" focus:outline-none pl-3 pr-8 w-full">
                            <option value="BDT">BDT</option>
                            <option value="USD">USD</option>
                            <option value="Rupee">Rupee</option>
                    </select>
                        </label>
                    </fieldset>
                    
                </section>
            </div>
            <button className="submit-button px-4 py-3 rounded-full bg-pink-400 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                Pay ${cart.cartTotalAmount + 15}
            </button>
        </div>
        
        <div className="lg:col-span-1 col-span-3 bg-white pt-10 lg:block ">
            <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">Order Summary</h1>
            <ul className="py-6 border-b space-y-6 px-8">
             { cart.cartItems.map((item, index)=>
             <li key={index}
              className="grid grid-cols-6  gap-2 border-b-1">
                    <div className="col-span-2 self-center">
                        <img src={item.img} alt="Product" className=" w-20 md:w-14"/>
                    </div>
                    <div className="flex flex-col col-span-2 pt-2">
                        <span className="text-gray-600 text-md font-semi-bold">{item.name}</span>
                    </div>
                    <div className="col-span-2 pt-3">
                        <div className="flex items-center space-x-2 text-sm justify-between">
                            <span className="text-gray-400">{item.cartQuantity} x ${item.price}</span>
                            <span className="text-pink-400 font-semibold inline-block">{item.price * item.cartQuantity}</span>
                        </div>
                    </div>
                </li>)}
                
            </ul>
            <div className="px-8 border-b">
                <div className="flex justify-between py-4 text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-pink-500">${cart.cartTotalAmount}</span>
                </div>
                <div className="flex justify-between py-4 text-gray-600">
                    <span>Shipping</span>
                    <span className="font-semibold text-pink-500">$15</span>
                </div>
            </div>
            <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                <span>Total</span>
                <span>${cart.cartTotalAmount + 15}</span>
            </div>
        </div>
    </div>} 
    </div>
  )
}

export default Checkout

