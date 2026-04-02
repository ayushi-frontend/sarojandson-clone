import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Contact() {
    return (
        <>
            <div className='contact-div'>
                <Navbar />
                <div className='about'>
                    <div className='about-text'>
                        <h2>Contact</h2>
                        <p>Home . Contact</p>
                    </div>
                </div>
                <div className='contact'>
                    <div className='contact-cards'>
                        <div className='contact-card1'>
                            <div className='contact-icon'><i class="bi bi-geo-alt-fill"></i></div>
                            <h2>Our Location</h2>
                            <h4>142 ,Mahavir Nagar Indore , Madhya Pradesh , 452018 </h4>
                        </div>
                         <div className='contact-card1'>
                            <div className='contact-icon'><i class="bi bi-envelope-fill"></i></div>
                            <h2>Our Email Address</h2>
                            <h4>Sarojandsans88@gmail.com </h4>
                        </div>
                         <div className='contact-card1'>
                            <div className='contact-icon'><i class="bi bi-telephone"></i></div>
                            <h2>Contact Phone Number</h2>
                            <h4>91-8399-60297</h4>
                        </div>
                    </div>
                    <div className='location'>
                        <div className='map'>
                            <iframe
                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2482531593855!2d75.8968452778509!3d22.719012374464118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2ccc0e1a1e7%3A0x4071ed12dda9c1f5!2sMahavir%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452018!5e0!3m2!1sen!2sin!4v1757605344858!5m2!1sen!2sin"
                             width="100%"
                              height="500"
                              style={{ border: 0 }}
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className='details'>
                            <div className='double-input'>
                                <input className='input1' placeholder='First Name*'></input>
                                <input className='input1' placeholder='Email Address*'></input>
                            </div>
                            <input className='input2' placeholder='Phone Number'></input>
                            <input className='input3' placeholder='Your Message'></input>
                            <pre className='details-pre'>SEND NOW  <i class="bi bi-chevron-right"></i></pre>
                        </div>
                    </div>
                </div>
               <Footer/>
            </div>
        </>
    )
}

export default Contact