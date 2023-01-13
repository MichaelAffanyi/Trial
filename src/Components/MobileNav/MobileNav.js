import React from 'react'
import { 
    Container
 } from './MobileNavStyles'

function MobileNav(props) {
  return (
    <Container onClick={() => props.setIsOpen(!props.isOpen)}>
        <div className='menu'>
            <div className='navLinks'>
                <span>home</span>
                <span>about</span>
                <button>contact us</button>
            </div>
            <img src='./assets/bg-pattern-about-1-mobile-nav-1.svg' alt='' className='bg-1'/>
        </div>
    </Container>
  )
}

export default MobileNav