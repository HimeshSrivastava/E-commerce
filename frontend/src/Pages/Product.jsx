// Product.js
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext'; // Correct the import path
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/Breadcrums/Breadcrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';

const Product = () => {
  const { TotalData } = useContext(ShopContext);
  const { productId } = useParams();
  const product = TotalData.find((e) => e.id === Number(productId));

  return (
    <div>
     <Breadcrums product={product} />
     <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
