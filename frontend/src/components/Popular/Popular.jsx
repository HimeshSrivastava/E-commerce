import React, { useContext } from 'react'
// import data from '../data'
import Item from '../Item/Item'
import './Popular.css'
import Footer from '../Footer/Footer'
import { ShopContext } from '../../context/ShopContext'


const Popular = () => {
  const { products }=useContext(ShopContext);
  return (
    <div className="popular">
      <h1>Popular product</h1>
      <hr/>
      <div className="popular-item">
        {/* {data.map((item,i)=>{
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })} */}
         {products.map((item,i)=>{
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    <Footer/>
    </div>
  )
}

export default Popular

