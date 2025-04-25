import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home-main">
      <div className="home-container">
        <div className="home-content">
        <div className="home-heading">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
         <div className="home-buttons">
          <Link  className="signup-button" to="/signup">Create Account</Link>
          <Link className="login-button" to="/login">Already Registerd? Login</Link>
         </div>
      </div>
      </div>

        
    </div>
  )
}
export default Home
