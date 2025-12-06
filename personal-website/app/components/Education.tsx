import Highlight from "./Highlight"
import Overview from "./Overview"
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
        <Overview
            title='Relevant Coursework'
            contents={[
                'Object-Orienting Programming',
                'Computer Architecture',
                'Algorithms',
                'Operating Systems'
            ]}
        />
      </div>
    </div>
  )
}

export default Education