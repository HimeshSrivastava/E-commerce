import React from 'react'
// import './Hero.css'

const Hero = () => {
  return (
    <div className='flex gap-7 text-6xl font-extrabold items-center justify-center'>
      <div className="flex flex-col gap-8 items-center justify-center">
       <h2>NEW ARRIVALS ONLY</h2>
       <div>
        <div className="flex gap-4">
            <p>New</p>
            <img className='w-28 h-20'  src="https://i.pinimg.com/originals/c8/2d/de/c82dde2e0b94cdb3fe7c9a56919ef154.gif" alt="hii" />
        </div>
        <p >Collections</p>
        <p>for everyone</p>
       </div>
       <div className="bg-red-500 text-white rounded-sm text-4xl">
        Lastest Collection
        <img src="" alt="" />
       </div>
      </div>
      <div className="flex flex-col gap-8 items-center justify-center">
      <img src="https://www.pngmart.com/files/15/Beautiful-Girl-Holding-Shopping-Bag-Transparent-PNG.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
