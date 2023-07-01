
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart } from './actions';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div >
      <h1>Home Page</h1>
      <div className='cart'>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <div className='product' key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)} style={{backgroundColor:'black',color:'white'}}>Add to Cart</button>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
      </div>
    </div>
  );
}

export default App;
