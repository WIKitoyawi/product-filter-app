import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Spinner from './components/Spinner';
import FilterButtons from './components/FilterButtons';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(product => product.category === filter);

  console.log('Filtered Products:', filteredProducts); // Проверка

  return (
    <CartProvider>
      <div className="app-container">
        <FilterButtons setFilter={setFilter} selectedFilter={filter} />
        {loading ? <Spinner /> : <ProductList products={filteredProducts} />}
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
