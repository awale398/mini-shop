import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './ServicePage.css'; // Importing styles for the page

const ServicePage = () => {
  return (
    <div className="service-page">
      {/* Header Section */}
      <header className="service-header">
        <h1>Our Food Delivery & Catering Services</h1>
        <p>Your favorite meals delivered straight to your door, or let us cater your special events!</p>
      </header>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="reasons">
          <div className="reason">
            <h3>Fast & Reliable Delivery</h3>
            <p>Get your meals delivered hot and fresh in no time, with our efficient delivery network.</p>
          </div>
          <div className="reason">
            <h3>Wide Selection of Restaurants</h3>
            <p>Explore a wide range of restaurants, from local favorites to global cuisine, all in one place.</p>
          </div>
          <div className="reason">
            <h3>Easy-to-Use App</h3>
            <p>Order your food effortlessly with our intuitive app, available on both mobile and desktop.</p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="our-services">
        <h2>Our Services</h2>
        <div className="service-item">
          <h3>Order Food Anytime, Anywhere</h3>
          <p>Whether you're at home, at work, or on the go, we make it easy to get your meal wherever you are.</p>
        </div>
        <div className="service-item">
          <h3>Track Your Order in Real-Time</h3>
          <p>Our live order tracking feature lets you follow your meal's journey from kitchen to doorstep.</p>
        </div>
        <div className="service-item">
          <h3>Contactless Delivery</h3>
          <p>Enjoy safe and secure delivery with our contactless delivery option, ensuring your peace of mind.</p>
        </div>
        <div className="service-item">
          <h3>Exclusive Offers & Discounts</h3>
          <p>Save more with special offers, promotions, and discounts available exclusively to our customers.</p>
        </div>
        <div className="service-item">
          <h3>Catering Services for Events & Meetings</h3>
          <p>Hosting a meeting or special event? We provide catering services tailored to your needs, offering a variety of menu options for corporate meetings, parties, or social gatherings.</p>
        </div>
        <div className="service-item">
          <h3>Custom Cake Baking for Special Occasions</h3>
          <p>Celebrating a birthday, anniversary, or special event? Let us bake a custom cake for you! Choose from a wide selection of designs and flavors, and we'll bring your vision to life.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Order or Plan Your Event?</h2>
        <p>Whether you're looking to satisfy a craving or plan a special event, we're here to help. Get in touch today!</p>
        <Link to="/Display" className="cta-button">Order Now</Link> {/* Link to Products.jsx */}
        <Link to="" className="cta-button">Book Catering</Link> {/* Link to Catering Page */}
      </section>

     
    </div>
  );
};

export default ServicePage;
