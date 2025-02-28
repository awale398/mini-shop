import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { TbTrash, TbWallet } from "react-icons/tb";
import axios from 'axios';
import { motion } from 'framer-motion';

const CartItems = () => {
    // Accessing context values for cart operations
    const { getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(ShopContext);
    
    // State to store the user's phone number for payment
    const [phoneNumber, setPhoneNumber] = useState('');
    // State to manage loading status during checkout
    const [loading, setLoading] = useState(false);
    // State to store messages for user feedback
    const [message, setMessage] = useState('');

    // Function to handle the checkout process
    const handleCheckout = async () => {
        if (!phoneNumber) { // Ensure phone number is provided
            setMessage('Please enter your phone number.');
            return;
        }

        setLoading(true); // Set loading state while processing
        const amount = getTotalCartAmount().toString(); // Convert total amount to string

        try {
            // Sending payment request to backend API
            const response = await axios.post('http://localhost:4000/stkpush', {
                phone: phoneNumber,
                amount: amount,
            });

            if (response.data) {
                setMessage('Payment request sent. Please check your phone to complete the payment.');
            } else {
                setMessage('Failed to initiate payment. Please try again.');
            }
        } catch (error) {
            console.error('Error during checkout:', error);
            setMessage('Failed to initiate payment. Please try again.');
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <section className='max_padd_container pt-16'>
            {/* Header Section */}
            <div className='mt-12 mb-8 flex items-center gap-2'>
                <h1 className='text-2xl font-bold text-red-600'>Secure Checkout</h1>
            </div>

            {/* Cart Items List */}
            <div className='grid gap-4 mb-12'>
                {all_products.map((e) => {
                    if (cartItems[e.id] > 0) { // Only display products that are in the cart
                        return (
                            <motion.div 
                                key={e.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className='flex items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow'
                            >
                                {/* Product Image */}
                                <img 
                                    src={e.image} 
                                    alt='product' 
                                    className='w-12 h-12 object-cover rounded-lg border'
                                />
                                
                                {/* Product Details */}
                                <div className='flex-1 ml-4'>
                                    <h3 className='font-medium line-clamp-2'>{e.name}</h3>
                                    <div className='flex items-center gap-4 mt-2 text-sm text-gray-600'>
                                        <span>Kes{e.new_price}</span>
                                        <span className='flex items-center'>
                                            Qty: {cartItems[e.id]}
                                        </span>
                                        <span className='ml-auto font-semibold'>
                                            Kes{e.new_price * cartItems[e.id]}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Remove Item Button */}
                                <button 
                                    onClick={() => removeFromCart(e.id)}
                                    className='p-2 text-red-500 hover:text-red-700 transition-colors'
                                >
                                    <TbTrash size={20} />
                                </button>
                            </motion.div>
                        );
                    }
                    return null;
                })}
            </div>

            {/* Checkout Summary Section */}
            <div className='bg-gray-100 p-6 rounded-2xl shadow-md border border-red-300'>
                <div className='space-y-4 mb-6'>
                    <div className='flex justify-between'>
                        <span className='text-gray-600'>Subtotal:</span>
                        <span className='font-semibold'>{getTotalCartAmount()}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-gray-600'>Shipping:</span>
                        <span className='text-red-600'>Free</span>
                    </div>
                    <hr className='border-red-300' />
                    <div className='flex justify-between text-lg font-bold'>
                        <span>Total:</span>
                        <span className='text-red-600'>Kes{getTotalCartAmount()}</span>
                    </div>
                </div>

                {/* Payment Input and Button */}
                <div className='space-y-6'>
                    {/* Phone Number Input */}
                    <div className='relative'>
                        <input
                            type='tel'
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder='2547XXXXXXXX'
                            className='w-full p-3 rounded-lg border-2 border-red-300 focus:border-red-600 focus:ring-2 focus:ring-red-300 transition-all'
                        />
                        <span className='absolute right-3 top-3 text-red-600'>
                            <TbWallet size={24} />
                        </span>
                    </div>

                    {/* Checkout Button */}
                    <motion.button
                        onClick={handleCheckout}
                        disabled={loading}
                        whileTap={{ scale: 0.98 }}
                        className='w-full bg-red-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-red-700 transition-colors disabled:opacity-70'
                    >
                        {loading ? (
                            <>
                                <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin' />
                                Processing...
                            </>
                        ) : (
                            <>Complete Payment</>
                        )}
                    </motion.button>

                    {/* Message Display for Success or Failure */}
                    {message && (
                        <div className={`p-3 rounded-lg text-sm ${
                            message.includes('sent') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                            {message}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CartItems;
