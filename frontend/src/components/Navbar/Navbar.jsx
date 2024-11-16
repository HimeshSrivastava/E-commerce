import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
export default function Navbar() {
    const [menu,setMenu]=useState('shop');
  return (
      <div className='navbar flex justify-between items-center p-4 bg-gray-100 shadow-md'>
        <div className="nav-logo">
          <img src="https://imgs.search.brave.com/d0w7KkjvJqdzVcrjWsX6BxT495E0DByP2WcMf43u-Ac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzI3LzA0Lzc4/LzM2MF9GXzEyNzA0/Nzg4MV9qSm1GUmhV/b1hoN0RoSHJQa1FP/NjRROVBPSFRVQ2lP/bC5qcGc" alt="logo"  />
          <p >SHOPPER</p>
        </div>
        <div className="label">

      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link to="/mens">Men Product</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link to="/womens">Women Product</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to="/kids">Kids Product</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart ">
        <Link to="/cart"><img src="https://www.logolynx.com/images/logolynx/b2/b23666d57f4e17102209423105dfc442.png" alt="" /></Link>
      </div>
        </div>
    </div>
  )
}
