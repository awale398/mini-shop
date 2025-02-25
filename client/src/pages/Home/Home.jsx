import React from 'react'
import './Home.css'
import AboutImage from "../../assets/food_18.png"
import client1 from "../../assets/client1.png"
import client2 from "../../assets/client2.png"
import client3 from "../../assets/client3.png"
import food1 from "../../assets/food_26.png"
import food2 from "../../assets/food_25.png"
import {Link} from 'react-router-dom'


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
    {/* ----------------special offer---------------- */}

    {/* -------our special---------------------- */}
    <div className="popular-food-section">
      <h1>Popular <span>Foods</span></h1>
      <div className="popular-food-container">
        <div className="popular-food-card">
          <img src={food1} alt="" />
          <div className="popular-food-card-text">
            <h2>Tomato Pasta</h2>
            <p>Enjoy al dente pasta in a rich tomato sauce made with vine-ripened tomatoes, garlic, and herbs. Topped with Parmesan cheese and fresh basil, this dish is a flavorful classic.</p>
            <Link to= '/Products' ><button>Order Now</button></Link>
          </div>
        </div>

        <div className="popular-food-card">
          <img src={food2} alt="" />
          <div className="popular-food-card-text">
            <h2>Cheese Pasta</h2>
            <p>Indulge in creamy and delicious pasta coated in a velvety cheese sauce. Made with a blend of premium cheeses, this dish is rich, comforting, and sure to satisfy your cravings. Perfect for cheese lovers</p>
            <Link to= '/Products' ><button>Order Now</button></Link>
          </div>
        </div>
      </div>

    </div>
    {/* -----------testimonials------------------ */}
  <div className="testimonial-section">
      <h2>what our <span>customers</span> say</h2>
      <div className="testimonial-section-card">
        <div className="testimonial-card">
          <p><span>"</span>Dining at Tomato was a fantastic experience. The food was amazing, especially the Grilled Chicken Alfredo. The staff were friendly and the ambiance was perfect. Plus, their door-to-door delivery service is super convenient. We'll definitely be back<span>"</span></p>
            <div className="testimonial-card-img">
              <img src={client3} alt="customer" />
            </div>
            <h4>John Smith</h4>
        </div>

        <div className="testimonial-card">
          <p><span>"</span>I was blown away by the quality of food and service at Tomato. The Tomato Basil Soup was delicious, and the desserts were heavenly. Their door-to-door delivery service makes it even better. Highly recommended<span>"</span></p>
            <div className="testimonial-card-img">
              <img src={client1} alt="customer" />
            </div>
            <h4>Emily Johnson</h4>
        </div>
        <div className="testimonial-card">
          <p><span>"</span>From start to finish, our meal at Tomato was outstanding. The Beef Tenderloin was cooked to perfection, and the Chocolate Lava Cake was the best I've ever had. Their door-to-door delivery service is a game-changer. We'll be returning for sure<span>"</span></p>
            <div className="testimonial-card-img">
              <img src={client2} alt="customer" />
            </div>
            <h4>Michael Williams</h4>
        </div>
        </div>
      </div>
   </>
    
  )
}

export default Home

