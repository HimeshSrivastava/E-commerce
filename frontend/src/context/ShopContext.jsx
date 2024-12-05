import React, { createContext, useEffect, useState } from 'react';
// import TotalData from '../components/TotalData'; // Assuming TotalData is a component
import { apiUrl } from '../constants/ApiUrl';
import axios from'axios';

export const ShopContext = createContext(null);

const getDefaultCart = (length) => {
  let cart = {};
  // for (let index = 0; index < TotalData.length + 1; index++) {
  //   cart[index] = 0;
  // }
  for (let index = 0; index < length+1 ; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);

  if(loading){
    <div>
    Loading...
    </div>
  }

  useEffect(()=>{
    const fetchData =async()=>{
         try {
          const result=await axios.get(`${apiUrl}/getall`);
          if(result?.data){
            console.log(result.data);
            setCartItems(getDefaultCart(result.data.length));
            setProducts(result.data);
            setLoading(false);
          }
         } catch (error) {
          console.log(error);
          setLoading(false);
         }
    }
    fetchData();
  },[])


  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    alert("item is added");
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    alert("item removed");
  };
   
  const getTotalCartAmount = () => {
    
    let totalAmount = 0;
  
    // Iterate over each item ID in cartItems (assuming IDs are used as keys)
    //I have done above mistake so, put the above words in your mind and dont reapeat it
    for (const itemId in cartItems) {
      
      if (cartItems[itemId] > 0) {
        
        // const itemInfo = TotalData.find(product => product.id === Number(itemId));
        const itemInfo = products.find(product => product.id === Number(itemId));
        
       
          totalAmount += itemInfo.new_price * cartItems[itemId];
        
      }
    }
  
    return totalAmount;
  };
  

  // const contextValue = { TotalData, cartItems, addToCart, removeFromCart,getTotalCartAmount };
  const contextValue = { products, cartItems, addToCart, removeFromCart,getTotalCartAmount };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
