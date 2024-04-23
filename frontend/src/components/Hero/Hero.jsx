import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
       <h2>NEW ARRIVALS ONLY</h2>
       <div>
        <div className="hero-hand-icon">
            <p>New</p>
            <img src="https://i.pinimg.com/originals/c8/2d/de/c82dde2e0b94cdb3fe7c9a56919ef154.gif" alt="hii" />
        </div>
        <p>Collections</p>
        <p>for everyone</p>
       </div>
       <div className="hero-lastest-btn">
        Lastest Collection
        <img src="" alt="" />
       </div>
      </div>
      <div className="hero-right">
      <img src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/young-woman-shopping-isolated-on-white-background_HarwcTr4Fg_SB_PM.jpg" alt="" />
      </div>
    </div>
  )
}

export default Hero
