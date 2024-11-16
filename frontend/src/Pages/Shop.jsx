import React from 'react'
import Hero from '../components/Hero/Hero';
// import { useEffect,useState } from 'react';
import Popular from '../components/Popular/Popular';
// import Footer from '../components/Footer/Footer';


const Shop = () => {
  // useEffect(()=>{
  // fetchdata();
  // },[])
  // const fetchdata=async ()=>{
  //   const data1=await fetch("https://d2330pufzy0cvr.cloudfront.net/carousel-products/e36d0467-3aa7-4c6e-a92c-1283b0f6bebe-1E344D27490D741E252B4527A7CC409A.json");
  //   const json1=await data1.json();
  //   console.log(json1);
  // }
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <Hero/>
      <Popular/>
      {/* <Footer/> */}
    </div>
  )
}

export default Shop
