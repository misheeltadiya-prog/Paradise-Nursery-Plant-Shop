import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plantsArray = [
  { id: 1, name: "Snake Plant", category: "Indoor", price: 25, img: "https://picsum.photos/id/1015/300/200" },
  { id: 2, name: "Monstera", category: "Indoor", price: 45, img: "https://picsum.photos/id/133/300/200" },
  { id: 3, name: "Fiddle Leaf Fig", category: "Indoor", price: 65, img: "https://picsum.photos/id/201/300/200" },
  { id: 4, name: "Peace Lily", category: "Indoor", price: 30, img: "https://picsum.photos/id/251/300/200" },
  { id: 5, name: "ZZ Plant", category: "Indoor", price: 35, img: "https://picsum.photos/id/180/300/200" },
  { id: 6, name: "Rubber Plant", category: "Indoor", price: 40, img: "https://picsum.photos/id/201/300/200" },
  { id: 7, name: "Aloe Vera", category: "Outdoor", price: 20, img: "https://picsum.photos/id/251/300/200" },
];

const ProductList = ({ setShowProductList, setShowCart }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div>
          <button onClick={() => setShowCart(true)}>Cart ({cart.length})</button>
          <button onClick={() => setShowProductList(false)}>Home</button>
        </div>
      </nav>

      <h1>Our Plants</h1>
      
      {["Indoor", "Outdoor"].map(category => (
        <div key={category}>
          <h2>{category} Plants</h2>
          <div className="product-grid">
            {plantsArray
              .filter(plant => plant.category === category)
              .map(plant => (
                <div key={plant.id} className="product-card">
                  <img src={plant.img} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button onClick={() => dispatch(addItem(plant))}>
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
