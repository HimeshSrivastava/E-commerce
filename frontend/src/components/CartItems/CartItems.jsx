import React, { useContext } from 'react';
import { ShopContext} from '../../context/ShopContext';
// import TotalData from '../TotalData';

const CartItems = () => {
    const { TotalData,cartItems,removeFromCart} = useContext(ShopContext);

    const handleRemoveFromCart = (id) => {
        removeFromCart(id);
        alert("Item removed from cart");
    };

    return (
        <div className='cart-items'>
            <div className='cart-items-format-main'>
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
                <hr />
            </div>
            {TotalData.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                            <div className='cartItems'>
                            <div className='cart-item-format'>
                                <img src={e.image} alt="" />
                                <p>{e.name}</p>
                                <p>{e.new_price}</p>
                                <button className='cart-item-quantity'>{cartItems[e.id]}</button>
                                <p>{e.new_price * cartItems[e.id]}</p>
                                <img src="https://imgs.search.brave.com/7GLwFAFsvR9H2JCuFjsVZ51bx_wraYU4BZoWq0yyb-0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzQ2LzM4LzM5/LzM2MF9GXzM0NjM4/MzkxM19KUWVjbDJE/aHBIeTJZYWtEejF0/M2gwVGszT3Y4aGlr/cS5qcGc" onClick={() => handleRemoveFromCart(e.id)} alt="" />
                                <hr />
                            </div>
                        </div>
                  </div>
                }
                return null;
            })}
        </div>
    );
};

export default CartItems;
