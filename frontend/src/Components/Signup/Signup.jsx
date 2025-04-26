import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate();
  const [fullname,setFullname]=useState('');
  const [phonenumber,setPhonenumber]=useState('');
  const [emailaddress,setEmailaddress]=useState('');
  const [password,setPassword]=useState('');
  const [companyname,setCompanyname]=useState('');
  const [agency,setAgency]=useState('');
  const [errors,setError]=useState({});
  const handleSubmit=(e)=>{
    e.preventDefault();
    // Handle form submission logic here



    const newemail=emailaddress.trim();
    const newErrors={};
    if(fullname.trim().length == 0){ newErrors.fullname="Full name is required"}
    if(phonenumber.trim().length == 0){ newErrors.phonenumber="Phone number is required"}
    if(emailaddress.trim().length == 0){ newErrors.emailaddress="Email address is required"}
    if(password.trim().length == 0){ newErrors.password="Password is required"}
    if(companyname.trim().length == 0){ newErrors.companyname="Company name is required"}
    if(newemail.length == 0){ newErrors.emailaddress="Email address is required"}
    if(phonenumber.length<10 && phonenumber.length>0){ newErrors.phonenumber="This phone number is invalid"}
    if (phonenumber.length > 10) { newErrors.phonenumber ="This phone number is invalid"}
    if(password.length<8 && password.length>0){ newErrors.password="Password should be more than 8 characters"}
    if(password.length>20){ newErrors.password="Password should be less than 20 characters"}
    if(companyname.length<2 && companyname.length>0){ newErrors.companyname="Company name should be more than 2 characters"}
    if(companyname.length>20){ newErrors.companyname="Company name should be less than 20 characters"}
    if(!emailaddress.endsWith('@gmail.com') && newemail.length>0){ newErrors.emailaddress="Invalid format!"}
    if(emailaddress.includes(' ')){ newErrors.emailaddress="Invalid format!"}
    if(!agency){ newErrors.agency="Please select an option"}

    setError(newErrors);
    if(Object.keys(newErrors).length>0){
      return;
    }



    console.log('Form submitted:', {
      fullname,
      phonenumber,
      emailaddress,
      password,
      companyname,
      agency
    });

    // Reset form fields after submission
    setFullname('');
    setPhonenumber('');
    setEmailaddress('');
    setPassword('');
    setCompanyname('');
    setAgency('');
     navigate('/profile');

  }
  return (
    <div className="signup-main">
      <div className="signup-container">
        <div className="signup-content">
          <div className="heading">
            <h1>Create your PopX account</h1>
          </div>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
            <label className="full-name-label" htmlFor="full-name">Full Name <span>*</span></label>
            <input type="text"
             id="full-name"
             placeholder="Enter your full name"
             value={fullname}
             onChange={(e)=>setFullname(e.target.value)}
              />
              {errors.fullname && <span className="error">{errors.fullname}</span>}
            </div>
            <div className="form-group">
            <label className="phone-number-label" htmlFor="phone-number">Phone number <span>*</span></label>
            <input type="number" 
            id="phone-number" 
            placeholder="Enter your phone number" 
            value={phonenumber}
            onChange={(e)=>setPhonenumber(e.target.value)}
            />
            {errors.phonenumber && <span className="error">{errors.phonenumber}</span>}
            </div>
            <div className="form-group">
            <label className="email-address-label" htmlFor="">Email Address <span>*</span></label>
            <input type="text" 
            placeholder="Enter your email address"
            value={emailaddress}
            onChange={(e)=>setEmailaddress(e.target.value)}
            />
            {errors.emailaddress && <span className="error">{errors.emailaddress}</span>}
            </div>
            <div className="form-group">
            <label className="signup-password-label" htmlFor="">Password <span>*</span></label>
            <input type="password" 
            placeholder="Enter your password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
           
           
            />
            {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <div className="form-group">
            <label className="company-label" htmlFor="">Company Name <span>*</span></label>
            <input type="text" 
            placeholder="Enter your company name"
            value={companyname}
            onChange={(e)=>setCompanyname(e.target.value)}
           
            />
            {errors.companyname && <span className="error">{errors.companyname}</span>}
            </div>
            <div className="signup-agency">
            <p>Are you Agency <span>*</span></p>
            <div className="radio-buttons">
            <div className="yes-button">
            <input type="radio"
             id="yes" 
             name="agency" 
             value="yes" 
             checked={agency === 'yes'}
             onChange={(e)=>setAgency(e.target.value)}
             />
            <label htmlFor="yes">Yes</label>
            </div>
            <div className="no-button">
            <input type="radio"
             id="no" 
             name="agency" 
             value="no"
             checked={agency === 'no'}
             onChange={(e)=>setAgency(e.target.value)}
              />
            <label htmlFor="no">No</label>
            </div>
            </div>
            {errors.agency && <span className="error">{errors.agency}</span>}
            </div>
           <button className="sign-button" type="submit">Create Account</button>
          </form>
        </div>
      </div>
    
    </div>
  )
}

export default Signup
