import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
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

  return (
    <div className="app-container">
      <FilterButtons setFilter={setFilter} selectedFilter={filter} />
      {loading ? <Spinner /> : <ProductList products={filteredProducts} />}
    </div>
  );
};

export default App;