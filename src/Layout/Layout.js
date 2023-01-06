import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Routers from '../Routers/Routers'

const Layout = () => {
  return (
    <div className="pb-[270px] md:pb-52 ">
        <Header />
        <div>
        <Routers  /> 
        </div>
        <Footer className="fixed bottom-0"/>    
    </div>
  )
}

export default Layout