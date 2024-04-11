import React from 'react'
import './LoginSignup.css'
import Footer from '../components/Footer/Footer'
const loginsignup = () => {
  return (
    <>
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Enter your name'/>
          <input type='email' placeholder='Enter your email'/>
          <input type='password' placeholder='Enter your password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have a account? <span>Login here</span> </p>
        <div className='loginsignnup-agree'>
          <input type="checkbox"  name='' id=''/>
          <p>By Continuing, I agree to the term of use and privacy policies</p>
        </div>
        
       
      </div>
    </div>
      <footer>
        <Footer/>

      </footer>
      
    </>


  )
}

export default loginsignup
