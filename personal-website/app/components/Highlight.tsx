import Image from 'next/image'
import { StaticImageData } from 'next/image';

export interface HighlightProps {
    logoSrc: StaticImageData;
    logoAlt: string;
    iconSrc: StaticImageData;
    iconAlt: string;
    title: string;
    date: string;
}

const Highlight = ({ logoSrc, logoAlt, iconSrc, iconAlt, title, date }: HighlightProps) => {
  return (
    <div className='card card-side card-highlight'>
        <div className='hover-3d'>
          <Image 
            src={logoSrc} 
            className='logo'
            alt={logoAlt}
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
                    src={iconSrc}
                    className='icon'
                    alt={iconAlt}
                />
                <h5>{date}</h5>
            </div>
        </div>
    </div>
  )
}

export default Highlight