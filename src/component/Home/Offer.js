import React from 'react'

const Offer = () => {
    const bgURL = "https://cdn.shopify.com/s/files/1/0475/1451/7661/files/sliderbg1_1728x.jpg?v=1613739485"
  return (
    <div className="hero  my-20 h-96 w-[110%] bg-cover" style={{ backgroundImage: `url(${bgURL})` }}>
  
  <div className="hero-content text-center text-white ">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Offer