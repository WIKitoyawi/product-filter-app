import React from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-info">
            <p className="product-category">{product.category}</p>
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;