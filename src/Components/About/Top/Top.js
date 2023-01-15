import React from 'react'
import {
    Container,
} from './TopStyles'

function Top() {
  return (
    <Container>
    <div className='content'>
        <div className='title'>
            <span>About</span>
        </div>
        <div className='aside'>
            <div className='line'></div>
            <div className='article'>
                <span>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</span>
            </div>
        </div>
    </div>
    <img src='./assets/bg-pattern-about-1-mobile-nav-1.svg' alt='' className='bg-image' />
</Container>
  )
}

export default Top