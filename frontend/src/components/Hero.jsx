import React from 'react'
import heroImage from "../assets/hero-background.jpg";

const Hero = () => {
  return (
    <>
      <header className="navigation-bar">
        <p>Cinema <span>Select</span></p>
        <div> 
          <button className="login">Login</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </header>

      <section className="hero">
        <div>
          <span>
            <h1>Your Favorite Shows, One Click Away Book Tickets Instantly!</h1>
            <h2>Join us today! Log in or sign up to start booking.</h2>
            <button>Get Started</button>
          </span>
        </div>
        <img src={heroImage} alt="Main Banner Image"/>
      </section>
    </>
  )
}
export default Hero
