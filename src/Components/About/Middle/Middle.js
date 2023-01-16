import React from 'react'
import { linkedin, twitter } from '../../SVGs'
import {
    Container,
    Card
} from './MiddleStyles'

function Middle() {
  return (
    <Container>
        <img src='./assets/bg-pattern-about-2-contact-1.svg' alt='' className='bg-1'/>
        <div className='content'>
            <div className='title'>
                <span>Meet the directors</span>
            </div>
            <div className='grid'>
                <Card>
                    <div className='front'>
                        <div className='container'>
                            <div className='profile'>
                                <img src='./assets/avatar-nikita.jpg' alt='' />
                            </div>
                            <span className='name'>Nikita Marks</span>
                            <span className='position'>Founder & CEO</span>
                        </div>
                    </div>
                    <div className='back'>
                        <span className='name'>Nikita Marks</span>
                        <span className='quote'> “It always amazes me how much talent there is in every corner of the globe.”</span>
                        <div className='socials'>
                            {twitter}
                            {linkedin}
                        </div>
                    </div>
                    <div className='button'></div>
                </Card>
            </div>
        </div>
        <img src='./assets/bg-pattern-home-4-about-3.svg' alt='' className='bg-2'/>
    </Container>
  )
}

export default Middle