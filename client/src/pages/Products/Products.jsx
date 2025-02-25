import React from 'react'
import './Products.css'
import {useState} from 'react'
import Card from '../../Components/Card/Card'
import {food_list} from '../../assets/assets.js'

const Products = () => {

  const [cart, setCart] = useState([])
 
  const addToCart = (item) =>{
    setCart([cart, item])
  
  }
  return (
    <>
  
    <div className="products-section">
      <h1>Our Mouth Watering Menu</h1>
      <hr />
      <input type="text" className="search-category" placeholder='Search food ..'/>

      <div className="menu-items">
        {food_list.map ( (item, i) => {
          return(
            <Card key = {i} id={item._id} name={item.name} description={item.description} price = {item.price} image = {item.image} category = {item.category}
            addToCart = {() => addToCart(item)}
            />
          )
        })}
      </div>
    </div>
    </>
  )
}

export default Products
