import React,{useContext} from 'react'
import './ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/Item/Item'
import Footer from '../components/Footer/Footer'

const ShopCategory = (props) => {
  const {TotalData} =useContext(ShopContext);

  

  return (
    <div className='sub-category'>
     <img src="https://img.freepik.com/free-photo/online-purchasing-payment-e-commerce-banking_53876-127604.jpg?size=626&ext=jpg" className='Banner' alt="logo" />
      <div className='subcategory-indexSort'> 
      <div className='subcategory-sort'>
         {/* sort by <img src="" alt="" /> */}
      </div>
      </div>
      <div className="subcategory-products">
        {TotalData.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
       
          }
          else{
            return null;
          }
            
        })

        }
      </div>
      <Footer/>
    </div>
  )
}

export default ShopCategory
