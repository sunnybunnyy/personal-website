import Highlight from "./Highlight"
import waterlooLogo from '../../public/waterlooLogo.png'
import waterlooIcon from '../../public/waterlooIcon.png'

const Education = () => {
  return (
    <div className='card card-side'>
      <div className='card-body'>
        <h2 className='card-title'>Education</h2>
        <Highlight
            logoSrc={waterlooLogo}
            logoAlt='University of Waterloo logo'
            iconSrc={waterlooIcon}
            iconAlt='University icon'
            title='University of Waterloo'
            date='Sep. 2023 - Apr. 2027'
        />
        <p>
          Bachelor of Computer Science (Honours), Co-op <br />
          AI Specialization, Psychology Minor <br />
          CGPA: 90%
        </p>
        <h5>Relevant Coursework</h5>
        <div className='card-actions'>
          <button className='badge bg-strava-orange text-white'>Object-Orienting Programming</button>
          <button className='badge bg-strava-orange text-white'>Computer Architecture</button>
          <button className='badge bg-strava-orange text-white'>Algorithms</button>
          <button className='badge bg-strava-orange text-white'>Operating Systems</button>
        </div>
      </div>
    </div>
  )
}

export default Education