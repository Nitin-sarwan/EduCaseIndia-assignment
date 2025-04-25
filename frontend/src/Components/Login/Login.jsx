import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [data,setData]=useState({});
  const submitHandler=(e)=>{
    e.preventDefault();
    setData({email,password});
    setEmail('');
    setPassword('');
    navigate('/profile');
  }
  return (
    <div className="main">
      <div className="container">
        <div className="content">
          <div className="login-heading">
            <div className="h1"><h1>Sign in to your PopX account</h1></div> 
            <div className="p"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
          </div>
          <form className="form-input" onSubmit={submitHandler}>
            <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="text"
             placeholder="Enter email address"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
              required
             />
            </div>
            <div className="form-group">
            <label  htmlFor="password">Password</label>
            <input type="password" 
            placeholder="Enter password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required />
            </div>
            <button className="loging-button" type="submit">Login</button>
          </form>
          
        </div>
      </div>
       
    </div>
  )
}

export default Login
