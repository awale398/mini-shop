import { useEffect, createContext, useState } from "react";

export const ShopContext = createContext(null);

// Initializes the cart as an empty object
const getDefaultCart = () => {
    return {};
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart()); // State to store cart items
    const [all_products, setAll_products] = useState([]); // State to store all products

    useEffect(() => {
        // Fetch all products from backend
        fetch("http://localhost:4000/allproducts")
            .then((response) => response.json())
            .then((data) => setAll_products(data))
            .catch((error) => console.error("Fetch error:", error));

        // Fetch cart data if user is authenticated
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => response.json())
            .then((data) => setCartItems(data))
            .catch((error) => console.error("Fetch error:", error));
        }
    }, []);

    // Function to add an item to the cart
    const addToCart = (itemId) => {
        console.log("Attempting to add item:", itemId);
    
        if (!itemId) {
            console.error("Error: itemId is undefined");
            return;
        }
    
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    
        if (localStorage.getItem("auth-token")) {
            const payload = { itemId: itemId };
            console.log("Sending to backend:", JSON.stringify(payload));
    
            fetch("http://localhost:4000/addtocart", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })
            .then((response) => response.json())
            .then((data) => console.log("Server Response:", data))
            .catch((error) => console.error("Fetch error:", error));
        }
    };
    
    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            // Ensure we don't go below 0
            if (updatedCart[itemId] > 1) {
                updatedCart[itemId] -= 1;
            } else {
                // Optionally remove the item from the cart if it reaches 0
                delete updatedCart[itemId];
            }
            return updatedCart;
        });
    
        if (localStorage.getItem('auth-token')) {
            fetch("http://localhost:4000/removefromcart", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemId: itemId }),
            })
            .then((response) => response.json())
            .then((data) => console.log("Server Response:", data))
            .catch((error) => console.error("Fetch error:", error));
        }
    };
    

    // Calculate total cart amount based on product prices
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        console.log(cartItems); // Debug the cartItems object
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };
   

    // Calculate total number of items in the cart
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    // Context value containing all functions and states
    const contextValue = { 
        getTotalCartItems, 
        getTotalCartAmount, 
        all_products, 
        cartItems, 
        addToCart, 
        removeFromCart 
    };
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
