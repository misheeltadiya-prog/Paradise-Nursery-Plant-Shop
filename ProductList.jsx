import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Snake Plant', price: 25, category: 'Indoor', img: 'https://picsum.photos/id/1015/300/200' },
  { id: 2, name: 'Monstera', price: 45, category: 'Indoor', img: 'https://picsum.photos/id/133/300/200' },
  { id: 3, name: 'Fiddle Leaf Fig', price: 65, category: 'Indoor', img: 'https://picsum.photos/id/201/300/200' },
  { id: 4, name: 'Peace Lily', price: 30, category: 'Indoor', img: 'https://picsum.photos/id/251/300/200' },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2>Our Plants</h2>
        <Link to="/cart">
          Cart ({cart.length})
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <img src={product.img} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button 
              onClick={() => handleAddToCart(product)}
              style={{ padding: '10px 20px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
