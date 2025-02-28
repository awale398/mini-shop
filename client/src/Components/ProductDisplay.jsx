import React, { useContext } from 'react';
import { MdStar } from 'react-icons/md';
import { ShopContext } from '../Context/ShopContext';
import food_img_1 from '../assets/food_img_1.png';
import food_img_2 from '../assets/food_img_2.png';
import food_img_3 from '../assets/food_img_3.png';
import food_img_4 from '../assets/food_img_4.png';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    // Check if product is undefined
    if (!product) {
        return <p className="text-center text-gray-500">Loading or product not found...</p>;
    }

    return (
        <section className="container mx-auto py-8 px-4">
            <div className="flex flex-col xl:flex-row gap-10">
                {/* Left Section - Food Images */}
                <div className="flex gap-4 xl:flex-1">
                    <div className="flex flex-col gap-3 w-24">
                        {[food_img_1, food_img_2, food_img_3, food_img_4].map((img, index) => (
                            <img key={index} src={img} alt={`food-preview-${index}`} className="cursor-pointer rounded-md shadow-md hover:opacity-75 transition" />
                        ))}
                    </div>
                    <div className="flex-1 flex items-center">
                        <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" />
                    </div>
                </div>

                {/* Right Section - Food Details */}
                <div className="flex flex-col xl:flex-[1.5] space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-800">{product.name}</h3>
                    
                    <div className="flex items-center gap-2 text-yellow-500 text-lg">
                        {[...Array(5)].map((_, index) => <MdStar key={index} />)}
                        <span className="text-gray-500 text-sm">(111 reviews)</span>
                    </div>

                    <div className="flex items-center gap-4 text-lg font-medium">
                        <span className="line-through text-gray-400">Kes{product.old_price}</span>
                        <span className="text-green-600 text-2xl font-semibold">Kes{product.new_price}</span>
                    </div>

                    {/* Ingredients */}
                    <div>
                        <h4 className="text-lg font-semibold">Ingredients:</h4>
                        <p className="text-gray-600">{product.ingredients?.join(', ') || 'No ingredients listed'}</p>
                    </div>

                    {/* Portion Size */}
                    <div>
                        <h4 className="text-lg font-semibold">Portion Size:</h4>
                        <div className="flex gap-4 mt-2">
                            {['Small', 'Medium', 'Large'].map((size, index) => (
                                <button key={index} className="border-2 border-gray-300 px-4 py-2 rounded-md hover:border-gray-600 transition">
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-3 max-w-md">
                        <button onClick={() => addToCart(product.id)} className="bg-gray-900 text-white py-3 rounded-md uppercase tracking-widest hover:bg-gray-700 transition">
                            Add to Cart
                        </button>
                        
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default ProductDisplay;
