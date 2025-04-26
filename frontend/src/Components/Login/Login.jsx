import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [data,setData]=useState({});
  const [errors,setError]=useState({});
  const submitHandler=(e)=>{
    e.preventDefault();
    const newErrors={};
    const newemail=email.trim();
    if (password.length < 8) { newErrors.password = "Password should be more than 8 characters" }
    if (password.length > 20) { newErrors.password = "Password should be less than 20 characters" }
    if (!email.endsWith('@gmail.com')) { newErrors.email = "Email should be ended with @gmail.com" }
    if (email.includes(' ')) { newErrors.email = "Invalid format!" }
    if (newemail.length < 11) { newErrors.email = "Invalid fotmat!" }
    setError(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    setData({newemail,password});
   
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
            <label htmlFor="emailaddress">Email Address</label>
            <input type="text"
             id="emailaddress"
             placeholder="Enter email address"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
              required
             />
             {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
            <label  htmlFor="passwordd">Password</label>
            <input type="password" 
            id="passwordd"
            placeholder="Enter password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required />
            {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <button className="loging-button" type="submit">Login</button>
          </form>
          
        </div>
      </div>
       
    </div>
  )
}

export default Login
