import Highlight, { HighlightProps } from './Highlight'
import Overview, { OverviewProps } from './Overview'
import waterlooLogo from '../../public/waterlooLogo.png'
import waterlooIcon from '../../public/waterlooIcon.png'

interface ExperienceProps {
    highlightProps: HighlightProps,
    title: string,
    role: string,
    description: string[],
    techStack: OverviewProps,
    time: OverviewProps
}

const Experience = ({ highlightProps, title, role, description, techStack, time }: ExperienceProps) => {
  return (
    <div className='card card-side'>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <Highlight {...highlightProps} />
        <h6>{role}</h6>
        <ul>
            {description.map((bullet) => 
            <li>{bullet}</li>
        )}
        </ul>
        <Overview {...techStack} />
        <Overview {...time} />
      </div>
    </div>
  )
}

export default Experience