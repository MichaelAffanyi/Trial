import React from 'react'
import {
    MiddleContainer,
} from './MiddleStyles'

function Middle() {
  return (
        <MiddleContainer>
           <div className='container'>
                <div className='head'>
                    <div className='line'></div>
                    <div className='title'>
                        <span>Build & manage distributed teams like no one else.</span>
                    </div>
                </div>
                <div className='sidebar'>
                    <div className='content'>
                        <div className='image'>
                            <img src='./assets/icon-person.svg' alt='' />
                        </div>
                        <div className='article'>
                            <span>Experienced Individuals</span>
                            <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='image'>
                            <img src='./assets/icon-cog.svg' alt='' />
                        </div>
                        <div className='article'>
                            <span>Easy to Implement</span>
                            <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>  
                        </div>
                    </div>
                    <div className='content'>
                        <div className='image'>
                            <img src='./assets/icon-chart.svg' alt='' />
                        </div>
                        <div className='article'>
                            <span>Enhanced Productivity</span>
                            <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                        </div>
                    </div>
                </div>
                <img src='./assets/bg-pattern-home-3.svg' alt='' className='bg-1' />
            </div>
        </MiddleContainer>
  )
}

export default Middle