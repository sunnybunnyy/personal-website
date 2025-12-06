import React from 'react'

const Bio = () => {
  return (
    <div className='card mx-5 bg-white'>
      <div className='card-body'>
        <h2 className='card-title'>Bio</h2>
        <p>
          I’m a computer science student at the University of 
          Waterloo with a passion for Android development and 
          machine learning. I enjoy exploring the intersection 
          of mobile technology and intelligent systems to 
          create innovative and user-friendly applications. 
          Beyond coding, I’m an avid runner and weightlifter, 
          finding balance and inspiration through fitness. 
          I’m always eager to learn, grow, and take on new 
          challenges both in tech and in life.
        </p>
        <div className='card-actions'>
          <a className='btn bg-strava-orange text-white' href='Radha_Kotra_resume.pdf'>Resume</a>
          <a className='btn bg-strava-orange text-white' href='https://github.com/sunnybunnyy'>GitHub</a>
          <a className='btn bg-strava-orange text-white' href='https://www.linkedin.com/in/radha-kotra'>LinkedIn</a>
          <a className='btn bg-strava-orange text-white' href='mailto:rkotra@uwaterloo.ca'>Email</a>
        </div>
      </div>
    </div>
  )
}

export default Bio