import Image from 'next/image'
import profilePic from '../../public/profilePic.jpg'

const Profile = () => {
  return (
    <div className='card card-side'>
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
        <div className='card-body my-15'>
          <h1 className='card-title text-4xl font-bold'>Radha Kotra</h1>
          <h3>Software Engineer | Computer Science @ uWaterloo</h3>
        </div>
    </div>
  )
}

export default Profile