// import React, { useContext } from 'react';
// import { ShopContext } from '../../context/ShopContext';
// import './CartItem.css'

// const CartItems = () => {
//   const { products, cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext);

//   console.log(cartItems);

//   const handleRemoveFromCart = (id) => {
//     removeFromCart(id);
    
//   };

//   return (
//     <div className='cart-items'>
//       <div className='cart-items-format-main'>
//         <p>Product</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//         <hr />
//       </div>
//       {products?.map((e) => {
//         if (cartItems[e.id] > 0) {
//           return (
//             <div>
//               <div >
//                 <div className='cart-items-format-main'>
//                   <img src={e.image} alt="" />
//                   <p>{e.name}</p>
//                   <p>{e.new_price}</p>
//                   <button className='cart-item-quantity'>{cartItems[e.id]}</button>
//                   <p>{(cartItems[e.id]) * (e.new_price)}</p>
//                   <div className="Remove">
//                   <img 
//                     src="https://imgs.search.brave.com/7GLwFAFsvR9H2JCuFjsVZ51bx_wraYU4BZoWq0yyb-0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzQ2LzM4LzM5/LzM2MF9GXzM0NjM4/MzkxM19KUWVjbDJE/aHBIeTJZYWtEejF0/M2gwVGszT3Y4aGlr/cS5qcGc"  
//                     onClick={() => handleRemoveFromCart(e.id)}
//                     alt=""
//                   />
//                      </div>
//                   <hr />
//                 </div>
//               </div>
//             </div>
//           );
//         }
//         return null;
//       })}
//       <div className="cartitems-down">
//         <div className="cartitems-total">
//           <h1>carts Total</h1>
//           <div>
//             <div className="cartitems-total-item">
//               <p>subtatal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <p>shipping fee</p>
//               <p>Free</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <h3>Total</h3>
//               <h3>${getTotalCartAmount()}</h3>
//             </div>
//             <hr />
//             <button>Proceed To Checkout</button>
//           </div>
//           </div>
       
//       </div>
//        <div className="caritems-promocode">
//         <p>if you have promocode, Enter it here</p>
//         <div className="cartitems-promobox">
//           <input type="text" />
//           <button className='btn'>submit </button>
//         </div>
//        </div>
//       </div>
    
//   );
// };

// export default CartItems;

import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import './CartItem.css';

const CartItems = () => {
  const { products, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="cart-items">
      {/* Cart Items Header */}
      <div className="cart-items-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {products.length>0 ? products.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id} className="cart-item">
              <div className="cart-items-format-main">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>${product.new_price.toFixed(2)}</p>
                <p className="cart-item-quantity">{cartItems[product.id]}</p>
                <p>${(cartItems[product.id] * product.new_price).toFixed(2)}</p>
                <div className="Remove">
                  <img
                    src="https://imgs.search.brave.com/7GLwFAFsvR9H2JCuFjsVZ51bx_wraYU4BZoWq0yyb-0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzQ2LzM4LzM5/LzM2MF9GXzM0NjM4/MzkxM19KUWVjbDJE/aHBIeTJZYWtEejF0/M2gwVGszT3Y4aGlr/cS5qcGc"
                    alt="Remove Item"
                    onClick={() => handleRemoveFromCart(product.id)}
                  />
                </div>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      }): <p>product not found</p>}

      
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount().toFixed(2)}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount().toFixed(2)}</h3>
            </div>
            <hr />
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>

    
      <div className="cartitems-promocode">
        <p>If you have a promo code, enter it here:</p>
        <div className="cartitems-promobox">
          <input type="text" placeholder="Promo code" />
          <button className="btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
