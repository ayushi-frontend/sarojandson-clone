import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../assets/homepagebanner1.png';
import slider2 from '../assets/homepagebanner2.png';
import slider3 from '../assets/homepagebanner3.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Home_Page_Slider() {

useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed (in ms)
      once: true      // scroll par ek hi baar chale
    });
  }, []);
  
  return (
    // <>
    // <div className='home-page'>
    //   <div className='home-page-inner'>
    //     <div className='home-page-left'>
    //       <div className='new-arrival-main'>
    //       <div className='new-arrival'>NEW ARRIVAL....</div>
    //       </div>
    //       <h1>Custom Barcode Stickers For Your Bussiness.</h1>
    //       <p>From retail to warehouse inventory,our customizable barcode Stickers are crafted to match your exact bussiness needs,offering both quality and affordable</p>
    //       <div className='home-page-btn'>
    //         <button className='btn1'>BUY NOW <i class="bi bi-chevron-right"></i></button>
    //         <button className='btn2'>VIEW DETAILS <i class="bi bi-chevron-right"></i></button>
    //       </div>
    //     </div>
    //     <div className='home-page-right'>
    //       <img src={slider1}></img>
    //     </div>
    //   </div>
    // </div>
    // </>
    <>
      <div className='slider'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='home-page-inner'>
              <div className='home-page-left'>
                <div className='new-arrival-main'>
                  <div className='new-arrival'>NEW ARRIVAL....</div>
                </div>
                <h1 data-aos="fade-up">Custom Barcode Stickers For Your Bussiness.</h1>
                <p data-aos="fade-up">From retail to warehouse inventory,our customizable barcode Stickers are crafted to match your exact bussiness needs,offering both quality and affordable</p>
                <div className='home-page-btn'>
                  <button className='btn1'>BUY NOW <i class="bi bi-chevron-right"></i></button>
                  <button className='btn2'>VIEW DETAILS <i class="bi bi-chevron-right"></i></button>
                </div>
              </div>
              <div className='home-page-right'>
                <img src={slider1}></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='home-page-inner'>
              <div className='home-page-left'>
                <div className='new-arrival-main'>
                  <div className='new-arrival'>NEW ARRIVAL....</div>
                </div>
                <h1 data-aos="fade-up"> High Quality Wax Ribbons for Perfect Printing </h1>
                <p data-aos="fade-up">Experience smooth and consistent printing with our premium wax ribbons – delivering sharp, clear, and smudge-free prints every time, all at highly affordable prices.</p>
                <div className='home-page-btn'>
                  <button className='btn1'>BUY NOW <i class="bi bi-chevron-right"></i></button>
                  <button className='btn2'>VIEW DETAILS <i class="bi bi-chevron-right"></i></button>
                </div>
              </div>
              <div className='home-page-right'>
                <img src={slider2}></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='home-page-inner'>
              <div className='home-page-left'>
                <div className='new-arrival-main'>
                  <div className='new-arrival'>NEW ARRIVAL....</div>
                </div>
                <h1 data-aos="fade-up">Clear Prints Smooth Billing. Every Time.</h1>
                <p data-aos="fade-up">Our premium POS and Thermal Billing Rolls ensure crisp, clear, and jam-free printing for hassle-free transactions. Perfect for retail stores, restaurants, and billing counters.</p>
                <div className='home-page-btn'>
                  <button className='btn1'>BUY NOW <i class="bi bi-chevron-right"></i></button>
                  <button className='btn2'>VIEW DETAILS <i class="bi bi-chevron-right"></i></button>
                </div>
              </div>
              <div className='home-page-right'>
                <img src={slider3} alt='image'></img>
              </div>
            </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Home_Page_Slider