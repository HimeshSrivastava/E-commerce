import React,{useContext} from 'react'
import './ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/Item/Item'
import Footer from '../components/Footer/Footer'

const ShopCategory = (props) => {
  const {TotalData} =useContext(ShopContext);
  return (
    <div className='sub-category'>
      {/* <img src="https://imgs.search.brave.com/qaMBmBYCaY6yuMuDnM4G4l6rYCVK8P4XSgh8FEUQVXs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9tc3h4N0ozdGdm/OEJZOWo0U1JwTGpN/Z21yLW89LzM5NzR4/Mjk4OjEwNDA3eDY3/MzEvZml0LWluLzUw/MHg1MDAvcHJvamVj/dHMtZmlsZXMvNS81/MzEvNTMxOTUvNzUy/ZTQ1N2MtOTZlMi00/MjFmLTgxZTItYWUy/NjA1NmI1MGU5Lmpw/Zw" alt="" /> */}
      <div className='subcategory-indexSort'> 
      <p>
        <span>New collection of primitive and natural product</span> make your skin good.
      </p>
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
