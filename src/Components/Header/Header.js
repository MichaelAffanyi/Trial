import React from 'react'
import {
    Logo,
    Nav
} from './HeaderStyles'

function Header(props) {
  // const [isOpen, setIsOpen] = useState(false)
  return (
    <Nav>
        <Logo src='./assets/logo.svg'/>
        <span>home</span>
        <span>about</span>
        <button>contact us</button>
        {props.isOpen ? <img src='./assets/icon-close.svg' alt='' className='hamburger' onClick={() => props.setIsOpen(!props.isOpen)}/> : <img src='./assets/icon-hamburger.svg' alt='' className='close' onClick={() => props.setIsOpen(!props.isOpen)}/>}
        
    </Nav>
  )
}

export default Header