import React from 'react'
import { Route, Routes } from 'react-router-dom'
import publicRouite from './public_Route'
// import privateRoute from './private_Route'
// import privateRoute from './public_Route'


const Routers = () => {
  return (
    <Routes>
      {
        publicRouite.map((route, index) =>
          <Route key={index} path={route.path} element={< route.component />}></Route>
        )
      }

    </Routes>
  )
}

export default Routers