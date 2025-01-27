import React from 'react';
import './FilterButtons.css';

const FilterButtons = ({ setFilter, selectedFilter }) => {
  const categories = ['All', "men's clothing", "women's clothing", 'electronics', 'jewelery'];

  return (
    <div className="filter-buttons">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setFilter(category)}
          className={`filter-button ${selectedFilter === category ? 'active' : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;