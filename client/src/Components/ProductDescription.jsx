import React, { useState } from 'react';

const FoodDescription = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [showIngredients, setShowIngredients] = useState(false);

  const IngredientsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Ingredients</h3>
          <button 
            onClick={() => setShowIngredients(false)}
            className="text-3xl hover:text-gray-500"
          >
            &times;
          </button>
        </div>
        
        <div className="prose">
          <h4>Main Ingredients</h4>
          <ul className="list-disc pl-5">
            <li>Fresh Chicken Breast</li>
            <li>Organic Vegetables</li>
            <li>Spices and Herbs</li>
            <li>House Special Sauce</li>
          </ul>
          <p className="mt-4 text-sm text-gray-500">
            * Allergen Information: Contains dairy and gluten.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className='mt-20'>
      <div className='flex gap-3 mb-4'>
        <button 
          className={`btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36 ${
            activeTab === 'description' ? '!bg-gray-900 !text-white' : ''
          }`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button 
          className={`btn_dark_outline !rounded-none !text-xs !py-[6px] w-36 ${
            activeTab === 'reviews' ? '!border-gray-900 !text-gray-900' : ''
          }`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
        <button 
          className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'
          onClick={() => setShowIngredients(true)}
        >
          Ingredients
        </button>
      </div>

      <div className='flex flex-col pb-16'>
        {activeTab === 'description' && (
          <>
            <p className='text-sm mb-4'>
              Enjoy our delicious and freshly prepared Grilled Chicken Meal. Made with organic
              ingredients and seasoned to perfection, it's a perfect blend of flavors.
            </p>
            <ul className='list-disc pl-5 text-sm space-y-2'>
              <li>Freshly Grilled Chicken</li>
              <li>Served with Organic Vegetables</li>
              <li>Available with Rice or Mashed Potatoes</li>
              <li>Delicious House Special Sauce</li>
            </ul>
          </>
        )}

        {activeTab === 'reviews' && (
          <div className='space-y-4'>
            <div className='border-b pb-4'>
              <div className='flex items-center gap-2 mb-2'>
                <span className='font-bold'>Sarah L.</span>
                <div className='flex text-yellow-400'>
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className='text-sm'>
                "Absolutely delicious! The chicken was juicy and flavorful. Will order again!"
              </p>
            </div>
          </div>
        )}
      </div>

      {showIngredients && <IngredientsModal />}
    </div>
  );
};

export default FoodDescription;
