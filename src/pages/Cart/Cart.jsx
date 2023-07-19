import React, { useContext } from 'react';
import { ApiContext } from '../../components/ApiContext/ApiContext';
import './cart.css'; 

const Cart = () => {
  const { cartItems, removeFromCart, addToCart } = useContext(ApiContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId, increment) => {
    const item = cartItems.find((item) => item.product.id === productId);
    if (item) {
      if (increment) {
        addToCart(item.product);
      } else {
        removeFromCart(productId);
      }
    }
  };

  return (
    <div className="cart-container"> 
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No hay nada en su carrito</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.product.id} className="cart-item"> 
            <img src={item.product.image} alt="" />
            <h3>{item.product.title}</h3>
            <p className="price">Price: {item.product.price}</p> 
            <p className="category">Category: {item.product.category}</p> 
            <p>Quantity: {item.quantity}</p>
            <div className="botes">
              <div className="mas_menos">
            <button onClick={() => handleQuantityChange(item.product.id, true)}>+</button>
            <button onClick={() => handleQuantityChange(item.product.id, false)}>-</button>
              </div>
              <div className="remove">
            <button onClick={() => handleRemoveFromCart(item.product.id)}>Remove from Cart</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
