import React from 'react'
import heroImage from "../assets/hero-background.jpg";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <header className="navigation-bar">
        <p>Cinema <span>Select</span></p>
        <div> 
          <button className="login"><Link to="/login" >Login</Link></button>
          <button className="sign-up"><Link to="/signup">Sign up</Link></button>
        </div>
      </header>

      <section className="hero">
        <div>
          <span>
            <h1>Your Favorite Shows, One Click Away Book Tickets Instantly!</h1>
            <h2>Join us today! Log in or sign up to start booking.</h2>
            <button><Link to="/signup">Get Started</Link></button>
          </span>
        </div>
        <img src={heroImage} alt="Main Banner Image"/>
      </section>
    </>
  )
}
export default Hero
