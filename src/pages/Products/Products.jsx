import React, { useContext, useState } from 'react';
import './products.css'
import { Link } from 'react-router-dom';
import { ApiContext } from '../../components/ApiContext/ApiContext';

const Products = () => {
  const { products, loading, addToCart } = useContext(ApiContext);
  const [selectedCategory, setSelectedCategory] = useState('All'); // Establecer "All" como valor inicial
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  if (loading) {
    return <p>Loading...</p>;
  }

  const categoryOptions = ['All', ...new Set(products.map((product) => product.category))];

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === 'All' || product.category.toLowerCase() === selectedCategory.toLowerCase();
    const priceMatch =
      (!minPrice || product.price >= parseFloat(minPrice)) &&
      (!maxPrice || product.price <= parseFloat(maxPrice));

    return categoryMatch && priceMatch;
  });

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setMinPrice('');
    setMaxPrice('');
  };

  return (
    <div className="products">
      <div className="contenedor_inputs">

      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        >
        {categoryOptions.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        placeholder="Min Price"
        />

      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        placeholder="Max Price"
        />

        </div>
      <div className="right-l-2">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <img src={product.image} className='img_api' alt="" />
            <h2>
              <Link className='titulo_api' to={`/products/${product.id}`}>{product.title}</Link>
            </h2>
            <p className='precio_api'>${product.price}</p>
            <p className='categoria_api'>{product.category}</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;