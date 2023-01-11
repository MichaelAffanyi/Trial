import React from 'react'
import {
    Logo,
    Nav
} from './HeaderStyles'

function Header() {
  return (
    <Nav>
        <Logo src='./assets/logo.svg'/>
        <span>home</span>
        <span>about</span>
        <button>contact us</button>
        <img src='./assets/icon-hamburger.svg' alt='' className='hamburger'/>
    </Nav>
  )
}

export default Header