import React from 'react'

const Info = () => {
    const services = [
        {
            name : "Free Delivery",
            subTittle: "To Your Door",
            icon: <i class="ri-truck-line ri-lg"></i>
        },
        {
            name : "Local Pickup",
            subTittle: "Check Out Location",
            icon: <i class="ri-truck-line ri-lg"></i>
        },
        {
            name : "Available for You",
            subTittle: "Online Support 24/7",
            icon: <i class="ri-truck-line ri-lg"></i>
        },
        {
            name : "Order on Google App",
            subTittle: "Download Our App",
            icon: <i class="ri-truck-line ri-lg"></i>
        },
    ]
  return ( <div className='mt-5'>
             <h1 className="text-center text-primary text-3xl font-bold ">Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    services.map((service, index)=>
                        <div key={index} className='flex gap-5 py-5 my-8 items-center border-b-2 md:border-b-0 md:border-r-2 pl-20'  >                
                        <span className='text-3xl text-red-600'>{ service.icon }</span>
                        <div>
                            <h3 className='text-md font-bold'>{service.name}</h3>
                            <p>{service.subTittle}</p>
                        </div>
                        </div>
                )}
            </div>
        </div>

  )
}

export default Info