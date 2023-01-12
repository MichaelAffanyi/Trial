import React from 'react'
import {
    Container,
    Content
} from './HomeHeadStyles'

function HomeHead() {
  return (
    <div>
        <Container>
        <img src='./assets/bg-pattern-home-1.svg' className='bg_1' alt='' />
        <Content>
            <div className='title'>
                <span>Find the <br/> best <span className='special'>talent</span></span>
            </div>
            <div className='article'>
                <div className='line'></div>
                <div className='content'>
                    <span>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</span>
                </div>
            </div>
        </Content>
        <img src='./assets/bg-pattern-home-2.svg' className='bg_2' alt='' />
       </Container> 
    </div>
  )
}

export default HomeHead