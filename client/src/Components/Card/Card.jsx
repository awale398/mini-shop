import React from 'react'
import './Card.css'
import rating_stars from "../../assets/rating_starts.png"

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
            <p style = {{fontWeight:'bold'}}>{props.category}</p>
            <div className="ratings">
            <img src={rating_stars} alt="" />
            </div>
            <h3>${props.price}</h3>
            <button>Add to Cart +</button>
          </div>
        </div>
      
    
    </>

  )
}

export default Card
