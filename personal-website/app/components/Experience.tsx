import Highlight, { HighlightProps } from './Highlight'
import Overview, { OverviewProps } from './Overview'
import waterlooLogo from '../../public/waterlooLogo.png'
import waterlooIcon from '../../public/waterlooIcon.png'

interface ExperienceProps {
    highlightProps: HighlightProps,
    title: string,
    role: string,
    description: string[],
    techStack: string[],
    time: Number
}

const Experience = ({ highlightProps, title, role, description, techStack, time }: ExperienceProps) => {
  return (
    <div className='card card-side'>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <Highlight {...highlightProps} />
        <h6>{role}</h6>
        <ul>
            {description.map((bullet, index) => 
            <li key={index} className='list-disc'>{bullet}</li>
        )}
        </ul>
        <Overview
            title='Tech Stack'
            contents={techStack}
        />
        <Overview
            title='Time'
            contents={[time.toString() + ' months']}
        />
      </div>
    </div>
  )
}

export default Experience