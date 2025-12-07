import Highlight from "./Highlight"
import Overview from "./Overview"

const Education = () => {
  return (
    <div className='card card-side'>
      <div className='card-body'>
        <h2 className='card-title'>Education</h2>
        <Highlight
            logo={{
              src: '/waterlooLogo.png',
              alt: 'University of Waterloo logo'
            }}
            icon={{
              src: '/waterlooIcon.png',
              alt: 'University icon'
            }}
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