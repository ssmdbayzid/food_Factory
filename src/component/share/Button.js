import React from 'react'

const Button = ({children}) => {
  return (
    <button className="btn text-white w-full bg-gradient-to-r from-primary/90  to-primary/50">
        {children}
    </button>  

  )
}

export default Button