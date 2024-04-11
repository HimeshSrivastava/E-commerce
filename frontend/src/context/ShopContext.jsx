// ShopContextProvider.js
import React, { createContext, useState } from 'react';
import TotalData from '../components/TotalData';

export const ShopContext = createContext(null);

const getDefaultCart=()=>{
  let cart={};
  for (let index = 0; index < TotalData.length+1; index++) {
    cart[index]=0;
    
  }
  return cart;
}
const ShopContexttProvider = (props) => {
  const [cartIems,setCartItems]=useState(getDefaultCart())
  
  
  const addToCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    alert("item is added");
  }

  const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    alert("item removed");
  }

  const contextValue = { TotalData,cartIems,addToCart,removeFromCart};
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContexttProvider;
