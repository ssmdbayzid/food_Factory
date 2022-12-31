import React from 'react'
import Food_Menu from '../../component/Home/Food_Menu'
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
    </div>
  )
}

export default Home