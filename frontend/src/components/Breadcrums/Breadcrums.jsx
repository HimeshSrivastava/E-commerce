import React from 'react'
import './Breadcrums.css'

const Breadcrums = (props) => {
    const {product}= props;
      return (
    <div className='breadcrum'>
      Home <img src="" alt="" /> shop <img src="" alt="" /> {product.category} <img src="" alt="" /> {product.name} <img src="" alt="" />
    </div>
  )
}

export default Breadcrums
