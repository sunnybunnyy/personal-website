import Overview from './Overview'
import Description from './Description'
import ImageProps from './Image'
import Image from 'next/image'

interface ProjectProps {
    title: string,
    name: string,
    bullets: string[],
    techStack: string[],
    screenshots: ImageProps[]
}

const Project = ({ title, name, bullets, techStack, screenshots }: ProjectProps) => {
  return (
    <div className='card card-side'>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <h6>{name}</h6>
        <Description
          bullets={bullets}
        />
        <Overview
          title='Tech Stack'
          contents={techStack}
        />
        <div className='screenshotContainer'>
          {screenshots.map((screenshot, index) =>
            <Image 
              key={index}
              src={screenshot.src}
              alt={screenshot.alt}
              className='screenshot'
              width={1000}
              height={1000}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Project