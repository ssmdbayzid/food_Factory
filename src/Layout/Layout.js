import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Routers from '../Routers/Routers'

const Layout = () => {
  return (
    <div className=" ">
        <Header />
        <div>
        <Routers  /> 
        </div>
        <Footer />    
    </div>
  )
}

export default Layout