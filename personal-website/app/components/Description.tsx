interface DescriptionProps {
    bullets: string[]
}

const Description = ({ bullets }: DescriptionProps) => {
  return (
    <ul>
        {bullets.map((bullet, index) => 
        <li key={index} className='list-disc'>{bullet}</li>
    )}
    </ul>
  )
}

export default Description