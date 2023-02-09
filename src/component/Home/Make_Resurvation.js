import React from 'react'

const Make_Resurvation = () => {

  const url = "https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?w=740&t=st=1672594630~exp=1672595230~hmac=835ce3fcd940845d7e4406650348e2b8aded6ee0e3367cc3344bf8020f350d90"

  return (<div style={{background: 'url("https://i.ibb.co/3FGLWY9/burger-4614022-960-720.jpg")', backgroundRepeat:"no-repeat", backgroundSize: "cover"}} className="w-full  mt-24 pb-24 md:h-[120vh] bg-no-repeat bg-blur  bg-auto md:bg-cover ">
      {/* <div className="absolute hero-overlay bg-opacity-10"></div> */}
      <h1 className="text-[7vh] font-bold text-center pt-8 mb-5 text-primary align-text-top 0 shadow-sm">Make Resurvation</h1>
      <p className="text-white md:px-24 px-10 md:w-9/12 mx-auto text-center shadow-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus provident fugit odio officia veritatis sint, praesentium cupiditate culpa natus facere!</p>
      <div className="items-center  lg:mb-0 md:justify-center md:flex mt-10 ">
        <div className="md:px-1 px-16 md:mx-auto">
        <div className="flex mb-5">
        <i className=" text-primary text-3xl ri-map-pin-fill mr-3"></i>
          <div className="pr-5">
            <p className="text-primary text-xl font-semibold">Address</p>
            <p className="text-white">4671, Painadi, Siddhirganj, Narayanganj, Dhaka</p>
          </div>
        </div>
        <div className="flex mb-5">
        <i className=" text-primary text-3xl ri-phone-fill mr-3 "></i>
        <div className="pr-5">

            <p className="text-primary text-xl font-semibold">Phone</p>
            <p className="text-white">4671, Painadi, Siddhirganj, Narayanganj, Dhaka</p>
          </div>
        </div>
        <div className="flex mb-5">
        <i className="text-primary text-3xl ri-mail-send-fill mr-3"></i>
        <div className="pr-5">

            <p className="text-primary text-xl font-semibold">Email</p>
            <p className="text-white">example@gmail.com</p>
          </div>
        </div>
        </div>
        {/* ------------ Message Form  ------------------- */}


      <div className=" md:w-2/5 w-4/5 mx-auto py-4 px-3 rounded-sm bg-white">
        <h1 className="md:text-3xl text-3xl text-center text-primary font-bold">Contact Us</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea type="text" placeholder="Message" className="input h-20 input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Send Message</button>
        </div>
      </div>

        </div>             
  </div>


  )
}

export default Make_Resurvation