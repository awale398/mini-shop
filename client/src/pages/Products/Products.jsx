import React from 'react'
import './Products.css'
import Card from '../../Components/Card/Card'
import {food_list} from '../../assets/assets.js'

const Products = () => {
  return (
    <>
  
    <div className="products-section">
      <h1>Our Menu</h1>
      <hr />
      <div className="menu-items">
        {food_list.map ( (item, i) => {
          return(
            <Card key = {i} id={item._id} name={item.name} description={item.description} price = {item.price} image = {item.image} />
          )
        })}
      </div>
    </div>
    </>
  )
}

export default Products
