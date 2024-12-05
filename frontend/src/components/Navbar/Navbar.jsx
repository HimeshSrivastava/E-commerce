import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
export default function Navbar() {
    const [menu,setMenu]=useState('shop');
  return (
      <div className='navbar flex justify-between items-center p-4 bg-gray-100 shadow-md'>
        <div className="nav-logo">
          <img src="https://cdn-icons-png.freepik.com/256/11137/11137664.png?ga=GA1.1.1340374240.1733212174&semt=ais_hybrid" alt="logo"  />
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
        <Link to="/login"><button>Login</button></Link>
      </div>
        </div>
    </div>
  )
}
