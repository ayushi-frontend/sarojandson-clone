import React from 'react'
import Navbar from '../Components/Navbar'
import aboutimg from '../assets/aboutimg.webp'
import aboutimg1 from '../assets/aboutimg1.jpg'
import  navlogo from '../assets/s&s_logo.png'
import Footer from '../Components/Footer'
function About() {
  return (
    <>
    <Navbar/>
    <div className='about'>
      <div className='about-text'>
            <h2>About Us</h2>
            <p>Home . About Us</p>
      </div>
    </div>
    <div className='about-area'>
        <div className='about-area-content'>
            <div className='about-area-text'>
                <h3>About Saroj and Son's Enterprises</h3>
                <h4>Clear Solutions for Every Business</h4>
                <p>Established in 2015 and officially registered as a proprietorship firm in 2019, Saroj & Sons Enterprises has grown into a trusted name for barcode and labeling solutions. From small retailers to large enterprises, we proudly serve businesses of every scale with products that make their work simple, smooth, and professional.</p>
                <p>Established in 2015 and officially registered as a proprietorship firm in 2019, Saroj & Sons Enterprises has grown into a trusted name for barcode and labeling solutions. From small retailers to large enterprises, we proudly serve businesses of every scale with products that make their work simple, smooth, and professional.
                   We deal in a wide range of products including barcode printers, receipt printers, scanners, thermal billing rolls, ribbons, and customized stickers. Each product is carefully chosen to deliver clear performance, high durability, and cost-effectiveness, helping our clients save time, reduce errors, and manage their operations with ease.</p>
                <p>Our vision is to create a world where businesses can operate with clarity, accuracy, and confidence. That’s why we focus not only on supplying products but also on building strong relationships with our clients through genuine quality, timely delivery, and dedicated support.</p>
                <p>At Saroj & Sons Enterprises, we believe that every label tells a story, every print builds trust, and every scanner adds speed. By combining the right tools with our commitment to service, we help businesses grow steadily and serve their customers better. With us, you don’t just buy products you gain a partner for your success.</p>
                <img src={aboutimg1} alt='image'></img>
            </div>
            <div className='about-area-text'>
                <img src={aboutimg} alt='image'></img>
            </div>
        </div>
    </div>
    <div className='sarojandsans'>
        <img src={navlogo} alt='image'></img>
    </div>
    <div className='motive'>
    <div className='motive-card'>
      <div className='motive-c blue'>
        <h3>Our Vision</h3>
        <p>To be the most trusted partner in barcode and labeling solutions, empowering businesses with innovation, reliability, and growth.</p>
      </div>
      <div className='motive-c yellow'>
        <h3>Our Mission</h3>
        <p>Delivering high-quality barcode products and services at competitive prices, ensuring efficiency, accuracy, and customer satisfaction in every business we serve.</p>
      </div>
      <div className='motive-c pink'>
        <h3>Our Motto</h3>
        <p>Providing clear and smart barcode solutions that simplify operations, support business growth, and build long-lasting customer trust.</p>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default About