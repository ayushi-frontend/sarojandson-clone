import React from 'react'
import call from '../assets/call.webp'
import whatsapp from '../assets/WhatsApp_icon.png'

function FloatingIcons() {
  return (
    <>
   <div className="floating-icons">
      <img src={call} alt="Call" className="icon phone" />
      <img src={whatsapp} alt="WhatsApp" className="icon whatsapp" />
    </div>
    </>
  )
}

export default FloatingIcons