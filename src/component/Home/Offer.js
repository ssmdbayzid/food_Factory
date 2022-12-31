import React from 'react'

const Offer = () => {
    const bgURL = "https://cdn.shopify.com/s/files/1/0475/1451/7661/files/sliderbg1_1728x.jpg?v=1613739485"
  return (
    <div className="hero w-full my-20 h-96 bg-cover" style={{ backgroundImage: `url(${bgURL})` }}>
  
  <div className="hero-content lg:ml-80 text-center text-white ">
    <div className="right-8">
      <h1 className="mb-5 w-full  lg:w-3/3 py-5 px-8 text-2xl lg:text-5xl font-bold bg-[url('https://static.vecteezy.com/system/resources/thumbnails/009/385/383/small/red-banner-clipart-design-illustration-free-png.png')]">DOUBLE DEAL</h1>
      <div className="bg-white rounded-tl-2xl rounded-br-2xl text-black py-3 shadow-lg px-2">
      <p className="mb-5 text-4xl  lg:text-5xl font-bold text-red-600 leading-none">50% OFF ON</p>
      <p className="text-2xl text-primary font-bold leading-none">SECOND FAMILY PAN PIZZA</p>      
      </div>
    </div>
  </div>
</div>
  )
}

export default Offer