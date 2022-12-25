import React from 'react'
// https://i.ibb.co/BK13rpt/photo-1495195134817-aeb325a55b65.jpg
const Banner = () => {
  return (<div className="hero w-full min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/BK13rpt/photo-1495195134817-aeb325a55b65.jpg")`}}>
  <div className="hero-content flex-col lg:flex-row">
    <div className='max-w-xl lg:p-8'>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started
      <i class="ri-truck-line ri-lg"></i>
      </button>
    </div>
    <div className='relative top-0 rounded-full shadow-2xl'>
    <img src="https://images.unsplash.com/photo-1542574271-7f3b92e6c821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className=" rounded-full w-[250px]" alt='' />
    </div>
  </div>
</div>
    
    )
  }
  
  export default Banner


  /* <div className="hero h-screen md:h-[400px] bg-cover" style={{ backgroundImage: `url("https://i.ibb.co/qjL6Zn9/463-min.jpg")`}}> */