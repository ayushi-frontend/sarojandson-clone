import React from 'react'
import recentblog1 from '../assets/recentblog1.webp'
import recentblog2 from '../assets/recentblog2.webp'

function Recentblog() {
  return (
    <>
    <div className='recent-blog'>
        <div className='recent-blog-main'>
            <div className='read-blog'><h6>READ BLOG</h6></div>
            <h3>Recent Blog</h3>
            <div className='recent-blog-card'>
                <div className='card1'>
                    <div className='card1-text'>
                        <a href="#">Boost Efficiency &amp; Reduce Errors</a>
                        <p>Fast Billing,Accurate Inventory, And Smooth Operation With Barcode Solution.</p>
                    </div>
                    <div className='card1-img'><img src={recentblog1} alt='image'></img></div>
                </div>
                <div className='card1'>
                    <div className='card1-text'>
                        <a href="#">Boost Efficiency &amp; Reduce Errors</a>
                        <p>Fast Billing,Accurate Inventory, And Smooth Operation With Barcode Solution.</p>
                    </div>
                    <div className='card1-img'><img src={recentblog2} alt='image'></img></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Recentblog