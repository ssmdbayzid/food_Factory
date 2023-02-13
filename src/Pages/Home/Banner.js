import React from 'react'
// https://i.ibb.co/BK13rpt/photo-1495195134817-aeb325a55b65.jpg
const Banner = () => {
  return (<div className="hero w-full lg:h-[70vh] h-full" style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2022/04/30/19/12/cooking-banner-7166200_960_720.jpg")`}}>
  <div className="hero-content flex-col lg:flex-row">
    <div className="md:w-1/2 text-center md:text-left lg:p-20 md:py-0 py-5">
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started
      
      </button>
    </div>
    <div className='relative top-0 shadow-lg rounded-full'>
    <img src="https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/2022/11/chicken-grill2.png" className=" rounded-md w-[350px]" alt='' />
    </div>
  </div>
</div>    
    )
  }
  
  export default Banner


  /* <div className="hero h-screen md:h-[400px] bg-cover" style={{ backgroundImage: `url("https://i.ibb.co/qjL6Zn9/463-min.jpg")`}}> */