import React from 'react'
import Navlogo from '../assets/s&s_logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='navbar'>
        <div className='nav-left'>
            <div className='nav-logo'>

               <img src={Navlogo} alt='image'></img>


            </div>
            <ul className='nav-ul'>
              <Link className='none' to='/'> 
                <li>Home</li>
              </Link>
              <Link className='none' to='/about'> 
                <li>About</li>
              </Link>
              <Link className='none' to='/product'>
                <li>Our products</li>
              </Link>  
              <Link className='none' to='/services'>
                <li>Services</li>
              </Link>
              <Link className='none' to='/faq'> 
                <li>FAQ</li>
              </Link> 
              <Link className='none' to='/contact'>
                <li>Contact</li>
              </Link>    
            </ul>
        </div>
        <div className='nav-right'><i class="bi bi-list"></i></div>
    </div>
    </>
  )
}

export default Navbar