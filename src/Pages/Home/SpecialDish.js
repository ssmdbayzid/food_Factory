import React from 'react'

const SpecialDish = () => {
  return (
    <div>       
        <h1 className="text-3xl text-primary font-bold text-center my-8">SpecialDish</h1>
    <div className="mx-5 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
    <div className="group w-72 relative items-center justify-center overflow-hidden cursor-pointer">
        <div className="h-96 w-72">
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80" alt="img" srcset="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-9 translate-y-[70%] group-hover:translate-y-0 transition-all duration-700">
            <h1 className="text-3xl font-bold text-white" >Beauty</h1>
            <p className="text-lg italic mb-3 text-white" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui possimus atque vero unde voluptate ad. Vitae recusandae expedita inventore tenetur. </p>
        </div>

    </div>

    </div>

    
    </div>
  )
}

export default SpecialDish