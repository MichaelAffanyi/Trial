import React from 'react'
import { Logo } from '../Header/HeaderStyles'
import {
    FooterComponent,
    FooterTop,
    FooterBottom
} from './FooterStyles'

import {
    facebook,
    pinterest,
    twitter
} from '../SVGs'

function Footer() {
  return (
    <FooterComponent>
        <FooterTop>
            <img src='./assets/bg-pattern-home-6-about-5.svg' alt='' className='background-image'/>
            <div className='top_content'>
                <span>Ready to get started?</span>
                <button>contact us</button>
            </div>
        </FooterTop>
        <FooterBottom>
            <div className='bottom_content'>
                <div className='content'>
                    <div className='nav'>
                        <Logo src='./assets/logo.svg' />
                        <div className='nav_links'>
                            <span>home</span>
                            <span>about</span>
                        </div>
                    </div>
                    <div className='address'>
                        <span>987  Hillcrest Lane</span>
                        <span>Irvine, CA</span>
                        <span>California 92714</span>
                        <span>Call Us : 949-833-7432</span>
                    </div>
                </div>
                <div className='footer'>
                    <div className='svg'>
                        {facebook}
                        {pinterest}
                        {twitter}
                    </div>
                    <span>Copyright 2020. All Rights Reserved</span>
                </div>
            </div>
        </FooterBottom>
    </FooterComponent>
  )
}

export default Footer