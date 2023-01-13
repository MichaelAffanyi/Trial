import React from 'react'
import {
    Container
} from './BottomStyles'

function Bottom() {
  return (
    <Container>
        <img src='./assets/bg-pattern-home-4-about-3.svg' alt='' className='bg-1' />
        <div className='container'>
            <div className='title'>
                <span>Delivering real results for top <br /> companies. Some of our <span className='emphasis'>success stories.</span></span>
            </div>
            <div className='article'>
                <div className='content'>
                    <div className='quote-image'>
                        <img src='./assets/icon-quotes.svg' alt='' />
                    </div>
                    <div className='quote'>
                        <span>“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</span>
                    </div>
                    <div className='author'>
                        <span className='name'>Kady Baker</span>
                        <span className='position'>Product Manager at Bookmark</span>
                    </div>
                    <div className='image'>
                        <img src='./assets/avatar-kady.jpg' alt='' />
                    </div>
                </div>
                <div className='content'>
                    <div className='quote-image'>
                        <img src='./assets/icon-quotes.svg' alt='' />
                    </div>
                    <div className='quote'>
                        <span>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</span>
                    </div>
                    <div className='author'>
                        <span className='name'>Aiysha Reese</span>
                        <span className='position'>Founder of Manage</span>
                    </div>
                    <div className='image'>
                        <img src='./assets/avatar-aiysha.jpg' alt='' />
                    </div>
                </div>
                <div className='content'>
                    <div className='quote-image'>
                        <img src='./assets/icon-quotes.svg' alt='' />
                    </div>
                    <div className='quote'>
                        <span>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</span>
                    </div>
                    <div className='author'>
                        <span className='name'>Arthur Clarke</span>
                        <span className='position'>Co-founder of MyPhysio</span>
                    </div>
                    <div className='image'>
                        <img src='./assets/avatar-arthur.jpg' alt='' />
                    </div>
                </div>
            </div>
        </div>
        <img src='./assets/bg-pattern-home-5.svg' alt='' className='bg-2'/>
    </Container>
  )
}

export default Bottom