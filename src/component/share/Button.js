import React from 'react'

const Button = ({children}) => {
  return (
    <button className="btn text-white w-full mt-6 bg-gradient-to-r from-primary/80 via-secondary/50 to-primary/90">
        {children}
    </button>  

  )
}

export default Button