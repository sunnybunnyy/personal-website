import React from 'react'
import Image from 'next/image'
import profilePic from '../../public/profilePic.jpg'

const Profile = () => {
  return (
    <div className='profileContainer'>
        <Image 
          src={profilePic} 
          className='profilePic'
          alt='profile picture'
        />
        <div className='profileDetails'>
          <h1>Radha Kotra</h1>
          <h2>Software Engineer | Computer Science @ uWaterloo</h2>
        </div>
    </div>
  )
}

export default Profile