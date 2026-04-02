import React from 'react'
import doublequotes from '../assets/doublequotes.png'

function Testimonial() {
  return (
    <>
    <div className='testimonial'>
        <div className='testimonial-overlay'>
            <div className='test'><h5>TESTIMONIALS</h5></div>
            <h1>Client Feedback</h1>
            <div className='testimonials-comments'>
                <div className='client'>
                   <div className='client-head'>
                    <div className='client-head-text'>
                        <h3>Amit Verma,</h3>
                        <h4>Manufacturer,Mumbai</h4>
                    </div>
                    <div className='client-head-img'>
                        <img src={doublequotes} alt='image'></img>
                    </div>
                   </div>
                   <p>I ordered customized multicolor stickers, and the print quality was outstanding. They really understand business needs and provide solutions that save both time and cost.</p>
                </div>
                <div className='client'>
                   <div className='client-head'>
                    <div className='client-head-text'>
                        <h3>Amit Verma,</h3>
                        <h4>Manufacturer,Mumbai</h4>
                    </div>
                    <div className='client-head-img'>
                        <img src={doublequotes} alt='image'></img>
                    </div>
                   </div>
                   <p>I ordered customized multicolor stickers, and the print quality was outstanding. They really understand business needs and provide solutions that save both time and cost.</p>
                </div>
                <div className='client'>
                   <div className='client-head'>
                    <div className='client-head-text'>
                        <h3>Amit Verma,</h3>
                        <h4>Manufacturer,Mumbai</h4>
                    </div>
                    <div className='client-head-img'>
                        <img src={doublequotes} alt='image'></img>
                    </div>
                   </div>
                   <p>I ordered customized multicolor stickers, and the print quality was outstanding. They really understand business needs and provide solutions that save both time and cost.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonial