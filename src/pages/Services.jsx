import React from 'react'
import Navbar from '../Components/Navbar'
import service1 from '../assets/services1.jpg'
import service2 from'../assets/service2.webp'
import service3 from '../assets/service3.png'
import service4 from '../assets/service4.jpg'
import service5 from '../assets/service5.jpeg'
import service6 from '../assets/service6.webp'
import service8 from '../assets/service8.jpg'
import service9 from '../assets/service9.jpg'
import service10 from '../assets/service10.jpg'
import service11 from '../assets/service11.jpg'
import service12 from '../assets/service12.jpg'
import service13 from '../assets/service13.png'
import Footer from '../Components/Footer'

function Services() {
    return (
        <>
            <div>
                <Navbar />
                <div className='about'>
                    <div className='about-text'>
                        <h2>Services</h2>
                        <p>Home . Our Services</p>
                    </div>
                </div>
                <div className='our-services'>
                    <div className='row'>
                        <div className='row-inner'>
                            <div className='row-left'>
                                <div className='rf-header'>
                                    <h2>Barcode Printing Solutions</h2>
                                    <h1>01</h1>
                                </div>
                                <p>We provide advanced barcode printers from trusted brands like TSC and Retsol that deliver sharp, durable, and long-lasting labels. These printers are designed to handle high-volume printing and are perfect for retail stores, warehouses, and manufacturing units where efficiency and accuracy matter most.</p>
                            </div>
                            <div className='row-right'>
                                <img src={service1} alt='image9'></img>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='row-right'>
                                <img src={service2} alt='image8'></img>
                        </div>
                    </div>
                     <div className='row'>
                        <div className='row-inner'>
                            <div className='row-right'>
                                <img src={service3} alt='image7'></img>
                            </div>
                             <div className='row-left'>
                                <div className='rf-header'>
                                    <h2>POS & Billing Solutions</h2>
                                    <h1>02</h1>
                                </div>
                                <p>Our premium POS and thermal billing rolls ensure smooth and jam-free printing for all kinds of billing systems. With high clarity and durability, these rolls are widely used in supermarkets, restaurants, shops, and offices to make billing faster and more reliable.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='row-inner'>
                            <div className='row-left'>
                                <div className='rf-header'>
                                    <h2>Barcode Printing Solutions</h2>
                                    <h1>03</h1>
                                </div>
                                <p>We offer a wide range of barcode scanners including handheld, wired, and wireless models. Built for speed and accuracy, these scanners help businesses capture data instantly, reduce manual errors, and improve checkout or inventory management efficiency.</p>
                            </div>
                            <div className='row-right'>
                                <img src={service4} alt='image6'></img>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='row-right'>
                                <img src={service5} alt='image5'></img>
                        </div>
                    </div>
                     <div className='row'>
                        <div className='row-inner'>
                            <div className='row-right'>
                                <img src={service6} alt='image4'></img>
                            </div>
                            <div className='row-left'>
                                <div className='rf-header'>
                                    <h2>Labeling Solutions</h2>
                                    <h1>04</h1>
                                </div>
                                <p>From plain barcode labels to custom-printed stickers, we provide labeling solutions that fit every business need. Whether it’s for product tracking, inventory management, or brand identity, our high-quality labels ensure clear prints and long-lasting use.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='row-right'>
                                <img src={service8} alt='image3'></img>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='row-inner'>
                            <div className='row-left'>
                                <div className='rf-header'>
                                    <h2>Barcode Printing Solutions</h2>
                                    <h1>01</h1>
                                </div>
                                <p>We provide advanced barcode printers from trusted brands like TSC and Retsol that deliver sharp, durable, and long-lasting labels. These printers are designed to handle high-volume printing and are perfect for retail stores, warehouses, and manufacturing units where efficiency and accuracy matter most.</p>
                            </div>
                            <div className='row-right'>
                                <img src={service9} alt='image2'></img>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='row-inner'>
                            <div className='row-right'>
                                <img src={service10} alt='image1'></img>
                            </div>
                            <div className='row-left'>
                                <div className='rf-header'>
                                    <h2>Customized Sticker Printing</h2>
                                    <h1>06</h1>
                                </div>
                                <p>We design and supply personalized stickers such as product labels and Veg logo stickers that help businesses stand out. With clear prints and strong adhesive, our stickers enhance product presentation and add professional branding.</p>
                            </div>
                        </div>
                    </div>
                      <div className='row'>
                        <div className='row-inner'>
                             <div className='row-left'>
                                <div className='rf-header'>
                                    <h2>Customized Sticker Printing</h2>
                                    <h1>06</h1>
                                </div>
                                <p>We design and supply personalized stickers such as product labels and Veg logo stickers that help businesses stand out. With clear prints and strong adhesive, our stickers enhance product presentation and add professional branding.</p>
                            </div>
                            <div className='row-right'>
                                <img src={service11} alt='service-image'></img>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='row-inner'>
                            <div className='row-right'>
                                <img src={service12} alt='about-image'></img>
                            </div>
                            <div className='row-left'>
                                <div className='rf-header'>
                                    <h2>Customized Sticker Printing</h2>
                                    <h1>06</h1>
                                </div>
                                <p>We design and supply personalized stickers such as product labels and Veg logo stickers that help businesses stand out. With clear prints and strong adhesive, our stickers enhance product presentation and add professional branding.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='row-right'>
                                <img src={service13} alt='imageabout'></img>
                        </div>
                    </div>
                   
                   
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Services