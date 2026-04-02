import React from 'react'
import Navbar from '../Components/Navbar'
import Home_Page_Slider from '../Components/Home_Page_Slider'
import Barcode_Solution from '../Components/Barcode_Solution'
import discount_product1 from '../assets/discount_product1.png'
import rating_img from '../assets/rating_img.jpg'
import trendyimg1 from '../assets/trendyimg1.png'
import FurnitureAds from '../Components/FurnitureAds'
import Testimonial from '../Components/Testimonial'
import Recentblog from '../Components/Recentblog'
import Footer from '../Components/Footer'
function Home() {
  return (
    <>
  <Navbar />
  <Home_Page_Slider />
  <Barcode_Solution />

  {/* ----- Furniture Offer Section ----- */}
  <div className="furniture-offer">
    <div className="furniture-offer-inner">
      <div className="fur-offer1 fur-offer">
        <div className="fur-offer-content">
          <h3>GET 30% OFF</h3>
          <h5>Premium POS & Thermal Billing Rolls</h5>
          <button className="fur-btn">
            BUY NOW <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="fur-offer2 fur-offer">
        <div className="fur-offer-content">
          <h3>GET 15% OFF</h3>
          <h5>Make Every Delivery Hassle Free</h5>
          <button className="fur-btn">
            BUY NOW <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* ----- Discount Area ----- */}
  <div className="discount-area">
    <div className="container">
      <div className="tittle">
        <div className="top-sale">
          <h4>TOP SALE</h4>
        </div>
        <h3>Featured Product</h3>
      </div>

      <div className="discount-main">
       <div className="discount-content">
    <div className="discount-row">
      <div className="product-main">
        <div className="product">
          <img src={discount_product1} alt="discount product1" />
        </div>
      </div>
    </div>
    <h3>Bar Code Roll</h3>
    <p>All Size Are Available</p>
  </div>

  <div className="discount-content">
    <div className="discount-row">
      <div className="product-main">
        <div className="product">
          <img src={discount_product1} alt="discount product2" />
        </div>
      </div>
    </div>
    <h3>Thermal Roll</h3>
    <p>Best Quality Paper Roll</p>
  </div>

  <div className="discount-content">
    <div className="discount-row">
      <div className="product-main">
        <div className="product">
          <img src={discount_product1} alt="discount product3" />
        </div>
      </div>
    </div>
    <h3>POS Machine</h3>
    <p>Portable Billing Device</p>
  </div>

  <div className="discount-content">
    <div className="discount-row">
      <div className="product-main">
        <div className="product">
          <img src={discount_product1} alt="discount product4" />
        </div>
      </div>
    </div>
    <h3>Label Roll</h3>
    <p>Available in All Sizes</p>
  </div>
      </div>
    </div>
  </div>

  {/* ----- Discount Rating Section ----- */}
  <div className="discount-rating">
    <div className="rating-content">
      <div className="rating-content-inner">
        <h3>Unbeatable Discounts. Limited Time Only!</h3>
        <p>Exclusive Offers You Can’t Miss!</p>
        <button className="fur-btn rating-btn">
          BUY NOW <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
    <div className="rating-img">
      <img src={rating_img} alt="rating5" />
    </div>
  </div>

  {/* ----- Trendy Furniture Section ----- */}
  <div className="trendy-furniture">
    <div className="tf-inner">
      <div className='tf-header'>
        <div className='this-month'><h3>THIS MONTH</h3></div>
        <h2>Trendy Collection</h2>
      </div>

      <div className="tf-product">
        {/* Add your Trendy Furniture products here */}
        <div className='tf-product-main'>
          <div className='product-item'>
            <div className='product-img'><img src={trendyimg1} alt='image6'></img></div>
          </div>
            <div className='ptc-inner'>
              <h4>Barcode Label Stickers (Chromo & DT)</h4>
              <h5>All Size Are Available</h5>
            </div>
        </div>
         <div className='tf-product-main'>
          <div className='product-item'>
            <div className='product-img'><img src={trendyimg1} alt='image7'></img></div>
          </div>
            <div className='ptc-inner'>
              <h4>Barcode Label Stickers (Chromo & DT)</h4>
              <h5>All Size Are Available</h5>
            </div>
        </div>
         <div className='tf-product-main'>
          <div className='product-item'>
            <div className='product-img'><img src={trendyimg1} alt='image8'></img></div>
          </div>
            <div className='ptc-inner'>
              <h4>Barcode Label Stickers (Chromo & DT)</h4>
              <h5>All Size Are Available</h5>
            </div>
        </div>
         <div className='tf-product-main'>
          <div className='product-item'>
            <div className='product-img'><img src={trendyimg1} alt='image9'></img></div>
          </div>
            <div className='ptc-inner'>
              <h4>Barcode Label Stickers (Chromo & DT)</h4>
              <h5>All Size Are Available</h5>
            </div>
        </div>
         <div className='tf-product-main'>
          <div className='product-item'>
            <div className='product-img'><img src={trendyimg1} alt='image10'></img></div>
          </div>
            <div className='ptc-inner'>
              <h4>Barcode Label Stickers (Chromo & DT)</h4>
              <h5>All Size Are Available</h5>
            </div>
        </div>
         <div className='tf-product-main'>
          <div className='product-item'>
            <div className='product-img'><img src={trendyimg1} alt='image11'></img></div>
          </div>
            <div className='ptc-inner'>
              <h4>Barcode Label Stickers (Chromo & DT)</h4>
              <h5>All Size Are Available</h5>
            </div>
        </div>
         <div className='tf-product-main'>
          <div className='product-item'>
            <div className='product-img'><img src={trendyimg1} alt='image12'></img></div>
          </div>
            <div className='ptc-inner'>
              <h4>Barcode Label Stickers (Chromo & DT)</h4>
              <h5>All Size Are Available</h5>
            </div>
        </div>
         <div className='tf-product-main'>
          <div className='product-item'>
            <div className='product-img'><img src={trendyimg1} alt='image13'></img></div>
          </div>
            <div className='ptc-inner'>
              <h4>Barcode Label Stickers (Chromo & DT)</h4>
              <h5>All Size Are Available</h5>
            </div>
        </div>
         <div className='tf-product-main'>
          <div className='product-item'>
            <div className='product-img'><img src={trendyimg1} alt='image19'></img></div>
          </div>
            <div className='ptc-inner'>
              <h4>Barcode Label Stickers (Chromo & DT)</h4>
              <h5>All Size Are Available</h5>
            </div>
        </div>
         <div className='tf-product-main'>
          <div className='product-item'>
            <div className='product-img'><img src={trendyimg1} alt='image20'></img></div>
          </div>
            <div className='ptc-inner'>
              <h4>Barcode Label Stickers (Chromo & DT)</h4>
              <h5>All Size Are Available</h5>
            </div>
        </div>
         <div className='tf-product-main'>
          <div className='product-item'>
            <div className='product-img'><img src={trendyimg1} alt='image21'></img></div>
          </div>
            <div className='ptc-inner'>
              <h4>Barcode Label Stickers (Chromo & DT)</h4>
              <h5>All Size Are Available</h5>
            </div>
        </div>
         <div className='tf-product-main'>
          <div className='product-item'>
            <div className='product-img'><img src={trendyimg1} alt='image22'></img></div>
          </div>
            <div className='ptc-inner'>
              <h4>Barcode Label Stickers (Chromo & DT)</h4>
              <h5>All Size Are Available</h5>
            </div>
        </div>
         <div className='tf-product-main'>
          <div className='product-item'>
            <div className='product-img'><img src={trendyimg1} alt='image23'></img></div>
          </div>
            <div className='ptc-inner'>
              <h4>Barcode Label Stickers (Chromo & DT)</h4>
              <h5>All Size Are Available</h5>
            </div>
        </div>
         <div className='tf-product-main'>
          <div className='product-item'>
            <div className='product-img'><img src={trendyimg1} alt='image24'></img></div>
          </div>
            <div className='ptc-inner'>
              <h4>Barcode Label Stickers (Chromo & DT)</h4>
              <h5>All Size Are Available</h5>
            </div>
        </div>
      </div>
    </div>
  </div>
  {/* furniture ads */}
  <FurnitureAds/>
  <Testimonial/>
  <Recentblog/>
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

export default Home