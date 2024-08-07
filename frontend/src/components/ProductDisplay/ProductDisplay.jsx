import React from 'react'
import './ProductDisplay.css'
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import Footer from '../Footer/Footer';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div>
    <div className='productdisplay'>
      <div className='productdisplay-left'>
      <div className='productdisplay-img-list'>
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        </div>
        <div className='productdisplay-img'>
        <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className='productdisplay-right'>
      <h1>{product.name}</h1>
      <div className='productdisplay-right-star'>
        <img src="http://www.clipartbest.com/cliparts/9iR/Lzj/9iRLzjKkT.png" alt="" />
        <img src="http://www.clipartbest.com/cliparts/9iR/Lzj/9iRLzjKkT.png" alt="" />
        <img src="http://www.clipartbest.com/cliparts/9iR/Lzj/9iRLzjKkT.png" alt="" />
        <img src="http://www.clipartbest.com/cliparts/9iR/Lzj/9iRLzjKkT.png" alt="" />
        <img src="http://www.clipartbest.com/cliparts/9iR/Lzj/9iRLzjKkT.png" alt="" />
        <p>(122)</p>
      </div>
      <div className='productdisplay-right-prices'>
      <div className='productdisplay-right-prices new'>{product.new_price}</div>
      <div className='productdisplay-right-prices old'>{product.old_price}</div>
     </div>
     <div className='productdisplay-right-description'>
     <h1>Description</h1>
     The 1st Dior Forever liquid highlighter, a true concentration of light in a bottle, brightens and enhances the complexion with a spectacular, instant, and long-lasting glow.

     <div className='productdisplay-right-size'>
     
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        </div>
      </div>
      </div>

    </div>
      <Footer/>
    </div>
  )
}

export default ProductDisplay
