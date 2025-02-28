import React, { useEffect, useState } from "react";
import axios from "axios";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:4000/cart");
        setCartItems(response.data);
      } catch (err) {
        setError("Failed to fetch cart items");
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  if (loading) return <p className="text-blue-500 text-lg">Loading cart...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-lg flex justify-between items-center">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
            <h2 className="text-lg">{item.name}</h2>
            <p className="text-red-500 font-bold">${item.price}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">Your cart is empty</p>
      )}
    </div>
  );
};

export default CartPage;
