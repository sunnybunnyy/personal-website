import Highlight, { HighlightProps } from './Highlight'
import Overview from './Overview'
import Description from './Description'

interface ExperienceProps {
    highlightProps: HighlightProps,
    title: string,
    role: string,
    bullets: string[],
    techStack: string[],
    time: Number
}

const Experience = ({ highlightProps, title, role, bullets, techStack, time }: ExperienceProps) => {
    return (
        <div className='card card-side'>
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>
                <Highlight {...highlightProps} />
                <h6>{role}</h6>
                <Description bullets={bullets} />
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