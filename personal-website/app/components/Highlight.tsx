import Image from 'next/image'
import ImageProps from './Image';

export interface HighlightProps {
    logo: ImageProps
    icon: ImageProps
    title: string;
    date: string;
}

const Highlight = ({ logo, icon, title, date }: HighlightProps) => {
  return (
    <div className='card card-side card-highlight'>
        <div className='hover-3d'>
          <Image 
            src={logo.src}
            className='logo'
            alt={logo.alt}
            width={60}
            height={60}
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
        <div className='card-body py-0'>
            <h4 className='card-title'>{title}</h4>
            <div className='iconContainer'>
                <Image
                    src={icon.src}
                    className='icon'
                    alt={icon.alt}
                    width={20}
                    height={20}
                />
                <h5>{date}</h5>
            </div>
        </div>
    </div>
  )
}

export default Highlight