import Experience from "./Experience"
import nokiaLogo from '../../public/nokiaLogo.png'
import nokiaIcon from '../../public/nokiaIcon.png'

const Nokia = () => {
  return (
    <Experience
        highlightProps={{
            logoSrc: nokiaLogo,
            logoAlt: 'Nokia logo',
            iconSrc: nokiaIcon,
            iconAlt: 'Nokia icon',
            title: 'Caribou Contests',
            date: 'Jul. 2022'
        }}
        title='Internship #1'
        role='Network Analytics Intern'
        description={[
            `Built an unsupervised ML tool using k-means clustering
             to detect anomalies in 1000+ customer network logs, 
             enabling proactive troubleshooting`,
            `Developed a fuzzy matching heuristic algorithm that 
            increased correct statistic name matches by 26%`,
            `Normalized debug log data, improving downstream 
            analysis consistency by 38%`,
            `Added CSV/JSON support to packet filtering script, 
            enabling processing of 4 data formats`
        ]}
        techStack={[
            'HTML',
            'CSS',
            'JavaScript',
            'PHP',
            'MySQL',
        ]}
        time={2}
    />
  )
}

export default Nokia