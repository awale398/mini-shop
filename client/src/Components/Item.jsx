import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

// Item component represents a single product item in a grid/list
const Item = ({id, name, Image, old_price, new_price}) => {
  return (
    <div className='rounded-xl overflow-hidden shadow-lg'>
        {/* Image section with hover effect and search icon */}
        <div className='relative flexCenter group overflow-hidden transition-all duration-100'>
            {/* Clicking the search icon navigates to the product page */}
            <Link to={`/product/${id}`} className='h-12 w-12 bg-white rounded-full flexCenter absolute top-1/2 bottom-1/2 !py-2 z-20 transition-all duration-700'>
            <FaSearch className='scale-125 hover:rotate-90 transition-all duration-200'/></Link>
            
            {/* Product image with hover zoom effect */}
            <img onClick={window.scrollTo(0,0)} src={Image} alt='productImage'  className='w-full block object-cover
            group-hover:scale-110 transition-all duration-1000'/>
        </div>
        
        {/* Product details section */}
        <div className='p-4 overflow-hidden'>
            {/* Product name */}
            <h4 className='my-[6px] medium-16 line-clamp-2 text-gray-30 '>{name}</h4>
            
            {/* Pricing section */}
            <div className='flex gap-5'>
                <div className='bold-16'>{old_price}.00</div>
                <div className='text-secondary bold-16 line-through'>{new_price}.00</div>
            </div>
        </div>
    </div>
  )
}

export default Item
