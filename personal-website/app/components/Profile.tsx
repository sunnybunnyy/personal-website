import React from 'react'
import Image from 'next/image'
import profilePic from '../../public/profilePic.jpg'

const Profile = () => {
  return (
    <div className='profileContainer'>
        <div className='hover-3d'>
          <Image 
            src={profilePic} 
            className='profilePic'
            alt='profile picture'
          />

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='profileDetails'>
          <h1>Radha Kotra</h1>
          <h3>Software Engineer | Computer Science @ uWaterloo</h3>
        </div>
    </div>
  )
}

export default Profile