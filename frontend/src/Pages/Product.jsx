// Product.js
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext'; // Correct the import path
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/Breadcrums/Breadcrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';

const Product = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = products.find((e) => e.id === Number(productId));

  if (!product) {
    return (
      <div>
        <h2>Product Not Found</h2>
        <p>Sorry, the product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div>
     <Breadcrums product={product} />
     <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
