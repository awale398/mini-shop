import React, { useEffect, useState } from 'react';
import { TbTrash } from 'react-icons/tb';

const ListProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/allproducts');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const removeProduct = async (id) => {
    try {
      await fetch('http://localhost:4000/removeproduct', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      fetchProducts();
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  return (
    <div className='p-4 bg-white rounded-md shadow-md w-full'>
      <h2 className='text-lg font-semibold mb-4'>Product List</h2>
      <div className='overflow-auto max-h-80'>
        <table className='w-full border-collapse'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='p-2'>Image</th>
              <th className='p-2'>Title</th>
              <th className='p-2'>Old Price</th>
              <th className='p-2'>New Price</th>
              <th className='p-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className='border-b'>
                <td className='p-2'>
                  <img src={product.image} alt={product.name} className='h-12 w-12 object-cover rounded' />
                </td>
                <td className='p-2'>{product.name}</td>
                <td className='p-2'>Kes {product.old_price}</td>
                <td className='p-2'>Kes {product.new_price}</td>
                <td className='p-2 text-red-500 cursor-pointer'>
                  <TbTrash onClick={() => removeProduct(product.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;
