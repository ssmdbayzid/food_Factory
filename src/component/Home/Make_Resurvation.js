import React from 'react'

const Make_Resurvation = () => {
  return (
    <div className="hero mt-20 bg-[url('https://cdn.pixabay.com/photo/2016/06/24/11/28/glasses-1477079_960_720.jpg')]">
  <div className="hero-content py-20 flex-col lg:flex-row-reverse text-white">
    <div className="text-center w-1/2 p-8 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black/50">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className=" text-primary text-lg label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input bg-transparent border-b-primary" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className=" text-primary text-lg label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input bg-transparent border-b-primary" />
          <label className="label">
            <a href="#" className=" text-primary text-lg label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Make_Resurvation