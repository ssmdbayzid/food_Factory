import React from 'react'
import Food_Menu from '../../component/Home/Food_Menu'
import Banner from './Banner'
import Info from './Info'
import SpecialDish from './SpecialDish'

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <SpecialDish />
      <Food_Menu/>
    </div>
  )
}

export default Home