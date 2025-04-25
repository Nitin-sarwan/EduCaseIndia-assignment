import React from 'react'
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-main">
      <div className="profile-container">
        <div className="profile-heading">
          <h2>Account Settings</h2>
        </div>
        <div className="profile-content">
          <div className="profile-image">
            <img className="profile-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5TmPdRp9mhJQ4Unm0a8Bh0OXTRWHMNz0hQ&s" alt="" />
            <button className="upload">+</button>
            <p className='name'>Marry Doe</p>
            <p className="mail">Marry@Gmail.com</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel aut beatae natus excepturi enim inventore esse cum hic. Voluptatem, veniam!</p>
        </div>
        <hr className="line1" />
        <hr className="line2"/>
      </div>
    </div>
  )
}

export default Profile
