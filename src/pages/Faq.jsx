import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Faq() {
    return (
        <>
            <div>
                <Navbar />
                <div className='about'>
                    <div className='about-text'>
                        <h2>Faq</h2>
                        <p>Home . Faq</p>
                    </div>
                </div>
                <div className='faq'>
                    <div className='faq-container'>
                        <div className='button'>
                            <div className='button-left'>
                                <div className='faq-count'>01</div>
                                <h3>What product do you offer?</h3>
                            </div>
                            <div className='button-right'>
                                <div className='faq-count faq-add'><i class="bi bi-plus"></i></div>
                            </div>
                        </div>
                        <div className='button'>
                            <div className='button-left'>
                                <div className='faq-count'>02</div>
                                <h3>Do you offer customized stickers?</h3>
                            </div>
                            <div className='button-right'>
                                <div className='faq-count faq-add'><i class="bi bi-plus"></i></div>
                            </div>
                        </div>
                        <div className='faq-p'>
                        <p>Yes, we manufacture customized stickers as per your business requirements in different sizes, designs, and materials.</p>
                        </div>
                         <div className='button'>
                            <div className='button-left'>
                                <div className='faq-count'>03</div>
                                <h3>Do your products come with warrenty</h3>
                            </div>
                            <div className='button-right'>
                                <div className='faq-count faq-add'><i class="bi bi-plus"></i></div>
                            </div>
                        </div>
                         <div className='button'>
                            <div className='button-left'>
                                <div className='faq-count'>04</div>
                                <h3>What is the minimum order quantity (MOQ)?</h3>
                            </div>
                            <div className='button-right'>
                                <div className='faq-count faq-add'><i class="bi bi-plus"></i></div>
                            </div>
                        </div>
                         <div className='button'>
                            <div className='button-left'>
                                <div className='faq-count'>05</div>
                                <h3>How long does delivery take?</h3>
                            </div>
                            <div className='button-right'>
                                <div className='faq-count faq-add'><i class="bi bi-plus"></i></div>
                            </div>
                        </div>
                        <div className='button'>
                            <div className='button-left'>
                                <div className='faq-count'>06</div>
                                <h3>What payment option are available?</h3>
                            </div>
                            <div className='button-right'>
                                <div className='faq-count faq-add'><i class="bi bi-plus"></i></div>
                            </div>
                        </div>
                         <div className='button'>
                            <div className='button-left'>
                                <div className='faq-count'>07</div>
                                <h3>Do you supply across india?</h3>
                            </div>
                            <div className='button-right'>
                                <div className='faq-count faq-add'><i class="bi bi-plus"></i></div>
                            </div>
                        </div>
                         <div className='button'>
                            <div className='button-left'>
                                <div className='faq-count'>08</div>
                                <h3>How can i contact customer support?</h3>
                            </div>
                            <div className='button-right'>
                                <div className='faq-count faq-add'><i class="bi bi-plus"></i></div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Faq