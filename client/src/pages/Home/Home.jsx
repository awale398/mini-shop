import React from 'react'
import './Home.css'
import AboutImage from "../../assets/food_18.png"
import {Link} from 'react-router-dom'
import Card from '../../Components/Card/Card'

const Home = () => {
  return (
   <>
    <div className='hero-page'>
      <h3>Delicious Meals Delivered Fast, Right to Your Doorstep</h3>
      <h1>Quick Bites, Anytime,<br /> Anywhere</h1>
      <p>Craving something delicious? Get your favorite fast food delivered in no time, <br />hot and fresh. Enjoy a variety of tasty options with the convenience of fast delivery, <br /> perfect for when hunger strikes!</p>
      <Link to= '/Products' ><button>Order Now</button></Link>
    </div>
 
{/* -----------about section---------- */}
    <div className="about-section">
      <div className="about-section-image">
        <img src={AboutImage} alt="" />
      </div>
      <div className="about-section-text">
        <h2>About Us</h2>
        <p>Welcome to Tomato, your go-to for freshly baked cakes, pastries, and delicious fast food treats. We specialize in delivering high-quality, flavorful items straight to your door, whether you're celebrating or simply satisfying a craving. <br />At Tomato, we focus on convenience and quality. Our easy-to-use platform ensures your favorite sweet and savory treats arrive fast and fresh, made with the finest ingredients. <br />No matter where you are, Tomato is here to make sure you enjoy every bite. Let us take care of your hunger with delicious meals, delivered to you quickly and conveniently.</p>
      </div>
    </div>
   </>
    
  )
}

export default Home

