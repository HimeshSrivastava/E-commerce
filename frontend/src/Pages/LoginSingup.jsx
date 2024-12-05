import React, { useRef, useState } from 'react';
import './LoginSignup.css';
import Footer from '../components/Footer/Footer';
import { apiUrl } from '../constants/ApiUrl';
import axios from 'axios';

const Loginsignup = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await axios.post(`${apiUrl}/login`, { email, password });
      console.log(response.data);
      if (response.data) {
        alert('Login successful');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Login failed. Please check your credentials.');
    }
  };

  const handleSignup = async () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!name || !email || !password) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/addUser`, { name, email, password });
      console.log(response.data);
      if (response.data) {
        alert('Signup successful');
      }
    } catch (err) {
      console.error('Signup error:', err);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>{isLogin ? 'Sign Up' : 'Login'}</h1>
          <div className="loginsignup-fields">
            {isLogin && <input ref={nameRef} type="text" placeholder="Enter your name" />}
            <input ref={emailRef} type="email" placeholder="Enter your email" />
            <input ref={passwordRef} type="password" placeholder="Enter your password" />
          </div>
          <button onClick={isLogin ? handleSignup : handleSubmit}>Continue</button>
          <p className="loginsignup-login">
            {isLogin ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span onClick={handleLoginToggle}>
              {isLogin ? 'Login here' : 'Sign up here'}
            </span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" />
            <p>By Continuing, I agree to the terms of use and privacy policies</p>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Loginsignup;
