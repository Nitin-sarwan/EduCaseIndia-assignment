import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Profile from './Components/Profile/Profile';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App
