interface Props {
    title: string;
    contents: string[];
}

const Overview = ({ title, contents }: Props) => {
  return (
    <>
        <h5>{title}</h5>
        <div className='card-actions'>
            {contents.map((content) => 
                <button className='badge bg-strava-orange text-white'>{content}</button>    
            )}
        </div>
    </>
  )
}

export default Overview