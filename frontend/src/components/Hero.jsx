import React from 'react'
import heroImage from "../assets/hero-background.jpg";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <header className="navigation-bar">
        <p>Cinema <span>Select</span></p>
        <div> 
        <Link to="/login"><button className="login">Login</button></Link>
        <Link to="/signup"><button className="sign-up">Sign up</button></Link>
        </div>
      </header>

      <section className="hero">
        <div>
          <span>
            <h1>Your Favorite Shows, One Click Away Book Tickets Instantly!</h1>
            <h2>Join us today! Log in or sign up to start booking.</h2>
            <Link to="/signup"><button>Get Started</button></Link>
          </span>
        </div>
        <img src={heroImage} alt="Main Banner Image"/>
      </section>
    </>
  )
}
export default Hero
