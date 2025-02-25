import React from 'react'
import './Card.css'
// import AboutImage from "../../assets/food_18.png"

const Card = (props) => {
  return (
    <>
    
        <div className="special-offer-section-card">
          <div className="special-offer-section-image">
            <img src={props.image} alt="" />
          </div>
          <div className="special-offer-section-text">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>{props.category}</p>
            <h3>${props.price}</h3>
            <button>Add to Cart +</button>
          </div>
        </div>
      
    
    </>

  )
}

export default Card
