import React from 'react'
import Bottom from '../../Components/Bottom/Bottom'
import HomeHead from '../../Components/HomeHead/HomeHead'
import Middle from '../../Components/Middle/Middle'
import Footer from '../../Components/Footer/Footer'
import {
  Body
} from './HomeStyles'
import MobileNav from '../../Components/MobileNav/MobileNav'

function Home(props) {
  return (
    <Body>
      {props.isOpen && <MobileNav isOpen = {props.isOpen} setIsOpen = {props.setIsOpen}/>}
      <HomeHead />
      <Middle />
      <Bottom />
      <Footer />
    </Body>
  )
}

export default Home