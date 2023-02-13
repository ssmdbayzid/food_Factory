import React from 'react'
import { Route, Routes } from 'react-router-dom'
import privateRoute from './private_Route'
import publicRouite from './public_Route'
// import privateRoute from './private_Route'
// import privateRoute from './public_Route'


const Routers = () => {
  return (
    <Routes>

      {/*------------- // Public Route  ------------- */}
      {
        publicRouite.map((route, index) =>
          <Route key={index} path={route.path} element={< route.component />}></Route>
        )
      }
    


    {/*---------------- Private Route --------------*/}

    {
      privateRoute.map((route, index)=>
        <Route key={index} path={route.path} element={<route.component />}></Route>
      )
    }


    </Routes>
  )
}

export default Routers