import React from 'react'
import whitelogo from '../assets/whitelogo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>
   <div className='footer'>
    <div className='footer-top'>
        <ul>
            <li> <img src={whitelogo} alt='Saroj & Sons logo'></img></li>
            <li>It helps designers plan out where the content will sit, the content to be written and approved.</li>
            <div className='footer-icon'>
                <div className='f-icon'><i class="bi bi-facebook"></i></div>
                <div className='f-icon'><i class="bi bi-instagram"></i></div>
            </div>
        </ul>
        <ul> 
            <li className='big-text'>Our Product</li>
            <li>Barcode Printer</li>
            <li>POS Printer</li>
            <li>Recipt Printer</li>
            <li>Scanner</li>
            <li>Veg logo</li>
        </ul>
        <ul>
            <li className='big-text'>Company</li>
            <Link className='footer-none' to='/'>
            <li>Home</li>
            </Link>
            <Link className='footer-none' to='/about'>
            <li>About Us</li>
            </Link>
            <Link className='footer-none' to='/product'>
            <li>Product</li>
            </Link>
            <Link className='footer-none' to='/contact'>
            <li>Contact Us</li>
            </Link>
        </ul>
        <ul>
            <li className='big-text'>Contact</li>
            <li>142, Mahavir Nagar, Indore, Madhya Pradesh, 452018</li>
            <div className='footer-contact'>
                <div className='fc1'>
                    <div className='fc1-icon-main'>
                        <div>

                        <div className='fc1-icon'><i class="bi bi-envelope-fill"></i></div>
                        </div>
                        <h5>sarojandsans88@gmail.com</h5>
                    </div>
                     <div className='fc1-icon-main'>
                        <div>

                        <div className='fc1-icon'><i class="bi bi-telephone-fill"></i></div>
                        </div>
                        <div className='fc1-no'>
                        <h5>91-83199-60297</h5>
                        <h5>Mon-Sat:9AM - 7PM</h5>
                        </div>
                    </div>
                </div>    
            </div>
        </ul>
       </div>
     <div className='footer-copyright'>
            <p>© Saroj and Son's Enterprises. Designed & Developed by Default Props</p>
        </div>
   </div>
   </>
  )
}

export default Footer