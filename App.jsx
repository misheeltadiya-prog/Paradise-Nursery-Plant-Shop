import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="app">
      {!showProductList && !showCart ? (
        <div className="landing-page">
          <h1>Welcome To Paradise Nursery</h1>
          <p>Your one-stop shop for beautiful plants</p>
          <button onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </div>
      ) : showProductList ? (
        <ProductList 
          setShowProductList={setShowProductList} 
          setShowCart={setShowCart} 
        />
      ) : (
        <CartItem 
          setShowCart={setShowCart} 
          setShowProductList={setShowProductList} 
        />
      )}
    </div>
  );
}

export default App;
