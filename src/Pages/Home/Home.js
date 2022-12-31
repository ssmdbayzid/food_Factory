import React from 'react'
import Food_Menu from '../../component/Home/Food_Menu'
import Make_Resurvation from '../../component/Home/Make_Resurvation'
import Offer from '../../component/Home/Offer'
import Partner from '../../component/Home/Partner'
import Banner from './Banner'
import Info from './Info'
import SpecialDish from './SpecialDish'

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Food_Menu/>
      < Offer />       
      <SpecialDish />
      <Partner />
      <Make_Resurvation />
    </div>
  )
}

export default Home