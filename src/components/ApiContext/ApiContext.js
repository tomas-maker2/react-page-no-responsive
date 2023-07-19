import React, {createContext, useEffect, useState} from "react";
import axios from 'axios';

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
    const fetchProducts = async () => {
        try {
        const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    fetchProducts();
    }, []);

    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.product.id === product.id);
      
        if (existingItem) {
          const updatedItems = cartItems.map((item) => {
            if (item.product.id === product.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
            return item;
          });
          setCartItems(updatedItems);
        } else {
          setCartItems([...cartItems, { product, quantity: 1 }]);
        }
      };

      const removeFromCart = (productId) => {
        const updatedItems = cartItems.filter((item) => item.product.id !== productId);
        setCartItems(updatedItems);
      };

    return (
        <ApiContext.Provider value={{ products, loading, addToCart, cartItems, removeFromCart }}>
            {children}
        </ApiContext.Provider>
    );
};


export { ApiContext, ApiProvider };