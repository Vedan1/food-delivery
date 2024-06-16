import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-left">
                <img src={assets.logo} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                <div className="footer-right-social-icons" >
                    <img src={assets.twitter_icon} />
                    <img src={assets.facebook_icon} />
                    <img src={assets.linkedin_icon} />
                </div>
            </div>
            <div className="footer-center">
                    <h2>TOMATO INC</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
            </div>
            <div className="footer-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+69 55 3312 3213</li>
                        <li>tomato@Tomatomail.com</li>
                    </ul>
            </div>
        </div>
        <hr />
        <p className='footer-rights'>Copyright 2024 © Tomato.com - All Right Reserved.</p>


    </div>
  )
}

export default Footer