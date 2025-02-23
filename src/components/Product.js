import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Product = ({ product }) => {
  const { cart, addToCart, updateQuantity, removeFromCart } = useContext(CartContext);
  const cartItem = cart.find((item) => item.id === product.id);

  console.log(`Rendering Product: ${product.title}, Image: ${product.image}`); // Проверка

  return (
    <div className="product">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      {cartItem ? (
        <div className="cart-controls">
          <button onClick={() => updateQuantity(product.id, -1)}>-</button>
          <span>{cartItem.quantity}</span>
          <button onClick={() => updateQuantity(product.id, 1)}>+</button>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </div>
      ) : (
        <button onClick={() => addToCart(product)} className="add-to-cart">Add to cart</button>
      )}
    </div>
  );
};

export default Product;
